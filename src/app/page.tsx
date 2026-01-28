'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Send,
  Bot,
  User,
  Zap,
  Plus,
  Check,
  Users,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { supabaseClient as supabase } from '@/lib/supabase-client';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [allAdvisors, setAllAdvisors] = useState<any[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchAdvisors = async () => {
      const { data } = await supabase.from('advisors').select('*');
      if (data) {
        setAllAdvisors(data);
        // Default select the first one (e.g. Alex)
        if (data.length > 0) setSelectedIds([data[0].id]);
      }
    };
    fetchAdvisors();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleAdvisor = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || selectedIds.length === 0) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          advisorIds: selectedIds
        }),
      });

      const data = await res.json();
      if (data.text) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.text }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: "Error: " + (data.error || "Unknown issue") }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Network error. Is the server running?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full gap-6">
      {/* Top Banner / Advisor Selector */}
      <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-luxury">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-xl border border-white/10 flex items-center justify-center text-[#139187] shadow-luxury">
              <Users size={24} />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-white italic">Active Discussion</h2>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">
                {selectedIds.length} ADVISORS SELECTED
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {allAdvisors.map(adv => {
              const isSelected = selectedIds.includes(adv.id);
              return (
                <button
                  key={adv.id}
                  onClick={() => toggleAdvisor(adv.id)}
                  className={cn(
                    "flex items-center gap-2 pl-2 pr-4 py-2 rounded-xl border transition-all duration-300",
                    isSelected
                      ? "bg-[#139187]/20 border-[#139187]/40 text-white"
                      : "bg-white/5 border-white/10 text-gray-400 opacity-60 hover:opacity-100"
                  )}
                >
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10">
                    <img src={adv.avatar_url} alt="" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs font-bold">{adv.name}</span>
                  {isSelected && <Check size={12} className="text-[#139187]" />}
                </button>
              );
            })}
            <Link
              href="/advisors"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <Plus size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-8 pr-2 custom-scrollbar min-h-[400px]">
        <AnimatePresence>
          {messages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center h-full text-center space-y-4"
            >
              <div className="w-20 h-20 rounded-3xl glass flex items-center justify-center text-[#139187] mb-4">
                <Sparkles size={40} />
              </div>
              <h1 className="text-4xl font-serif font-bold text-white italic">How can we advise you?</h1>
              <p className="max-w-md text-gray-500 text-sm leading-relaxed mb-8">
                Select your advisors above and start a discussion. Our AI will draw directly from their unique knowledge bases.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
                <button onClick={() => setInput("What's the first step to scaling a service business?")} className="glass p-4 rounded-2xl text-left hover:bg-white/10 transition-all border-white/5">
                  <p className="text-xs font-bold text-[#139187] mb-1 font-mono uppercase">Growth</p>
                  <p className="text-sm text-gray-300 font-medium">Scaling focus...</p>
                </button>
                <button onClick={() => setInput("How do I structure an offer that works every time?")} className="glass p-4 rounded-2xl text-left hover:bg-white/10 transition-all border-white/5">
                  <p className="text-xs font-bold text-amber-500 mb-1 font-mono uppercase">Sales</p>
                  <p className="text-sm text-gray-300 font-medium">Grand Slam offers...</p>
                </button>
              </div>
            </motion.div>
          )}

          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={cn(
                "flex",
                m.role === 'user' ? "justify-end" : "justify-start"
              )}
            >
              <div className={cn(
                "flex gap-4 max-w-[85%]",
                m.role === 'user' ? "flex-row-reverse" : ""
              )}>
                <div className={cn(
                  "shrink-0 w-10 h-10 rounded-xl flex items-center justify-center glass",
                  m.role === 'user' ? "border-[#139187]/20" : "border-white/10"
                )}>
                  {m.role === 'user' ? <User size={20} className="text-[#139187]" /> : <Zap size={20} className="text-[#139187]" />}
                </div>
                <div className={cn(
                  "p-5 rounded-3xl leading-relaxed whitespace-pre-wrap text-sm",
                  m.role === 'user'
                    ? "bg-[#139187]/10 border border-[#139187]/20 text-white"
                    : "glass border-white/5 text-gray-200"
                )}>
                  {m.content}
                </div>
              </div>
            </motion.div>
          ))}

          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                  <LoaderIcon className="animate-spin text-[#139187]" />
                </div>
                <div className="p-5 rounded-3xl glass border-white/5 text-gray-500 italic text-sm">
                  Consulting your advisors...
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="relative pt-4">
        <form onSubmit={handleSubmit} className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#139187] to-indigo-600 rounded-3xl blur opacity-20 group-focus-within:opacity-40 transition duration-500"></div>
          <div className="relative flex items-center glass rounded-3xl px-6 py-5 border-white/10 ring-1 ring-white/5 shadow-2xl">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={selectedIds.length > 0 ? "Ask your discussion panel..." : "Select advisors to start..."}
              disabled={selectedIds.length === 0}
              className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 text-base"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim() || selectedIds.length === 0}
              className="ml-4 p-4 rounded-2xl bg-gradient-to-r from-[#139187] to-[#0d6b63] text-white hover:shadow-[0_0_20px_rgba(19,145,135,0.4)] disabled:opacity-50 transition-all"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function LoaderIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20" height="20"
      viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
