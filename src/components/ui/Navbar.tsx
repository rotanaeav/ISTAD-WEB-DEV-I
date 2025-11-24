"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "../features/NavLink";
import { Check, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backface-visibility-hidden ${
        scrolled
          ? "bg-white/60 dark:bg-[#1e1b4b]/60 backdrop-blur-xl border-b border-white/20 shadow-md"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        
        <div className="flex items-center justify-start flex-1">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
              <Check className="w-6 h-6" strokeWidth={3} />
            </div>
            <span className="font-bold text-xl tracking-tight text-[var(--text-main)] hidden sm:block">
              Product Verify
            </span>
          </Link>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
           <NavLink href="/" label="Home" />
        </div>

        <div className="flex items-center justify-end flex-1 gap-4">
          
          <div className="hidden md:block">
            <NavLink href="/about" label="About Us" />
          </div>

          <div className="flex items-center pl-4 ml-2 border-l border-gray-200 dark:border-white/10">
            <ThemeToggle />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[var(--text-main)] hover:bg-black/5 dark:hover:bg-white/10"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white/95 dark:bg-[#1e1b4b]/95 backdrop-blur-xl border-b border-white/10 shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4 text-center">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-[var(--text-main)] hover:text-blue-500 transition-colors">
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-[var(--text-main)] hover:text-blue-500 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}