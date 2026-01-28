'use client';

import { useState, useEffect } from 'react';
import { Plus, Users, Search, MoreVertical, Trash2, Edit3, BookOpen } from 'lucide-react';
import { supabaseClient as supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function AdvisorsPage() {
    const [advisors, setAdvisors] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Form state
    const [newName, setNewName] = useState('');
    const [newDesc, setNewDesc] = useState('');
    const [newPrompt, setNewPrompt] = useState('');

    const fetchAdvisors = async () => {
        setIsLoading(true);
        const { data } = await supabase.from('advisors').select('*').order('created_at', { ascending: false });
        setAdvisors(data || []);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchAdvisors();
    }, []);

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newName) return;

        const { error } = await supabase.from('advisors').insert({
            name: newName,
            description: newDesc,
            system_prompt: newPrompt,
            avatar_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${newName}`
        });

        if (!error) {
            setIsModalOpen(false);
            setNewName('');
            setNewDesc('');
            setNewPrompt('');
            fetchAdvisors();
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-luxury flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="font-serif text-4xl font-bold text-white flex items-center gap-4">
                        <Users className="w-10 h-10 text-[#139187]" />
                        Advisors
                    </h1>
                    <p className="text-sm text-gray-400 mt-2">
                        Manage your digital advisor team and their knowledge bases.
                    </p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-3 bg-gradient-to-r from-[#139187] to-[#0d6b63] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 w-fit"
                >
                    <Plus size={20} />
                    Add New Advisor
                </button>
            </div>

            {/* Grid */}
            {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="h-64 rounded-2xl glass animate-pulse" />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {advisors.map((advisor) => (
                        <motion.div
                            layout
                            key={advisor.id}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 shadow-luxury"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 ring-2 ring-[#139187]/20">
                                    <img
                                        src={advisor.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${advisor.name}`}
                                        alt={advisor.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 transition-colors">
                                        <MoreVertical size={16} />
                                    </button>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{advisor.name}</h3>
                            <p className="text-sm text-gray-400 line-clamp-2 mb-6 h-10">
                                {advisor.description || "No description provided."}
                            </p>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="px-3 py-1.5 bg-black/30 rounded-lg border border-white/5 flex items-center gap-2">
                                    <BookOpen size={14} className="text-[#139187]" />
                                    <span className="text-[10px] font-mono text-gray-300 uppercase tracking-wider">Indexed Knowledge</span>
                                </div>
                            </div>

                            <div className="flex gap-3 pt-4 border-t border-white/5">
                                <Link
                                    href={`/advisors/${advisor.id}/knowledge`}
                                    className="flex-1 py-2.5 bg-[#139187]/10 hover:bg-[#139187]/20 text-[#139187] rounded-xl transition-all border border-[#139187]/20 text-center text-xs font-bold"
                                >
                                    Manage Knowledge
                                </Link>
                                <Link
                                    href={`/?id=${advisor.id}`}
                                    className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all border border-white/10 text-center text-xs font-bold"
                                >
                                    Chat Now
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* New Advisor Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-[100]">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 max-w-xl w-full shadow-2xl overflow-hidden relative"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#139187] to-indigo-500" />

                            <h2 className="text-2xl font-bold text-white mb-2 font-serif">Create Digital Advisor</h2>
                            <p className="text-sm text-gray-500 mb-8">Define the persona and behavior of your AI duplicate.</p>

                            <form onSubmit={handleCreate} className="space-y-6">
                                <div>
                                    <label className="text-xs text-gray-400 uppercase tracking-widest block mb-2 font-mono">Advisor Name</label>
                                    <input
                                        required
                                        value={newName}
                                        onChange={e => setNewName(e.target.value)}
                                        placeholder="e.g. Alex Hormozi"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#139187] focus:ring-1 focus:ring-[#139187]/20 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs text-gray-400 uppercase tracking-widest block mb-2 font-mono">Short Description</label>
                                    <input
                                        value={newDesc}
                                        onChange={e => setNewDesc(e.target.value)}
                                        placeholder="What do they specialize in?"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#139187] focus:ring-1 focus:ring-[#139187]/20 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs text-gray-400 uppercase tracking-widest block mb-2 font-mono">System Prompt (The Rules)</label>
                                    <textarea
                                        rows={4}
                                        value={newPrompt}
                                        onChange={e => setNewPrompt(e.target.value)}
                                        placeholder="You are [Name]. Your tone is... You value..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#139187] focus:ring-1 focus:ring-[#139187]/20 transition-all resize-none"
                                    />
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all border border-white/10 font-bold"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 py-3 bg-gradient-to-r from-[#139187] to-[#0d6b63] text-white rounded-xl transition-all font-bold shadow-lg shadow-[#139187]/20"
                                    >
                                        Create Advisor
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
