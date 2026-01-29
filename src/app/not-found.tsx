'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
            <div className="w-24 h-24 rounded-3xl glass flex items-center justify-center text-[#139187] mb-4 text-4xl font-bold">
                404
            </div>
            <h1 className="text-4xl font-serif font-bold text-white italic">Page Not Found</h1>
            <p className="max-w-md text-gray-500 text-sm leading-relaxed">
                The advisor you're looking for might be in a deep meditation. Let's head back to the main discussion.
            </p>
            <Link
                href="/"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#139187] to-[#0d6b63] text-white font-bold hover:shadow-[0_0_20px_rgba(19,145,135,0.4)] transition-all"
            >
                Return Home
            </Link>
        </div>
    );
}
