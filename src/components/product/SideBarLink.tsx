"use client";

import Link from "next/link";

export default function SidebarLink({
  href,
  icon: Icon,
  label,
  active,
}: {
  href: string;
  icon: any;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 mb-1
      ${
        active
          ? "bg-blue-50 dark:bg-white/5"
          : "hover:bg-white/50 dark:hover:bg-white/5"
      }`}
    >
      {active && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-blue-500" />
      )}

      <Icon
        className={`w-5 h-5 transition-colors ${
          active
            ? "text-blue-600 dark:text-blue-300"
            : "text-slate-400 group-hover:text-blue-500"
        }`}
      />

      <span
        className={`text-sm font-medium transition-colors ${
          active
            ? "text-blue-700 dark:text-blue-200 font-semibold"
            : "text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"
        }`}
      >
        {label}
      </span>
    </Link>
  );
}
