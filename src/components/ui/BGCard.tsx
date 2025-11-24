"use client";

import { useState, useEffect } from "react";
import { Check, X, RefreshCw } from "lucide-react";

export default function BGCard() {
  const [status, setStatus] = useState<'success' | 'failure'>('success');

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus((prev) => (prev === 'success' ? 'failure' : 'success'));
    }, 3500); 

    return () => clearInterval(interval);
  }, []);

  const isSuccess = status === 'success';

  return (
    <div 
      key={status} 
      className="w-80 h-[26rem] rounded-[32px] p-8 relative flex flex-col justify-between 
        shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.02]
        bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10"
    >

      <div className={`w-24 h-24 mx-auto mt-2 rounded-full border-4 border-white/40 flex items-center justify-center shadow-inner animate-in zoom-in-50 duration-500
        ${isSuccess 
          ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 shadow-blue-500/20' 
          : 'bg-gradient-to-br from-red-500/20 to-orange-500/20 shadow-red-500/20'
        }`}
      >
        {isSuccess ? (
          <Check className="w-12 h-12 text-blue-600 dark:text-blue-300 animate-pulse" strokeWidth={3} />
        ) : (
          <X className="w-12 h-12 text-red-500 dark:text-red-400 animate-pulse" strokeWidth={3} />
        )}
      </div>

      <div className="text-center mt-4 animate-in slide-in-from-bottom-4 fade-in duration-700">
        <h3 className={`text-2xl font-bold tracking-tight ${isSuccess ? 'text-blue-700 dark:text-blue-300' : 'text-red-600 dark:text-red-400'}`}>
          {isSuccess ? 'Verify Successful' : 'Verification Failed'}
        </h3>
        <p className="text-sm font-medium opacity-60 mt-1 text-[var(--text-main)]">
          {isSuccess ? 'ID: 8473-2910-4820' : 'Error: Invalid QR Code'}
        </p>
      </div>
      
      <div className="space-y-4 opacity-30 mt-4">
        <div className="h-3 bg-current rounded-full w-3/4 mx-auto animate-pulse"></div>
        <div className="h-3 bg-current rounded-full w-full animate-pulse delay-75"></div>
        <div className="h-3 bg-current rounded-full w-5/6 mx-auto animate-pulse delay-150"></div>
      </div>

      <div className={`h-14 rounded-2xl flex items-center justify-center border font-semibold text-lg shadow-lg animate-in fade-in duration-1000
        ${isSuccess 
          ? 'bg-blue-600/90 text-white border-blue-400/30 shadow-blue-500/30' 
          : 'bg-red-600/90 text-white border-red-400/30 shadow-red-500/30'
        }`}>
         <span className="flex items-center gap-2">
           {isSuccess ? <Check className="w-5 h-5" /> : <RefreshCw className="w-5 h-5" />}
           {isSuccess ? 'Verified Authentic' : 'Try Again'}
         </span>
      </div>

    </div>
  );
}