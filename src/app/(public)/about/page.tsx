"use client"

import { useState, useEffect } from "react"
import { ShieldCheck, Database, Zap, Users, Mail, MapPin, Send } from "lucide-react"

const Typewriter = ({ text, speed = 100, pause = 2000 }: { text: string; speed?: number; pause?: number }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const handleTyping = () => {
      const currentLength = displayedText.length
      if (!isDeleting) {
        if (currentLength < text.length) {
          setDisplayedText(text.substring(0, currentLength + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pause)
          return
        }
      } else {
        if (currentLength > 0) {
          setDisplayedText(text.substring(0, currentLength - 1))
        } else {
          setIsDeleting(false)
        }
      }
    }
    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, text, speed, pause])

  return (
    <span className="inline">
      {displayedText}

      <span className="ml-1 inline-block w-[3px] h-[0.9em] align-middle bg-blue-500 animate-pulse rounded-full" />
    </span>
  )
}

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <span className="inline-block">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block animate-in fade-in zoom-in-75"
          style={{
            animationDelay: `${index * 50}ms`,
            animationDuration: "600ms",
            animationFillMode: "both",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}

const teamMembers = [
  { name: "EAV ROTANA", role: "Project Leader / Backend", image: "/team/rotana.jpg" },
  { name: "KEO MENGLONG", role: "Product Features", image: "/team/menglong.jpg" },
  { name: "PHAN MONIKA", role: "Verifier Page", image: "/team/monika.jpg" },
  { name: "PRUM SAKKDA", role: "Login Feature", image: "/team/sakkda.jpg" },
  { name: "NORNG SOCHEATRA", role: "Edit Product Features", image: "/team/socheatra.jpg" },
  { name: "MOT NA", role: "UI Assistant", image: "/team/motna.jpg" },
  { name: "PRAK SOVANTHONG", role: "Team Member", image: "/team/sovanthong.jpg" },
]

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[128px] mix-blend-multiply dark:mix-blend-overlay dark:bg-indigo-500/20 animate-pulse-slow"></div>
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[128px] mix-blend-multiply dark:mix-blend-overlay dark:bg-purple-500/20 animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-overlay animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col gap-32">

        <div className="text-center space-y-8 max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-700 relative">
          <div className="absolute inset-0 -z-10 max-w-4xl mx-auto h-96 bg-gradient-to-b from-white/20 to-transparent dark:from-white/5 dark:to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[var(--text-main)] tracking-tight leading-[1.15] drop-shadow-sm">
            The Standard<br />
            
            <span className="block mt-2 min-h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 pb-2">
              <Typewriter text="Product Authenticity." speed={100} pause={2000} />
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            We are the team from ISTAD, building the future of product authenticity with secure, invisible, and instant
            verification technology.
          </p>
        </div>

        <div className="relative">
          <div className="text-center mb-16 space-y-3">
            <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 animate-in zoom-in duration-1000 [animation-delay:0ms]">
              <AnimatedText text="Why Choose Us" />
            </h3>
            <p
              className="text-base text-[var(--text-muted)] animate-in fade-in duration-1000"
              style={{ animationDelay: "300ms", animationFillMode: "both" }}
            >
              Core pillars of our technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative p-8 rounded-[32px] bg-gradient-to-br from-white/50 via-white/40 to-white/30 dark:from-white/10 dark:via-white/6 dark:to-white/3 border border-white/70 dark:border-white/20 backdrop-blur-3xl shadow-xl dark:shadow-2xl hover:-translate-y-4 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/10 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/50 group-hover:shadow-blue-500/80 transition-shadow duration-500">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[var(--text-main)] mb-3">Consumer Protection</h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  We believe everyone deserves to know that what they buy is real. Instant verification at the scan of a
                  button.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative p-8 rounded-[32px] bg-gradient-to-br from-white/50 via-white/40 to-white/30 dark:from-white/10 dark:via-white/6 dark:to-white/3 border border-white/70 dark:border-white/20 backdrop-blur-3xl shadow-xl dark:shadow-2xl hover:-translate-y-4 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/10 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/80 transition-shadow duration-500">
                  <Database className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[var(--text-main)] mb-3">Secure Data</h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Using a centralized, immutable database architecture, we ensure that product IDs cannot be duplicated.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-8 rounded-[32px] bg-gradient-to-br from-white/50 via-white/40 to-white/30 dark:from-white/10 dark:via-white/6 dark:to-white/3 border border-white/70 dark:border-white/20 backdrop-blur-3xl shadow-xl dark:shadow-2xl hover:-translate-y-4 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/10 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/50 group-hover:shadow-emerald-500/80 transition-shadow duration-500">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[var(--text-main)] mb-3">Speed & Simplicity</h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  No apps to download. No complex logins. Just scan QR and get the truth in milliseconds.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-16 space-y-4">
           <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 animate-in zoom-in duration-1000 [animation-delay:0ms]">
              <AnimatedText text="Our Developer Team" />
            </h3>
            <p className="text-[var(--text-muted)] text-base max-w-2xl mx-auto">
              A ISTAD team of passionate developers dedicated to building secure and reliable product verification solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center p-6 rounded-3xl bg-gradient-to-br from-white/50 to-white/30 dark:from-white/10 dark:to-white/5 border border-white/60 dark:border-white/20 backdrop-blur-2xl hover:bg-white/70 dark:hover:bg-white/15 transition-all duration-400 hover:-translate-y-3 shadow-lg dark:shadow-xl hover:shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-white/20 dark:from-white/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"></div>

                <div className="relative z-10 w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-white/60 dark:border-white/25 group-hover:border-blue-500/70 transition-all duration-400 shadow-lg dark:shadow-xl group-hover:shadow-blue-500/50 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-white/15 dark:to-white/8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="relative z-10 text-sm font-bold text-[var(--text-main)] text-center uppercase tracking-wide group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                  {member.name}
                </h3>
                <div className="relative z-10 text-[11px] font-bold text-blue-600 dark:text-blue-300 text-center uppercase tracking-widest mt-2 bg-gradient-to-r from-blue-100/60 to-blue-50/40 dark:from-blue-900/40 dark:to-blue-800/20 px-2.5 py-1.5 rounded-lg backdrop-blur-md border border-blue-200/70 dark:border-blue-400/30 shadow-md group-hover:shadow-lg group-hover:bg-gradient-to-r group-hover:from-blue-100/80 group-hover:to-blue-50/60 dark:group-hover:from-blue-900/60 dark:group-hover:to-blue-800/40 transition-all">
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        <section
          id="contact"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-white/30 dark:border-white/10 pt-20"
        >
          <section className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-[var(--text-main)]">Get in Touch</h2>
              <p className="text-[var(--text-muted)] text-lg mt-3 leading-relaxed">
                Have questions about our verification system? We'd love to hear from you.
              </p>
            </div>
            <div className="space-y-4">
              <div className="group relative flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-white/10 dark:to-white/5 border border-white/60 dark:border-white/20 backdrop-blur-2xl hover:bg-white/60 dark:hover:bg-white/15 transition-all duration-400 hover:-translate-x-1 hover:shadow-lg dark:hover:shadow-xl cursor-pointer overflow-hidden">
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/40 dark:to-blue-800/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-md group-hover:shadow-lg transition-shadow">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Email Us</p>
                  <p className="text-lg font-medium text-[var(--text-main)]">contact@istad.co</p>
                </div>
              </div>
              <div className="group relative flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-white/10 dark:to-white/5 border border-white/60 dark:border-white/20 backdrop-blur-2xl hover:bg-white/60 dark:hover:bg-white/15 transition-all duration-400 hover:-translate-x-1 hover:shadow-lg dark:hover:shadow-xl cursor-pointer overflow-hidden">
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/40 dark:to-purple-800/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-md group-hover:shadow-lg transition-shadow">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Visit Us</p>
                  <p className="text-lg font-medium text-[var(--text-main)]">Phnom Penh, Cambodia</p>
                </div>
              </div>
            </div>
          </section>

          <div className="relative p-8 rounded-[32px] bg-gradient-to-br from-white/70 via-white/60 to-white/50 dark:from-white/15 dark:via-white/10 dark:to-white/8 border border-white/80 dark:border-white/25 backdrop-blur-3xl shadow-2xl dark:shadow-2xl overflow-hidden group">
            <form className="relative z-10 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[var(--text-muted)] uppercase ml-1">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/12 border border-white/60 dark:border-white/25 outline-none focus:border-blue-500/70 transition-all text-[var(--text-main)]" placeholder="Rotana" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[var(--text-muted)] uppercase ml-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/12 border border-white/60 dark:border-white/25 outline-none focus:border-blue-500/70 transition-all text-[var(--text-main)]" placeholder="Eav" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-[var(--text-muted)] uppercase ml-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/12 border border-white/60 dark:border-white/25 outline-none focus:border-blue-500/70 transition-all text-[var(--text-main)]" placeholder="admin@istad.com" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-[var(--text-muted)] uppercase ml-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/12 border border-white/60 dark:border-white/25 outline-none focus:border-blue-500/70 transition-all text-[var(--text-main)] resize-none" placeholder="How can we help?" />
              </div>
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-2xl transition-all flex items-center justify-center gap-2 group">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}