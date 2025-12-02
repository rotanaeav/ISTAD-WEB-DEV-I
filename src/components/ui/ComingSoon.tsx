"use client";

import Link from "next/link";
import { ArrowLeft, Construction, Timer, Rocket } from "lucide-react";

interface ComingSoonProps {
  title?: React.ReactNode;
  description?: string;
  backLink?: string;
}

export default function ComingSoon({ 
   title = "Coming Soon", 
  description = "We are working hard to bring this feature to life. Stay tuned!",
  backLink = "/"
}: ComingSoonProps) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 md:p-12 ">
    
      <div className="relative mb-8 group">
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse-slow group-hover:bg-purple-500/30 transition-colors duration-500"></div>
        <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
          <Rocket className="w-12 h-12 text-blue-600 dark:text-blue-400 animate-bounce-slow" />
        </div>

        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-purple-500/20 backdrop-blur-md border border-white/10 flex items-center justify-center animate-float-delayed">
           <Timer className="w-4 h-4 text-purple-500" />
        </div>
        <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-emerald-500/20 backdrop-blur-md border border-white/10 flex items-center justify-center animate-float">
           <Construction className="w-4 h-4 text-emerald-500" />
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-main)] tracking-tight mb-4">
        {title}
      </h1>
      
      <p className="text-lg text-[var(--text-muted)] max-w-md mx-auto mb-8 leading-relaxed">
        {description}
      </p>

      <Link href={backLink}>
        <button className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/50 dark:bg-white/5 border border-white/60 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 transition-all shadow-sm backdrop-blur-sm">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-semibold text-[var(--text-main)]">Go Back</span>
        </button>
      </Link>

    </div>
  );
}