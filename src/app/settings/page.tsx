'use client';

import { useState, useEffect } from 'react';
import { Settings as SettingsIcon, Shield, Sliders, Key, Copy, Trash2, Plus, Chrome } from 'lucide-react';
import { supabaseClient as supabase } from '@/lib/supabase-client';

export default function SettingsPage() {
    const [apiKeys, setApiKeys] = useState<any[]>([]);
    const [newKeyName, setNewKeyName] = useState('');
    const [generatedKey, setGeneratedKey] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchApiKeys();
    }, []);

    async function fetchApiKeys() {
        const { data } = await supabase
            .from('api_keys')
            .select('*')
            .order('created_at', { ascending: false });

        if (data) setApiKeys(data);
    }

    async function generateApiKey() {
        if (!newKeyName.trim()) {
            alert('Please enter a name for the API key');
            return;
        }

        setLoading(true);

        try {
            // Get current user or sign in anonymously
            let { data: { user } } = await supabase.auth.getUser();

            if (!user) {
                // Try to restore session first
                const { data: { session } } = await supabase.auth.getSession();
                if (session?.user) {
                    user = session.user;
                } else {
                    // Auto-sign in anonymously since this is a personal app
                    const { data: anonData, error: anonError } = await supabase.auth.signInAnonymously();
                    if (anonError) {
                        console.error('Anonymous auth failed:', anonError);
                        alert('Could not authenticate. Please check console for details.');
                        setLoading(false);
                        return;
                    }
                    user = anonData.user;
                }
            }

            if (!user) {
                alert('Authentication failed: No user found.');
                setLoading(false);
                return;
            }

            // Generate a secure random key
            const key = 'aiadv_' + Array.from(crypto.getRandomValues(new Uint8Array(32)))
                .map(b => b.toString(16).padStart(2, '0'))
                .join('');

            const { error } = await supabase
                .from('api_keys')
                .insert({
                    user_id: user.id,
                    key,
                    name: newKeyName,
                    is_active: true
                });

            if (!error) {
                setGeneratedKey(key);
                setNewKeyName('');
                fetchApiKeys();
            } else {
                console.error('API key generation error:', error);
                alert('Failed to generate API key: ' + error.message);
            }
        } catch (err: any) {
            console.error('Unexpected error:', err);
            alert('Failed to generate API key: ' + err.message);
        }

        setLoading(false);
    }

    async function deleteApiKey(id: string) {
        if (!confirm('Are you sure you want to delete this API key? This action cannot be undone.')) {
            return;
        }

        const { error } = await supabase
            .from('api_keys')
            .delete()
            .eq('id', id);

        if (!error) {
            fetchApiKeys();
        }
    }

    function copyToClipboard(text: string) {
        navigator.clipboard.writeText(text);
        alert('Copied to clipboard!');
    }

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

            {/* Chrome Extension Section */}
            <div className="glass rounded-2xl p-6 space-y-6">
                <div className="flex items-center gap-3 mb-2">
                    <Chrome className="text-[#139187]" size={24} />
                    <h3 className="text-xl font-bold text-white">Chrome Extension</h3>
                </div>
                <p className="text-sm text-gray-400">
                    Quickly save YouTube videos, web pages, and PDFs to your advisors with our Chrome extension.
                </p>

                {/* Extension Download */}
                <div className="p-4 bg-[#139187]/10 border border-[#139187]/20 rounded-xl">
                    <h4 className="text-sm font-bold text-[#139187] mb-2">📦 Installation</h4>
                    <ol className="text-xs text-gray-300 space-y-1 mb-3">
                        <li>1. Download the extension folder from <code className="bg-black/30 px-1 rounded">chrome-extension/</code></li>
                        <li>2. Open Chrome and go to <code className="bg-black/30 px-1 rounded">chrome://extensions/</code></li>
                        <li>3. Enable "Developer mode" (top-right toggle)</li>
                        <li>4. Click "Load unpacked" and select the extension folder</li>
                    </ol>
                    <a
                        href="/chrome-extension"
                        className="inline-block px-4 py-2 bg-[#139187] text-white rounded-lg text-xs font-bold hover:bg-[#0d6b63] transition-colors"
                    >
                        View Extension Files
                    </a>
                </div>

                {/* API Key Generation */}
                <div>
                    <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                        <Key size={16} className="text-[#139187]" />
                        Extension API Keys
                    </h4>

                    {/* Generated Key Display */}
                    {generatedKey && (
                        <div className="mb-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                            <p className="text-xs text-green-400 font-bold mb-2">✓ API Key Generated!</p>
                            <p className="text-xs text-gray-400 mb-2">Copy this key now - you won't be able to see it again:</p>
                            <div className="flex items-center gap-2">
                                <code className="flex-1 bg-black/30 px-3 py-2 rounded text-xs text-white font-mono overflow-x-auto">
                                    {generatedKey}
                                </code>
                                <button
                                    onClick={() => copyToClipboard(generatedKey)}
                                    className="p-2 bg-[#139187] text-white rounded hover:bg-[#0d6b63] transition-colors"
                                >
                                    <Copy size={16} />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Create New Key */}
                    <div className="flex gap-2 mb-4">
                        <input
                            type="text"
                            placeholder="Key name (e.g., 'My Chrome Extension')"
                            value={newKeyName}
                            onChange={(e) => setNewKeyName(e.target.value)}
                            className="flex-1 px-4 py-2 bg-black/20 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#139187]"
                        />
                        <button
                            onClick={generateApiKey}
                            disabled={loading || !newKeyName.trim()}
                            className="px-4 py-2 bg-[#139187] text-white rounded-lg text-sm font-bold hover:bg-[#0d6b63] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            <Plus size={16} />
                            Generate
                        </button>
                    </div>

                    {/* Existing Keys */}
                    <div className="space-y-2">
                        {apiKeys.length === 0 ? (
                            <p className="text-xs text-gray-500 text-center py-4">No API keys yet. Generate one to use the Chrome extension.</p>
                        ) : (
                            apiKeys.map((key) => (
                                <div key={key.id} className="flex items-center justify-between p-3 bg-black/20 border border-white/10 rounded-lg">
                                    <div className="flex-1">
                                        <p className="text-sm text-white font-medium">{key.name}</p>
                                        <p className="text-xs text-gray-500">
                                            Created {new Date(key.created_at).toLocaleDateString()}
                                            {key.last_used_at && ` • Last used ${new Date(key.last_used_at).toLocaleDateString()}`}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`text-xs px-2 py-1 rounded ${key.is_active ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>
                                            {key.is_active ? 'Active' : 'Inactive'}
                                        </span>
                                        <button
                                            onClick={() => deleteApiKey(key.id)}
                                            className="p-2 text-red-400 hover:bg-red-500/10 rounded transition-colors"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
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
