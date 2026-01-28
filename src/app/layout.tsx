import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "AI Advisor Platform | Elvison",
  description: "Next-gen business advice from digital duplicates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex min-h-screen">
        {/* Background Layer */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="bg-video"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />

        {/* Navigation */}
        <Sidebar />

        {/* Content */}
        <main className="flex-1 relative z-10 flex flex-col p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-[1400px] mx-auto w-full h-full flex flex-col">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
