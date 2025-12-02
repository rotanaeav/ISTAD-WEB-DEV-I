"use client";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
  
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[128px] animate-float opacity-70 mix-blend-multiply dark:mix-blend-screen"></div>

      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[128px] animate-float-delayed opacity-70 mix-blend-multiply dark:mix-blend-screen"></div>

      <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  );
}