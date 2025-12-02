"use client";

import Link from "next/link";
import { Home, AlertCircle } from "lucide-react";
import AnimatedBackground from "../components/animate-ui/Animate-Background";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#0b1120] text-center px-6">
      
      <AnimatedBackground />

      <div className="relative z-10 flex flex-col items-center max-w-lg animate-in fade-in zoom-in-95 duration-700">
        <div className="relative mb-8 group">
           <div className="absolute inset-0 bg-red-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
           <div className="relative w-32 h-32 rounded-[2.5rem] bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl shadow-red-500/20 group-hover:scale-105 transition-transform duration-500">
             <AlertCircle className="w-16 h-16 text-red-500 dark:text-red-400" strokeWidth={1.5} />
           </div>
        </div>

        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-white/50 mb-2 tracking-tighter drop-shadow-sm">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-main)] mb-4">
          Page Not Found
        </h2>
        
        <p className="text-[var(--text-muted)] text-lg mb-10 max-w-md leading-relaxed">
          Oops! The page you are looking for seems to have vanished into the digital void.
        </p>

        <Link href="/">
          <button className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-xl shadow-blue-500/30 active:scale-95 transition-all">
            <Home className="w-5 h-5" />
            <span>Return Home</span>
          </button>
        </Link>

      </div>
    </div>
  );
}