"use client"; 

import Link from "next/link";
import { Check, Github, Facebook, Send } from "lucide-react";
import PoweredBy from "./PoweredBy";
import Logo from "../Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-auto">
      <div className="w-full bg-white/40 dark:bg-[#0f172a]/40 backdrop-blur-xl border-t border-white/40 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/*1*/}
            <div className="space-y-4">
              <Logo />
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                The global standard product authentication. Trust what you buy.
              </p>
            </div>
            {/*2*/}
            <div>
              <h4 className="font-bold text-[var(--text-main)] mb-4">Platform</h4>
              <ul className="space-y-3 text-md text-[var(--text-muted)]">
                <li>
                  <Link href="/" className="hover:text-blue-500 transition-colors flex items-center gap-2">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-500 transition-colors flex items-center gap-2">
                   About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/*3*/}
            <div>
              <h4 className="font-bold text-[var(--text-main)] mb-4">Connect</h4>
              <div className="flex gap-3">
                <a href="https://github.com/rotanaeav/ISTAD-WEB-DEV-I" className="w-10 h-10 rounded-full bg-white/50 dark:bg-white/5 flex items-center justify-center text-[var(--text-muted)] hover:bg-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://t.me/rotanaeav" className="w-10 h-10 rounded-full bg-white/50 dark:bg-white/5 flex items-center justify-center text-[var(--text-muted)] hover:bg-[#229ED9] hover:text-white transition-all duration-300 shadow-sm hover:shadow-blue-400/30">
                  <Send className="w-5 h-5 -ml-0.5" />
                </a>
                <a href="https://www.facebook.com/rotana.karatestk" className="w-10 h-10 rounded-full bg-white/50 dark:bg-white/5 flex items-center justify-center text-[var(--text-muted)] hover:bg-[#1877F2] hover:text-white transition-all duration-300 shadow-sm hover:shadow-blue-600/30">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

           <div>
  <h4 className="font-bold text-[var(--text-main)] mb-4">Supported By</h4>
  
 <a 
  href="https://www.cstad.edu.kh/academics/association-of-information-technology" 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex items-center gap-3 p-2 rounded-2xl 
    bg-white/50 dark:bg-white/5 
    border border-white/50 dark:border-white/10 
    backdrop-blur-sm 
    transition-all duration-300 
    hover:bg-white/80 dark:hover:bg-white/20 
    hover:shadow-xl hover:shadow-blue-500/20 
    hover:scale-105 cursor-pointer w-fit"
>
  <div className="w-14 h-14 rounded-full bg-blue-900/10 dark:bg-white/10 flex items-center justify-center overflow-hidden border border-white/20 flex-shrink-0">
     <img 
       src="/istad.png" 
       alt="ISTAD Logo" 
       className="w-full h-full object-cover" 
     />
  </div>

  <span className="font-bold text-lg text-[var(--text-main)] block md:hidden lg:block whitespace-nowrap pr-2">
    ISTAD ASSOCIATE
  </span>
</a>
</div>
          </div>

          <div className="pt-8 border-t border-gray-200/50 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-md text-[var(--text-muted)]">
              © {currentYear} ISTAD. All rights reserved.
            </p>
            <PoweredBy />

          </div>

        </div>
      </div>
    </footer>
  );
}