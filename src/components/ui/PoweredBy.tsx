"use client";

export default function PoweredBy() {
  return (
    <>
      <style jsx>{`
        @keyframes gradient-xy {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-gradient {
          background-size: 200% auto;
          animation: gradient-xy 3s linear infinite;
        }
      `}</style>

      <div className="flex items-center">
        <p className="text-sm font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-text-gradient uppercase tracking-widest cursor-default hover:opacity-80 transition-opacity">
          Powered by Product QR Verify.
        </p>
      </div>
    </>
  );
}