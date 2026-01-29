'use client';

import { useState, useEffect } from 'react';
// Version: 1.1.0 - Added Masterminds and History sections
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
    Users,
    MessageSquare,
    Settings,
    ChevronLeft,
    ChevronRight,
    Zap,
    LayoutDashboard,
    Plus,
    Flame,
    History
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { supabaseClient as supabase } from '@/lib/supabase-client';

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentSessionId = searchParams.get('sessionId');

    const [recentChats, setRecentChats] = useState<any[]>([]);
    const [masterminds, setMasterminds] = useState<any[]>([]);

    const fetchSessions = async () => {
        const { data: singles } = await supabase
            .from('chat_sessions')
            .select(`
                *,
                chat_session_advisors (
                    advisors (name)
                )
            `)
            .eq('is_mastermind', false)
            .order('last_message_at', { ascending: false })
            .limit(5);

        const { data: groups } = await supabase
            .from('chat_sessions')
            .select(`
                *,
                chat_session_advisors (
                    advisors (name)
                )
            `)
            .eq('is_mastermind', true)
            .order('last_message_at', { ascending: false })
            .limit(5);

        setRecentChats(singles || []);
        setMasterminds(groups || []);
    };

    useEffect(() => {
        fetchSessions();
    }, [pathname, currentSessionId]);

    const handleNewMastermind = async () => {
        const res = await fetch('/api/chat/sessions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                isMastermind: true,
                title: 'New Mastermind'
            })
        });
        const session = await res.json();
        if (session.id) {
            router.push(`/?sessionId=${session.id}`);
            fetchSessions();
        }
    };

    const navItems = [
        { label: 'Chat', icon: MessageSquare, href: '/' },
        { label: 'Advisors', icon: Users, href: '/advisors' },
        { label: 'Settings', icon: Settings, href: '/settings' },
    ];

    return (
        <motion.aside
            initial={false}
            animate={{ width: isCollapsed ? 80 : 280 }}
            className="sticky top-0 h-screen shrink-0 flex flex-col glass border-r border-white/10 z-50 transition-all duration-500 overflow-hidden"
        >
            {/* Logo Section */}
            <div className="p-6 mb-4 flex items-center justify-between">
                <AnimatePresence mode="wait">
                    {!isCollapsed && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-10 h-10 relative">
                                <img
                                    src="/Transparent%20Logo%20Elvison.png"
                                    alt="Elvison Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="font-serif text-2xl font-bold tracking-tight text-white italic">Elvison</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-2 hover:bg-white/5 rounded-lg text-gray-400 transition-colors"
                >
                    {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
            </div>

            {/* Nav Items */}
            <nav className="flex-1 px-4 space-y-8 overflow-y-auto custom-scrollbar">
                <div className="space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href && !currentSessionId;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "group relative flex items-center gap-3 rounded-xl py-3 px-4 text-sm font-medium transition-all duration-300",
                                    isActive
                                        ? "bg-[#139187]/20 text-[#139187] border border-[#139187]/30 shadow-3d"
                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                <item.icon className={cn(
                                    "h-5 w-5 shrink-0 transition-transform",
                                    isActive ? "text-[#139187]" : "text-gray-400 group-hover:scale-110"
                                )} />

                                {!isCollapsed && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="whitespace-nowrap"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Masterminds Section */}
                {!isCollapsed && (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between px-4">
                            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                <Flame size={12} className="text-[#139187]" />
                                Masterminds
                            </h3>
                            <button
                                onClick={handleNewMastermind}
                                className="p-1 hover:bg-[#139187]/20 text-[#139187] rounded-md transition-all"
                            >
                                <Plus size={14} />
                            </button>
                        </div>
                        <div className="space-y-1">
                            {masterminds.map((session) => (
                                <Link
                                    key={session.id}
                                    href={`/?sessionId=${session.id}`}
                                    className={cn(
                                        "block px-4 py-2 text-xs rounded-lg transition-all truncate",
                                        currentSessionId === session.id
                                            ? "bg-[#139187]/10 text-[#139187] border border-[#139187]/20"
                                            : "text-gray-400 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {session.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Recent History */}
                {!isCollapsed && (
                    <div className="space-y-4">
                        <div className="px-4">
                            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                <History size={12} className="text-indigo-400" />
                                Recent Chats
                            </h3>
                        </div>
                        <div className="space-y-1">
                            {recentChats.map((session) => (
                                <Link
                                    key={session.id}
                                    href={`/?sessionId=${session.id}`}
                                    className={cn(
                                        "block px-4 py-2 text-xs rounded-lg transition-all truncate",
                                        currentSessionId === session.id
                                            ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                                            : "text-gray-500 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {session.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Footer Info */}
            <div className="p-6 mt-auto">
                <div className={cn(
                    "flex items-center gap-3 p-3 rounded-2xl glass-dark border-white/5",
                    isCollapsed ? "justify-center" : ""
                )}>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#139187] to-indigo-500 shrink-0" />
                    {!isCollapsed && (
                        <div className="overflow-hidden">
                            <p className="text-xs font-bold text-white truncate">User Account</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest">Admin</p>
                        </div>
                    )}
                </div>
            </div>
        </motion.aside>
    );
}
