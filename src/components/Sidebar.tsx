'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Users,
    MessageSquare,
    Settings,
    ChevronLeft,
    ChevronRight,
    Zap,
    LayoutDashboard
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const pathname = usePathname();

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
                            <div className="w-10 h-10 bg-black rounded-xl border border-white/10 flex items-center justify-center shadow-luxury">
                                <Zap className="text-[#139187]" size={20} />
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
            <nav className="flex-1 px-4 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
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

                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute left-0 w-1 h-6 bg-[#139187] rounded-r-full"
                                />
                            )}
                        </Link>
                    );
                })}
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
