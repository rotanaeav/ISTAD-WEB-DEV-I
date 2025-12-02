"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Check, Lock, Mail, Loader2, AlertCircle, ArrowLeft, 
  ShieldCheck, Sparkles, BadgeCheck, Eye, EyeOff 
} from "lucide-react";
import Link from "next/link";
import AnimatedBackground from "@/src/components/animate-ui/Animate-Background";
import Typewriter from "@/src/components/ui/TypeWriter";
import Logo from "@/src/components/Logo";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");

      document.cookie = `auth_token=${data.token}; path=/; max-age=86400`;
      localStorage.setItem("user_info", JSON.stringify(data.user));
      router.push("/dashboard/products");

    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex overflow-hidden bg-transparent relative">
      
      <AnimatedBackground />

      <div className="absolute top-6 left-6 z-20 lg:hidden">
        <Link href="/">
          <button className="p-2 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md shadow-sm">
            <ArrowLeft className="w-5 h-5 text-[var(--text-main)]" />
          </button>
        </Link>
      </div>

       <div className="hidden lg:flex w-1/2 relative items-center justify-center p-16 bg-slate-100/30 dark:bg-white/5 backdrop-blur-sm border-r border-white/20 dark:border-white/5">
         
         <div className="relative z-10 max-w-lg w-full flex flex-col items-center text-center space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
            
            <div className="relative inline-flex items-center justify-center group">
               <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full animate-pulse"></div>
               <Logo />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl font-extrabold tracking-tight text-[var(--text-main)] drop-shadow-sm leading-tight">
                The Standard <br />
                <span className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                   <Typewriter text="Product Authenticity." speed={150} pause={4000} />
                </span>
              </h1>
              <p className="text-xl text-[var(--text-muted)] font-light leading-relaxed">
                Verify your products with the world's most advanced verification system.
              </p>
            </div>

            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 backdrop-blur-md shadow-lg hover:bg-white/50 transition-colors cursor-default hover:scale-105 duration-300">
               <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
               </span>
               <span className="text-sm font-bold text-[var(--text-main)] uppercase tracking-widest">Secure Activated</span>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full pt-8 border-t border-slate-200/50 dark:border-white/10 mt-8">
              {/* Card 1 */}
              <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 shadow-sm backdrop-blur-md hover:-translate-y-1 transition-transform duration-300 group/card">
                 <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover/card:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                 </div>
                 <span className="text-xs font-bold text-[var(--text-main)]">Secure</span>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 shadow-sm backdrop-blur-md hover:-translate-y-1 transition-transform duration-300 group/card">
                 <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 group-hover/card:scale-110 transition-transform">
                    <BadgeCheck className="w-5 h-5" />
                 </div>
                 <span className="text-xs font-bold text-[var(--text-main)]">Verified</span>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 shadow-sm backdrop-blur-md hover:-translate-y-1 transition-transform duration-300 group/card">
                 <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 group-hover/card:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5" />
                 </div>
                 <span className="text-xs font-bold text-[var(--text-main)]">Trusted</span>
              </div>
            </div>

         </div>
      </div>

      <div className="w-full lg:w-1/2 relative flex flex-col justify-center items-center p-6 md:p-12">
        
        {/* Desktop Back Button */}
        <div className="absolute top-10 right-10 z-20 hidden lg:block">
          <Link href="/">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 backdrop-blur-md hover:bg-white/60 transition-all text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] shadow-sm hover:shadow-md">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          </Link>
        </div>

         <div className="w-full max-w-[420px] p-10 rounded-[40px] bg-white/50 dark:bg-black/20 border border-white/60 dark:border-white/10 backdrop-blur-xl shadow-2xl animate-in slide-in-from-right-8 duration-700 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-50"></div>

          <div className="text-center mb-8 space-y-2">
  <div className="mx-auto flex mb-4 justify-center items-center"><Logo /></div>
            

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-main)]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                 <Typewriter text="Welcome Back" speed={100} pause={5000} />
              </span>
            </h2>
            <p className="text-[var(--text-muted)] text-sm">
              Please enter your details to access the dashboard.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-2xl bg-red-50/90 dark:bg-red-900/30 border border-red-200 dark:border-red-800/30 flex items-start gap-3 text-red-600 dark:text-red-400 animate-in slide-in-from-top-2 shadow-sm">
              <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <p className="text-sm font-medium leading-relaxed">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            
            <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 fill-mode-both">
              <label className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <input 
                  name="email"
                  type="email" 
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/50 dark:bg-black/20 border border-slate-200/60 dark:border-white/10 focus:border-blue-500 focus:bg-white/80 dark:focus:bg-black/40 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-[var(--text-main)] placeholder:text-slate-400/70"
                  placeholder="username@istad.com"
                />
              </div>
            </div>

            <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-both">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Password</label>
                <a href="https://t.me/rotanaeav" className="text-xs font-medium text-blue-600 hover:text-blue-500 transition-colors">Forgot password?</a>
              </div>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <input 
                  name="password"
                  type={showPassword ? "text" : "password"} 
                  required
                  className="w-full pl-12 pr-12 py-4 rounded-xl bg-white/50 dark:bg-black/20 border border-slate-200/60 dark:border-white/10 focus:border-blue-500 focus:bg-white/80 dark:focus:bg-black/40 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-[var(--text-main)] placeholder:text-slate-400/70"
                  placeholder="********"
                />
                
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-500 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="pt-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-both">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-lg shadow-xl shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                {loading ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /><span>Verifying...</span></>
                ) : (
                  <><span>Sign In</span><ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </div>

          </form>

          <p className="text-center text-sm text-[var(--text-muted)] mt-8 animate-in fade-in duration-500 delay-500 fill-mode-both">
            Don't have an account? <Link href="https://t.me/rotanaeav" className="font-bold text-blue-600 hover:underline">Contact Admin</Link>
          </p>
        </div>
      </div>
    </div>
  );
}