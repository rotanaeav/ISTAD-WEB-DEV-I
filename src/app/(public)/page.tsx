import Link from 'next/link';
import { Scan, ShieldCheck, Check, ArrowRight } from "lucide-react"; 
import BGCard from '@/src/components/ui/BGCard';

export default function LandingPage() {
  return (
    <div className="relative w-full flex flex-col justify-center min-h-[calc(100vh-80px)]">
      
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[128px] mix-blend-multiply dark:mix-blend-overlay dark:bg-indigo-500/20"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[128px] mix-blend-multiply dark:mix-blend-overlay dark:bg-purple-500/20"></div>
      </div>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 flex flex-col justify-center h-full">
 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">

          <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 dark:bg-white/10 dark:border-white/10 text-blue-600 dark:text-blue-300 text-sm font-medium">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
               Secure Verification System
            </div>

            <h1 className="text-5xl md:text-7xl font-bold drop-shadow-sm text-[var(--text-main)]">
              Verify all our 
              <p className="text-transparent mt-6 bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Products
              </p>
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Ensure your beverage is authentic with our tracking system. 
              Just scan, verify, and relax.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/login">
                <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-xl shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              
              <Link href="/about">
                <button className="px-8 py-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/60 dark:border-white/10 text-[var(--text-main)] font-semibold hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
                  How it Works
                </button>
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <BGCard />
            </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Card 1*/}
           <div className="group p-8 rounded-3xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-md hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">
             <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/20 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-300 group-hover:scale-110 transition-transform duration-300">
               <Scan className="w-7 h-7" />
             </div>
             <h3 className="text-2xl font-bold mb-3 text-[var(--text-main)]">1. Scan QR</h3>
             <p className="text-[var(--text-muted)] leading-relaxed">
               Find the unique QR code on your beverage bottle and scan it instantly.
             </p>
           </div>

            {/* Card 2*/}
           <div className="group p-8 rounded-3xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-md hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">
             <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-500/20 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-300 group-hover:scale-110 transition-transform duration-300">
               <ShieldCheck className="w-7 h-7" />
             </div>
             <h3 className="text-2xl font-bold mb-3 text-[var(--text-main)]">2. Instant Verify</h3>
             <p className="text-[var(--text-muted)] leading-relaxed">
               Our system checks the immutable ID against our database.
             </p>
           </div>

           {/* Card 3*/}
           <div className="group p-8 rounded-3xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-md hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">
             <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-300 group-hover:scale-110 transition-transform duration-300">
               <Check className="w-7 h-7" />
             </div>
             <h3 className="text-2xl font-bold mb-3 text-[var(--text-main)]">3. Full Details</h3>
             <p className="text-[var(--text-muted)] leading-relaxed">
               View production date, information, and origin details on screen.
             </p>
           </div>

        </div>

      </main>
    </div>
  );
}