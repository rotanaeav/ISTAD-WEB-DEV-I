"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Lock, Mail, Loader2, AlertCircle, ArrowLeft, EyeOff, Eye, Chrome, Image, LucideHeading1 } from "lucide-react";
import Link from "next/link";
import { HyperText } from "@/components/ui/hyper-text";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { CoolMode } from "@/components/ui/cool-mode";
import { BubbleBackground } from "@/src/components/animate-ui/components/backgrounds/bubble";
import { AuroraText } from "@/components/ui/aurora-text";
import { TextAnimate } from "@/components/ui/text-animate";
import { HoleBackground } from "@/src/components/animate-ui/components/backgrounds/hole";

export default function LoginPage() {

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      document.cookie = `auth_token=${data.token}; path=/; max-age=86400`;
      localStorage.setItem("user_info", JSON.stringify(data.user));
      router.push("/dashboard/products");

    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };


  return (

    <div className="min-h-screen w-full relative overflow-hidden  md:items-center md:justify-center" >
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-slate-50 dark:bg-[#0b1120]">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-blue-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-overlay dark:bg-indigo-500/20 animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-purple-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-overlay dark:bg-purple-500/20 animate-pulse-slow"></div>
      </div>

      <div className="absolute top-6 left-6 z-20 md:top-8 md:left-8">
        <Link href="/">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-white/5 border
             border-white/50 dark:border-white/10 backdrop-blur-md hover:bg-white/60 transition-all text-sm font-medium 
             text-[var(--text-muted)] hover:text-[var(--text-main)] shadow-sm">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </button>
        </Link>
      </div>
      <div className="min-h-screen   flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 shadow sm:rounded-lg flex justify-center flex-1
           h-full w-full dark:bg-[#0f172a]/30 rounded-md bg-clip-padding 
            backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100
            md:border
            md:shadow-2xl
              
              transition-all duration-500 animate-in fade-in zoom-in-95">

          {/* LEFT FORM */}
          <div className="
        w-full min-h-screen flex flex-col justify-center px-6 py-12
        md:min-h-fit md:h-auto md:max-w-md md:p-10
         md:border 
      ">

            <div className="text-center mb-8 md:mb-10 mt-8 md:mt-0 ">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-2xl md:rounded-3xl bg-gradient-to-tr
                 from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <Check className="w-8 h-8 md:w-10 md:h-10" strokeWidth={3} />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-main)] tracking-tight "><HyperText>Welcome Back</HyperText></h1>
              <p className="text-[var(--text-muted)] text-sm mt-2 px-4 ">
                <TypingAnimation>Log in to access the admin dashboard.</TypingAnimation>
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 rounded-2xl bg-red-50/90 dark:bg-red-900/30 border border-red-200 dark:border-red-800/30 flex items-start gap-3 text-red-600 dark:text-red-400 animate-in slide-in-from-top-2 shadow-sm">
                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm font-medium leading-relaxed">{error}</p>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">

              <div className="space-y-2">
                <label className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider ml-1 ">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full pl-12 pr-4 py-3.5 md:py-4 rounded-xl bg-white/60 dark:bg-black/20 border border-white/40 dark:border-white/10 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-[var(--text-main)] placeholder:text-slate-400"
                    placeholder="Email address"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider ml-1 ">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full pl-12 pr-4 py-3.5 md:py-4 rounded-xl bg-white/60 dark:bg-black/20 border border-white/40 dark:border-white/10 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-[var(--text-main)] placeholder:text-slate-400"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="pt-4">
                <CoolMode>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-lg shadow-xl shadow-blue-500/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Authenticating...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </CoolMode>
              </div>

            </form>
            <div className="mt-auto md:mt-8 pt-8 text-center">
              <p className="text-xs text-[var(--text-muted)] opacity-80 ">
                Powered by <span className="font-semibold text-blue-500"><Link href="/about" replace>Product QR Verification</Link></span>
              </p>
            </div>

          </div>

          {/* RIGHT IMAGE (ONLY DESKTOP) */}
          <div className="flex-1 text-center hidden lg:flex 
              
              ">

            <div className="m-auto text-center px-12">
              <h1 className="text-4xl font-bold mb-6"><AuroraText>Product QR Verification</AuroraText></h1>
              <p className="text-xl "><TypingAnimation>you can sign in to access with your existing account.</TypingAnimation></p>
              <p className="absolute bottom-0 left-20 right-0 p-4 text-center text-sm text-gray-400">© 2025<Link href="/about" replace> Product QR Verification.
              </Link> All rights reserved.</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center ">

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
