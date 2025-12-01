"use client";
import Link from 'next/link';
import { AlertTriangle, ArrowLeft } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
export default function VerifyFailedPage() {

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-4">
      
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-[128px] mix-blend-multiply dark:mix-blend-overlay dark:bg-yellow-500/20"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-500/20 rounded-full blur-[128px] mix-blend-multiply dark:mix-blend-overlay dark:bg-red-500/20"></div>
      </div>

      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      <main className="relative z-10 w-full max-w-md mx-auto">
        <div className="p-8 md:p-10 rounded-3xl glass text-center shadow-2xl transition-all duration-300 border-2 border-yellow-300/50 dark:border-yellow-700/50">
          
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-yellow-100 dark:bg-yellow-500/20 flex items-center justify-center text-yellow-600 dark:text-yellow-300 shadow-xl">
            <AlertTriangle className="w-12 h-12" />
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-[var(--text-main)]">
            Product Already Scanned
          </h1>
          
          <p className="text-lg text-[var(--text-muted)] mb-8">
            This product is **genuine**, but our records show it has been verified before.
          </p>

          <div className="text-left space-y-3 mb-10 p-5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-white/70 dark:border-slate-700">
              <p className="font-semibold text-[var(--text-main)] border-b pb-2 mb-2 border-slate-200 dark:border-slate-700">Scan History Report</p>
              <ul className="text-sm space-y-1 text-[var(--text-muted)]">
                  <li><strong>Status:</strong> <span className="text-yellow-500 font-medium">Genuine, Re-scan Detected</span></li>
                  <li><strong>Scan Count:</strong> 2+</li>
                  <li><strong>Last Scan Location:</strong> (Mock location)</li>
                  <li><strong>Contact:</strong> If this is unexpected, please contact support.</li>
              </ul>
          </div>

          <Link href="/" className="w-full">
            <button className="glass-button px-8 py-3 rounded-xl font-semibold w-full text-[var(--text-main)] hover:text-blue-600 dark:hover:text-blue-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              <ArrowLeft className="w-5 h-5" />
              Return to Homepage
            </button>
          </Link>

        </div>
      </main>
    </div>
  );
}