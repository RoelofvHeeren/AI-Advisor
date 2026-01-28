'use client';

import { Settings as SettingsIcon, Shield, Sliders, Bell } from 'lucide-react';

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-luxury flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="font-serif text-4xl font-bold text-white flex items-center gap-4">
                        <SettingsIcon className="w-10 h-10 text-[#139187]" />
                        Settings
                    </h1>
                    <p className="text-sm text-gray-400 mt-2">
                        Configure your AI Advisor Platform preferences.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass rounded-2xl p-6 space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <Sliders className="text-[#139187]" size={20} />
                        <h3 className="text-lg font-bold text-white">Global Preferences</h3>
                    </div>
                    <p className="text-sm text-gray-500">Tune the default behavior of all advisors.</p>
                    <div className="pt-4 space-y-4">
                        <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl border border-white/5">
                            <span className="text-sm text-gray-300">Default Response Length</span>
                            <span className="text-xs font-mono text-[#139187]">CONCISE</span>
                        </div>
                    </div>
                </div>

                <div className="glass rounded-2xl p-6 space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <Shield className="text-[#139187]" size={20} />
                        <h3 className="text-lg font-bold text-white">API Configuration</h3>
                    </div>
                    <p className="text-sm text-gray-500">Manage your Gemini and Supabase keys.</p>
                    <div className="pt-4">
                        <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                            <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">Status</p>
                            <p className="text-xs text-white">Gemini 1.5 Specialization Active</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
