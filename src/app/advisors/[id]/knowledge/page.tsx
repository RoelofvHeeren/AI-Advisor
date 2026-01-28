'use client';

import { useState, useEffect, use } from 'react';
import { useDropzone } from 'react-dropzone';
import {
    FileUp,
    FileText,
    CheckCircle2,
    Loader2,
    ArrowLeft,
    Trash2,
    Upload,
    AlertCircle
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function KnowledgePage({ params }: { params: Promise<{ id: string }> }) {
    const { id: advisorId } = use(params);
    const [advisor, setAdvisor] = useState<any>(null);
    const [documents, setDocuments] = useState<any[]>([]);
    const [activeTab, setActiveTab] = useState<'upload' | 'transcript' | 'web'>('upload');

    // States
    const [isIngesting, setIsIngesting] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data: adv } = await supabase.from('advisors').select('*').eq('id', advisorId).single();
            const { data: docs } = await supabase.from('documents').select('*').eq('advisor_id', advisorId);
            setAdvisor(adv);
            setDocuments(docs || []);
        };
        fetchData();
    }, [advisorId]);

    const onDrop = async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (!file) return;

        setIsIngesting(true);
        setStatus(`Extracting knowledge from ${file.name}...`);

        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('advisorId', advisorId);
            formData.append('type', 'pdf');
            formData.append('title', file.name);

            const res = await fetch('/api/ingest', {
                method: 'POST',
                body: formData
            });

            const data = await res.json();
            if (data.success) {
                setStatus(`Successfully indexed ${data.chunks} chunks!`);
                // Refresh docs
                const { data: docs } = await supabase.from('documents').select('*').eq('advisor_id', advisorId);
                setDocuments(docs || []);
            } else {
                setStatus(`Error: ${data.error}`);
            }
        } catch (e) {
            setStatus('Failed to process file.');
        } finally {
            setIsIngesting(false);
        }
    };

    const handleTranscriptSubmit = async () => {
        if (!transcript || !title) return;

        setIsIngesting(true);
        setStatus('Indexing transcript...');

        try {
            const formData = new FormData();
            formData.append('content', transcript);
            formData.append('advisorId', advisorId);
            formData.append('type', 'text');
            formData.append('title', title);

            const res = await fetch('/api/ingest', {
                method: 'POST',
                body: formData
            });

            const data = await res.json();
            if (data.success) {
                setStatus(`Successfully indexed ${data.chunks} chunks!`);
                setTranscript('');
                setTitle('');
                // Refresh docs
                const { data: docs } = await supabase.from('documents').select('*').eq('advisor_id', advisorId);
                setDocuments(docs || []);
            } else {
                setStatus(`Error: ${data.error}`);
            }
        } catch (e) {
            setStatus('Failed to process transcript.');
        } finally {
            setIsIngesting(false);
        }
    };

    const handleWebScrape = async () => {
        if (!url) return;

        setIsIngesting(true);
        setStatus(`Scraping content from ${url}...`);

        try {
            const formData = new FormData();
            formData.append('url', url);
            formData.append('advisorId', advisorId);
            formData.append('type', 'web');
            formData.append('title', url);

            const res = await fetch('/api/ingest', {
                method: 'POST',
                body: formData
            });

            const data = await res.json();
            if (data.success) {
                setStatus(`Successfully indexed ${data.chunks} chunks from web!`);
                setUrl('');
                // Refresh docs
                const { data: docs } = await supabase.from('documents').select('*').eq('advisor_id', advisorId);
                setDocuments(docs || []);
            } else {
                setStatus(`Error: ${data.error}`);
            }
        } catch (e) {
            setStatus('Failed to scrape web page.');
        } finally {
            setIsIngesting(false);
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'application/pdf': ['.pdf'] },
        multiple: false
    });

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            {/* Back button & Breadcrumb */}
            <Link href="/advisors" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">Back to Advisors</span>
            </Link>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-luxury">
                <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10">
                        <img src={advisor?.avatar_url} alt="" className="w-full h-full object-cover" />
                    </div>
                    <h1 className="font-serif text-3xl font-bold text-white">
                        {advisor?.name}<span className="text-[#139187]/60">.brain</span>
                    </h1>
                </div>
                <p className="text-sm text-gray-400">Expand the information this advisor can draw from.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Input */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass rounded-2xl p-6">
                        <div className="flex gap-4 p-1 bg-black/20 rounded-xl mb-6">
                            <button
                                onClick={() => setActiveTab('upload')}
                                className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'upload' ? 'bg-[#139187] text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                PDF UPLOAD
                            </button>
                            <button
                                onClick={() => setActiveTab('transcript')}
                                className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'transcript' ? 'bg-[#139187] text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                TRANSCRIPT
                            </button>
                            <button
                                onClick={() => setActiveTab('web')}
                                className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'web' ? 'bg-[#139187] text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                WEB URL
                            </button>
                        </div>

                        {activeTab === 'upload' && (
                            <div
                                {...getRootProps()}
                                className={`border-2 border-dashed rounded-2xl p-12 flex flex-col items-center justify-center transition-all cursor-pointer ${isDragActive ? 'border-[#139187] bg-[#139187]/10' : 'border-white/10 hover:border-white/20 bg-black/10'}`}
                            >
                                <input {...getInputProps()} />
                                <div className="w-16 h-16 rounded-full bg-[#139187]/10 flex items-center justify-center mb-4">
                                    <Upload className="text-[#139187]" size={32} />
                                </div>
                                <p className="text-lg font-bold text-white mb-1">Drag & drop PDF here</p>
                                <p className="text-sm text-gray-400">or click to browse from computer</p>
                            </div>
                        )}

                        {activeTab === 'transcript' && (
                            <div className="space-y-4">
                                <input
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder="Title (e.g. Podcast with Joe Rogan)"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#139187] transition-all"
                                />
                                <textarea
                                    rows={10}
                                    value={transcript}
                                    onChange={e => setTranscript(e.target.value)}
                                    placeholder="Paste the transcript or long-form notes here..."
                                    className="w-full bg-black/20 border border-white/10 rounded-2xl px-4 py-3 text-white text-sm outline-none focus:border-[#139187] transition-all resize-none"
                                />
                                <button
                                    onClick={handleTranscriptSubmit}
                                    disabled={isIngesting || !transcript || !title}
                                    className="w-full py-4 bg-gradient-to-r from-[#139187] to-[#0d6b63] text-white font-bold rounded-xl shadow-lg disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                                >
                                    {isIngesting ? <Loader2 className="animate-spin" size={20} /> : <CheckCircle2 size={20} />}
                                    Process Transcript
                                </button>
                            </div>
                        )}

                        {activeTab === 'web' && (
                            <div className="space-y-4">
                                <div className="p-4 bg-black/20 rounded-xl border border-white/5 flex items-center gap-3">
                                    <AlertCircle className="text-amber-500" size={16} />
                                    <p className="text-xs text-gray-500">Enter a URL to scrape text content directly into the brain.</p>
                                </div>
                                <input
                                    value={url}
                                    onChange={e => setUrl(e.target.value)}
                                    placeholder="https://example.com/blog-post"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#139187] transition-all"
                                />
                                <button
                                    onClick={handleWebScrape}
                                    disabled={isIngesting || !url}
                                    className="w-full py-4 bg-gradient-to-r from-[#139187] to-[#0d6b63] text-white font-bold rounded-xl shadow-lg disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                                >
                                    {isIngesting ? <Loader2 className="animate-spin" size={20} /> : <Upload size={20} />}
                                    Scrape & Index URL
                                </button>
                            </div>
                        )}

                        {status && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`mt-6 p-4 rounded-xl flex items-center gap-3 border ${status.includes('Error') ? 'bg-red-500/10 border-red-500/30 text-red-400' : 'bg-green-500/10 border-green-500/30 text-green-400'}`}
                            >
                                {status.includes('Error') ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
                                <span className="text-sm font-medium">{status}</span>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Right Column: List */}
                <div className="space-y-6">
                    <div className="glass rounded-2xl p-6">
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                            <FileText size={18} className="text-[#139187]" />
                            Current Knowledge
                        </h3>
                        <div className="space-y-3">
                            {documents.map((doc) => (
                                <div key={doc.id} className="p-4 bg-black/30 rounded-xl border border-white/5 group hover:border-white/10 transition-colors">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${doc.content_type === 'pdf' ? 'bg-amber-500/20 text-amber-500' : 'bg-indigo-500/20 text-indigo-400'}`}>
                                            {doc.content_type}
                                        </span>
                                        <button className="opacity-0 group-hover:opacity-100 p-1 hover:text-red-400 transition-all">
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                    <p className="text-sm font-bold text-white truncate mb-1">{doc.title}</p>
                                    <p className="text-[10px] text-gray-500">{new Date(doc.created_at).toLocaleDateString()}</p>
                                </div>
                            ))}
                            {documents.length === 0 && (
                                <p className="text-center text-sm text-gray-500 py-10">No knowledge indexed yet.</p>
                            )}
                        </div>
                    </div>

                    <div className="bg-[#139187]/10 border border-[#139187]/20 rounded-2xl p-6">
                        <h4 className="text-xs font-bold text-[#139187] uppercase tracking-widest mb-2">PRO TIP</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            The quality of the advice depends on the quality of the input. Use clean transcripts and specific books for the best results.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
