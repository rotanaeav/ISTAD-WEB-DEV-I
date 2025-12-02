"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'; 
import { 
  Scan, ShieldCheck, Check, ArrowRight, 
  ChevronDown, Building2, Globe, Truck, ShoppingBag 
} from "lucide-react"; 
import BGCard from '@/src/components/ui/BGCard';

export default function LandingPage() {
  
  const faqs = [
    {
      question: "Do I need to download a special app?",
      answer: "No. Our QR codes are universal. You can scan them using the standard camera app on any iPhone or Android device."
    },
    {
      question: "How do I know the product is real?",
      answer: "When you scan the code, our secure API validates the unique digital fingerprint of the product against our immutable database. You will see a green 'Verified' badge if it is authentic."
    },
    {
      question: "Is this free for shoppers?",
      answer: "Yes! Product verification is completely free for all consumers. We believe safety and transparency should be accessible to everyone."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative w-full flex flex-col justify-center min-h-[calc(100vh-80px)]">
      
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[128px] mix-blend-multiply dark:mix-blend-overlay dark:bg-indigo-500/20"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[128px] mix-blend-multiply dark:mix-blend-overlay dark:bg-purple-500/20"></div>
      </div>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 flex flex-col justify-center h-full gap-20 md:gap-24">
 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
           <div className="group p-8 rounded-3xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-md hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">
             <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/20 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-300 group-hover:scale-110 transition-transform duration-300">
               <Scan className="w-7 h-7" />
             </div>
             <h3 className="text-2xl font-bold mb-3 text-[var(--text-main)]">1. Scan QR</h3>
             <p className="text-[var(--text-muted)] leading-relaxed">
               Find the unique QR code on your beverage bottle and scan it instantly.
             </p>
           </div>

           <div className="group p-8 rounded-3xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-md hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">
             <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-500/20 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-300 group-hover:scale-110 transition-transform duration-300">
               <ShieldCheck className="w-7 h-7" />
             </div>
             <h3 className="text-2xl font-bold mb-3 text-[var(--text-main)]">2. Instant Verify</h3>
             <p className="text-[var(--text-muted)] leading-relaxed">
               Our system checks the immutable ID against our database.
             </p>
           </div>

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

        <div className="py-8 border-y border-white/20 dark:border-white/5">
          <p className="text-center text-md font-bold text-[var(--text-muted)] uppercase tracking-widest mb-8 opacity-70">
            Trusted by Industry Leaders
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-20 md:gap-20 hover:text-blue-200  dark:hover:text-blue-300 transition-opacity duration-500">
            <a className="flex items-center justify-center gap-2 group" href='#'>
              <Building2 className="w-8 h-8 text-[var(--text-main)]" />
              <span className="font-bold text-xl text-[var(--text-main)]">EL-Tech Computer</span>
            </a>
          
            <a className="flex items-center justify-center gap-2 group" href='#'>
              <Globe className="w-8 h-8 text-[var(--text-main)]" />
              <span className="font-bold text-xl text-[var(--text-main)]">World Logistics</span>
            </a>
            <a className="flex items-center justify-center gap-2 group" href='#'>
              <ShoppingBag className="w-8 h-8 text-[var(--text-main)]" />
              <span className="font-bold text-xl text-[var(--text-main)]">RetailPro</span>
            </a>
            <a className="flex items-center justify-center gap-2 group " href="https://istad.co/">
  <div className="relative w-8 h-8">
    <Image 
      src="/istad.png" 
      alt="ISTAD Logo" 
      fill 
      className="object-contain" 
    />
  </div>
  <span className="font-bold text-xl text-[var(--text-main)]">ISTAD</span>
</a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)] mb-4">Common Questions</h2>
            <p className="text-[var(--text-muted)]">Everything you need to know about the product verification process.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="group rounded-2xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:bg-white/60 dark:hover:bg-white/10"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-lg text-[var(--text-main)]">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[var(--text-muted)] transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full rounded-[40px] overflow-hidden p-12 md:p-20 text-center mb-12
                        bg-white/40 dark:bg-white/5 
                        backdrop-blur-2xl 
                        border border-white/50 dark:border-white/10 
                        shadow-2xl">
           
           <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 z-0 mix-blend-overlay pointer-events-none"></div>
           
           <div className="relative z-10 space-y-8">
             
             {/* HEADLINE: Gradient in Light Mode, White in Dark Mode */}
             <h2 className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-sm
                            text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600
                            dark:text-white dark:bg-none">
               Ready to Secure Your Products?
             </h2>

             {/* PARAGRAPH: Dark Grey in Light Mode, White in Dark Mode */}
             <p className="text-slate-600 dark:text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
               Join the brands that are building trust and eliminating counterfeits with our advanced verification technology.
             </p>

             <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
               <Link href="/about">
                 <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300">
                   Partner with Us
                 </button>
               </Link>
             </div>
           </div>
        </div>

      </main>
    </div>
  );
}