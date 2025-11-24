"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="relative px-6 py-2 group block">
      <span
        className={`relative z-10 text-base font-medium transition-colors duration-300 ${
          isActive
            ? "text-[var(--text-main)]"
            : "text-[var(--text-muted)] group-hover:text-blue-600 dark:group-hover:text-blue-300"
        }`}
      >
        {label}
      </span>

      {/* hover */}
      <span
        className="absolute inset-0 rounded-full 
          bg-white/20 dark:bg-white/5 
          backdrop-blur-md 
          border border-white/30 dark:border-white/10
          opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 
          transition-all duration-300 ease-out -z-0 shadow-lg shadow-white/10"
      />

        {/* underline */}
      <span
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full transition-all duration-300
          ${
            isActive
              ? "w-8 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.6)] opacity-100"
              : "w-0 group-hover:w-8 bg-white/40 dark:bg-white/20 opacity-0 group-hover:opacity-100"
          }`}
      />
    </Link>
  );
}