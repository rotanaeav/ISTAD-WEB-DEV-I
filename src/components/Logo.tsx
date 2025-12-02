 "use client";

import { ShoppingCart, Check } from "lucide-react";
import Link from "next/link"; 

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 p-2 rounded-xl transition-colors duration-300">
      <div className="relative w-10 h-10 flex items-center justify-center rounded-lg 
                      bg-blue-200/50 dark:bg-blue-800/50 backdrop-blur-sm 
                      border border-blue-300/50 dark:border-blue-700/50 shadow-md">
        
        <ShoppingCart className="w-6 h-6 text-blue-800 dark:text-blue-300 transition-colors duration-300" />
        
        <div className="absolute -top-1 -right-1 bg-emerald-500 rounded-full p-0.5 border border-white dark:border-slate-800 shadow-sm">
          <Check className="w-3 h-3 text-white" />
        </div>
      </div>

      <span className="font-bold text-xl text-[var(--text-main)] transition-colors duration-300 flex items-baseline">
        <span className="text-gray-700 dark:text-gray-300 text-lg mr-0.5">Product</span>
        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Verify
        </span>
      </span>
    </Link>
  );
}
