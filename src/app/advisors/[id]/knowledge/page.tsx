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
    AlertCircle,
    Sparkles,
    Search,
    Youtube,
    X
} from 'lucide-react';
import { supabaseClient as supabase } from '@/lib/supabase-client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function AdvisorKnowledgePage({ params }: { params: Promise<{ id: string }> }) {
    const { id: advisorId } = use(params);
    const [advisor, setAdvisor] = useState<any>(null);
    const [documents, setDocuments] = useState<any[]>([]);
    const [activeTab, setActiveTab] = useState<'upload' | 'transcript' | 'web' | 'research' | 'youtube'>('upload');

    // States
    const [isIngesting, setIsIngesting] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [url, setUrl] = useState('');
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [researchQuery, setResearchQuery] = useState('');
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState<string | null>(null);

    const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
    const [viewingDoc, setViewingDoc] = useState<any>(null);
    const [isFetchingDoc, setIsFetchingDoc] = useState(false);
    const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
        api: false,
        support: true,
        youtube: false
    });

    const fetchAllDocuments = async () => {
        let allDocs: any[] = [];
        let { data: batch } = await supabase
            .from('documents')
            .select('*')
            .eq('advisor_id', advisorId)
            .order('created_at', { ascending: false });

        if (batch) allDocs = [...batch];

        while (batch && batch.length === 1000) {
            const { data: nextBatch } = await supabase
                .from('documents')
                .select('*')
                .eq('advisor_id', advisorId)
                .order('created_at', { ascending: false })
                .range(allDocs.length, allDocs.length + 999);
            if (!nextBatch || nextBatch.length === 0) break;
            allDocs = [...allDocs, ...nextBatch];
            batch = nextBatch;
        }
        return allDocs;
    };

    useEffect(() => {
        const fetchData = async () => {
            const { data: adv } = await supabase.from('advisors').select('*').eq('id', advisorId).single();
            setAdvisor(adv);
            const allDocs = await fetchAllDocuments();
            setDocuments(allDocs);
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
                const allDocs = await fetchAllDocuments();
                setDocuments(allDocs);
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
                const allDocs = await fetchAllDocuments();
                setDocuments(allDocs);
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
                const allDocs = await fetchAllDocuments();
                setDocuments(allDocs);
            } else {
                setStatus(`Error: ${data.error}`);
            }
        } catch (e) {
            setStatus('Failed to scrape web page.');
        } finally {
            setIsIngesting(false);
        }
    };

    const handleResearch = async () => {
        if (!researchQuery) return;

        setIsIngesting(true);
        setStatus(`Searching and researching "${researchQuery}"... This may take a minute.`);

        try {
            const res = await fetch('/api/research', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: researchQuery,
                    advisorId: advisorId
                })
            });

            const data = await res.json();
            if (data.success) {
                setStatus(`Research complete! Found and indexed ${data.results.length} sources.`);
                setResearchQuery('');
                const allDocs = await fetchAllDocuments();
                setDocuments(allDocs);
            } else {
                setStatus(`Error: ${data.error}`);
            }
        } catch (e) {
            setStatus('Failed to complete auto-research.');
        } finally {
            setIsIngesting(false);
        }
    };

    const handleYoutubeSubmit = async () => {
        if (!youtubeUrl) return;

        setIsIngesting(true);
        setStatus(`Extracting transcript from YouTube video...`);

        try {
            const formData = new FormData();
            formData.append('url', youtubeUrl);
            formData.append('advisorId', advisorId);
            formData.append('type', 'youtube');

            const res = await fetch('/api/ingest', {
                method: 'POST',
                body: formData
            });

            const data = await res.json();
            if (data.success) {
                setStatus(`Successfully indexed YouTube transcript! (${data.chunks} chunks)`);
                setYoutubeUrl('');
                const allDocs = await fetchAllDocuments();
                setDocuments(allDocs);
            } else {
                setStatus(`Error: ${data.error}`);
            }
        } catch (e) {
            setStatus('Failed to process YouTube video.');
        } finally {
            setIsIngesting(false);
        }
    };

    const handleDeleteDocument = async (docId: string) => {
        if (!confirm('Are you sure you want to delete this document? This will remove all associated AI context.')) return;

        const { error } = await supabase.from('documents').delete().eq('id', docId);
        if (!error) {
            setDocuments(prev => prev.filter(d => d.id !== docId));
        } else {
            alert('Error deleting document: ' + error.message);
        }
    };

    const handleViewDocument = async (docId: string) => {
        setSelectedDocId(docId);
        setIsFetchingDoc(true);
        setViewingDoc(null); // Clear previous
        try {
            const res = await fetch(`/api/documents/${docId}`);
            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.error || 'Failed to fetch document');
            }
            const data = await res.json();
            setViewingDoc(data);
        } catch (e: any) {
            console.error('Error fetching doc:', e);
            setStatus(`Error viewing document: ${e.message}`);
            setSelectedDocId(null); // Close modal on error
        } finally {
            setIsFetchingDoc(false);
        }
    };

    const getInitials = (name: string) => {
        if (!name) return '??';
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const toggleFolder = (folderId: string) => {
        setExpandedFolders(prev => ({ ...prev, [folderId]: !prev[folderId] }));
    };

    const groupedDocs = {
        api: documents.filter(d => d.title.startsWith('API Doc:')),
        youtube: documents.filter(d => d.content_type === 'youtube'),
        support: documents.filter(d => !d.title.startsWith('API Doc:') && d.content_type !== 'youtube')
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
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center bg-gradient-to-br from-[#139187]/20 to-black/40">
                        {advisor?.avatar_url ? (
                            <img src={advisor.avatar_url} alt="" className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-sm font-bold text-[#139187] font-mono">
                                {getInitials(advisor?.name || '')}
                            </span>
                        )}
                    </div>
                    <h1 className="font-serif text-3xl font-bold text-white">
                        {advisor?.name}<span className="text-[#139187]/60">.brain</span>
                    </h1>
                </div>
                <p className="text-sm text-gray-400">Expand the information this advisor can draw from.</p>
            </div>

            <div className="flex flex-col gap-8">
                {/* Top Section: Input */}
                <div className="space-y-6">
                    <div className="glass rounded-2xl p-6">
                        <div className="flex gap-4 p-1 bg-black/20 rounded-xl mb-6 overflow-x-auto print:hidden">
                            <button
                                onClick={() => setActiveTab('upload')}
                                className={`flex-1 py-1 px-4 md:py-2.5 rounded-lg text-[10px] md:text-xs font-bold transition-all whitespace-nowrap ${activeTab === 'upload' ? 'bg-[#139187] text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                PDF UPLOAD
                            </button>
                            <button
                                onClick={() => setActiveTab('transcript')}
                                className={`flex-1 py-1 px-4 md:py-2.5 rounded-lg text-[10px] md:text-xs font-bold transition-all whitespace-nowrap ${activeTab === 'transcript' ? 'bg-[#139187] text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                TRANSCRIPT
                            </button>
                            <button
                                onClick={() => setActiveTab('youtube')}
                                className={`flex-1 py-1 px-4 md:py-2.5 rounded-lg text-[10px] md:text-xs font-bold transition-all whitespace-nowrap ${activeTab === 'youtube' ? 'bg-[#139187] text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                YOUTUBE
                            </button>
                            <button
                                onClick={() => setActiveTab('web')}
                                className={`flex-1 py-1 px-4 md:py-2.5 rounded-lg text-[10px] md:text-xs font-bold transition-all whitespace-nowrap ${activeTab === 'web' ? 'bg-[#139187] text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                WEB URL
                            </button>
                            <button
                                onClick={() => setActiveTab('research')}
                                className={`flex-1 py-1 px-4 md:py-2.5 rounded-lg text-[10px] md:text-xs font-bold transition-all whitespace-nowrap ${activeTab === 'research' ? 'bg-[#139187] text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                AUTO-RESEARCH
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

                        {activeTab === 'youtube' && (
                            <div className="space-y-4">
                                <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20 flex items-center gap-3">
                                    <Youtube className="text-red-500" size={16} />
                                    <p className="text-xs text-red-500/80">The system will automatically extract and learn from the video's transcript.</p>
                                </div>
                                <input
                                    value={youtubeUrl}
                                    onChange={e => setYoutubeUrl(e.target.value)}
                                    placeholder="https://www.youtube.com/watch?v=..."
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#139187] transition-all"
                                />
                                <button
                                    onClick={handleYoutubeSubmit}
                                    disabled={isIngesting || !youtubeUrl}
                                    className="w-full py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold rounded-xl shadow-lg disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                                >
                                    {isIngesting ? <Loader2 className="animate-spin" size={20} /> : <Search size={20} />}
                                    Process Video
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

                        {activeTab === 'research' && (
                            <div className="space-y-4">
                                <div className="p-4 bg-[#139187]/10 rounded-xl border border-[#139187]/20 flex items-center gap-3">
                                    <Sparkles className="text-[#139187]" size={16} />
                                    <p className="text-xs text-[#139187]/80 italic">The AI will search the web for the best interviews, articles, and data on this topic.</p>
                                </div>
                                <input
                                    value={researchQuery}
                                    onChange={e => setResearchQuery(e.target.value)}
                                    placeholder="e.g. Elon Musk business advice or Alex Hormozi gym scaling"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#139187] transition-all"
                                />
                                <button
                                    onClick={handleResearch}
                                    disabled={isIngesting || !researchQuery}
                                    className="w-full py-4 bg-gradient-to-r from-[#139187] to-indigo-600 text-white font-bold rounded-xl shadow-lg disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                                >
                                    {isIngesting ? <Loader2 className="animate-spin" size={20} /> : <Search size={20} />}
                                    Run Auto-Research
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

                {/* Bottom Section: List with Folders */}
                <div className="space-y-6">
                    <div className="glass rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-white font-bold flex items-center gap-2 text-xl">
                                <FileText size={22} className="text-[#139187]" />
                                Current Knowledge
                            </h3>
                            <span className="text-xs font-bold text-[#139187] bg-[#139187]/10 px-3 py-1.5 rounded-xl border border-[#139187]/20 uppercase tracking-wider">
                                {documents.length} ITEMS TOTAL
                            </span>
                        </div>

                        <div className="space-y-4">
                            {/* API DOCUMENTATION FOLDER */}
                            <div className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => toggleFolder('api')}
                                    className="w-full flex items-center justify-between p-4 hover:bg-white/[0.05] transition-all"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                            <FileText size={20} />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-white font-bold">API Documentation</h4>
                                            <p className="text-[10px] text-gray-500 uppercase tracking-widest">{groupedDocs.api.length} Documents</p>
                                        </div>
                                    </div>
                                    <div className={`text-gray-500 transition-transform duration-300 ${expandedFolders.api ? 'rotate-180' : ''}`}>
                                        <ArrowLeft size={16} className="-rotate-90" />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {expandedFolders.api && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: 'auto' }}
                                            exit={{ height: 0 }}
                                            className="overflow-hidden bg-black/20"
                                        >
                                            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-white/5">
                                                {groupedDocs.api.map((doc) => (
                                                    <DocCard key={doc.id} doc={doc} onDelete={handleDeleteDocument} onView={handleViewDocument} />
                                                ))}
                                                {groupedDocs.api.length === 0 && <EmptyFolder />}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* SUPPORT DOCUMENTATION FOLDER (Default Open) */}
                            <div className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => toggleFolder('support')}
                                    className="w-full flex items-center justify-between p-4 hover:bg-white/[0.05] transition-all"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#139187]/10 flex items-center justify-center text-[#139187]">
                                            <FileText size={20} />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-white font-bold">Support Documentation</h4>
                                            <p className="text-[10px] text-gray-500 uppercase tracking-widest">{groupedDocs.support.length} Items</p>
                                        </div>
                                    </div>
                                    <div className={`text-gray-500 transition-transform duration-300 ${expandedFolders.support ? 'rotate-180' : ''}`}>
                                        <ArrowLeft size={16} className="-rotate-90" />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {expandedFolders.support && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: 'auto' }}
                                            exit={{ height: 0 }}
                                            className="overflow-hidden bg-black/20"
                                        >
                                            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-white/5">
                                                {groupedDocs.support.map((doc) => (
                                                    <DocCard key={doc.id} doc={doc} onDelete={handleDeleteDocument} onView={handleViewDocument} />
                                                ))}
                                                {groupedDocs.support.length === 0 && <EmptyFolder />}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* YOUTUBE TRANSCRIPTS FOLDER */}
                            <div className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => toggleFolder('youtube')}
                                    className="w-full flex items-center justify-between p-4 hover:bg-white/[0.05] transition-all"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                                            <Youtube size={20} />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-white font-bold">YouTube Transcripts</h4>
                                            <p className="text-[10px] text-gray-500 uppercase tracking-widest">{groupedDocs.youtube.length} Videos</p>
                                        </div>
                                    </div>
                                    <div className={`text-gray-500 transition-transform duration-300 ${expandedFolders.youtube ? 'rotate-180' : ''}`}>
                                        <ArrowLeft size={16} className="-rotate-90" />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {expandedFolders.youtube && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: 'auto' }}
                                            exit={{ height: 0 }}
                                            className="overflow-hidden bg-black/20"
                                        >
                                            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-white/5">
                                                {groupedDocs.youtube.map((doc) => (
                                                    <DocCard key={doc.id} doc={doc} onDelete={handleDeleteDocument} onView={handleViewDocument} />
                                                ))}
                                                {groupedDocs.youtube.length === 0 && <EmptyFolder />}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* View Document Modal */}
            <AnimatePresence>
                {selectedDocId && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
                        onClick={() => {
                            setSelectedDocId(null);
                            setViewingDoc(null);
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="bg-[#0a0a0a] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6 border-bottom border-white/10 flex items-center justify-between bg-white/[0.02]">
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-xl ${viewingDoc?.type === 'youtube' ? 'bg-red-500/20 text-red-500' : 'bg-[#139187]/20 text-[#139187]'}`}>
                                        {viewingDoc?.type === 'youtube' ? <Youtube size={20} /> : <FileText size={20} />}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold leading-tight">{viewingDoc?.title || 'Loading...'}</h3>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                                            {viewingDoc?.type} {viewingDoc?.created_at && `• Added ${new Date(viewingDoc.created_at).toLocaleDateString()}`}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        setSelectedDocId(null);
                                        setViewingDoc(null);
                                    }}
                                    className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-all"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-8 font-sans leading-relaxed text-gray-300">
                                {isFetchingDoc ? (
                                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                                        <Loader2 className="animate-spin text-[#139187]" size={40} />
                                        <p className="text-sm text-gray-400 animate-pulse">Retrieving full content from vector brain...</p>
                                    </div>
                                ) : viewingDoc ? (
                                    <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-white prose-strong:text-[#139187] prose-li:text-gray-300">
                                        <div className="text-sm md:text-base selection:bg-[#139187]/30">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {viewingDoc.content}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-center text-red-400">Error loading document.</p>
                                )}
                            </div>

                            <div className="p-4 border-t border-white/5 bg-black/40 flex justify-between items-center">
                                <p className="text-[10px] text-gray-600 italic">This content is indexed and being used to train your advisor.</p>
                                <button
                                    onClick={() => {
                                        setSelectedDocId(null);
                                        setViewingDoc(null);
                                    }}
                                    className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-xl transition-all"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// Helper Components
function DocCard({ doc, onDelete, onView }: { doc: any, onDelete: (id: string) => void, onView: (id: string) => void }) {
    return (
        <div
            onClick={() => onView(doc.id)}
            className="p-4 bg-black/40 rounded-xl border border-white/5 group hover:border-[#139187]/40 hover:bg-[#139187]/5 transition-all cursor-pointer relative overflow-hidden"
        >
            <div className="flex items-center justify-between mb-3">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${doc.content_type === 'pdf' ? 'bg-amber-500/20 text-amber-500' : doc.content_type === 'youtube' ? 'bg-red-500/20 text-red-500' : 'bg-indigo-500/20 text-indigo-400'}`}>
                    {doc.content_type}
                </span>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(doc.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 p-1.5 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-all"
                >
                    <Trash2 size={14} />
                </button>
            </div>
            <p className="text-sm font-bold text-white mb-1 line-clamp-1">{doc.title}</p>
            <div className="flex items-center justify-between mt-2">
                <p className="text-[10px] text-gray-500">{new Date(doc.created_at).toLocaleDateString()}</p>
                <div className="text-[10px] text-[#139187] font-bold group-hover:translate-x-1 transition-transform">VIEW →</div>
            </div>
        </div>
    );
}

function EmptyFolder() {
    return (
        <div className="col-span-full py-12 text-center opacity-50">
            <AlertCircle className="mx-auto text-gray-600 mb-2" size={32} />
            <p className="text-sm text-gray-500">No documents in this category.</p>
        </div>
    );
}
