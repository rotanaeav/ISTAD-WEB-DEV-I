"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, LogOut, User } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import { AdminNavbarProps } from "@/src/lib/types";

export default function AdminNavbar({ onToggleSidebar }: AdminNavbarProps) {
  const router = useRouter();
  const [user, setUser] = useState<{
    name: string;
    email: string;
    role: string;
    avatar?: string;
  } | null>(null);
  const [mounted, setMounted] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("user_info");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse user info");
      }
    }
  }, []);

  const handleLogout = () => {
    document.cookie =
      "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";

    localStorage.removeItem("user_info");

    router.push("/login");
  };

  if (!mounted)
    return (
      <div className="h-24 bg-white/60 dark:bg-[#0f172a]/60 border-b border-white/20 dark:border-white/5" />
    );

  return (
    <header className="h-24 px-4 md:px-8 flex items-center justify-between bg-white/60 dark:bg-[#0f172a]/60 backdrop-blur-xl border-b border-white/20 dark:border-white/5 sticky top-0 z-30 transition-all">
      <button
        type="button"
        className="lg:hidden inline-flex items-center justify-center p-2 rounded-md border border-slate-300 dark:border-slate-700"
        onClick={onToggleSidebar}
      >

        <span className="sr-only">Toggle sidebar</span>
        <div className="space-y-1">
          <span className="block h-0.5 w-4 bg-slate-800 dark:bg-slate-100" />
          <span className="block h-0.5 w-4 bg-slate-800 dark:bg-slate-100" />
          <span className="block h-0.5 w-4 bg-slate-800 dark:bg-slate-100" />
        </div>
      </button>
      <h2 className="text-2xl max-sm:text-xl font-bold text-[var(--text-main)] tracking-tight">
        Welcome,{" "}
        <span className="text-blue-600 dark:text-blue-400">
          {user?.name?.split("  ")[0] || "Admin"}
        </span>
      </h2>

      <div className="flex items-center gap-6">
        <div className="opacity-80 hover:opacity-100 transition-opacity">
          <ThemeToggle />
        </div>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-4 cursor-pointer group pl-6 border-l border-gray-200 dark:border-white/10 outline-none"
          >
            <div className="hidden md:block text-right">
              <p className="text-base font-bold text-[var(--text-main)] leading-tight">
                {user?.name || "Guest User"}
              </p>
              <p className="text-xs text-[var(--text-muted)] font-medium mt-0.5 uppercase tracking-wider">
                {user?.role || "Viewer"}
              </p>
            </div>

            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 overflow-hidden flex items-center justify-center">
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {user?.name?.charAt(0).toUpperCase() || "A"}
                  </span>
                )}
              </div>
            </div>

            <ChevronDown
              className={`w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-transform duration-300 hidden md:block ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-40 cursor-default"
                onClick={() => setIsDropdownOpen(false)}
              />

              <div className="absolute right-0 mt-4 w-56 z-50 origin-top-right rounded-2xl bg-white/80 dark:bg-[#0f172a]/90 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200">
                <div className="p-2 space-y-1">
              
                  <div className="px-4 py-3 border-b border-gray-100 dark:border-white/5 mb-1">
                    <p className="text-sm font-bold text-[var(--text-main)]">
                      Signed in as
                    </p>
                    <p className="text-xs text-[var(--text-muted)] truncate">
                      {user?.email}
                    </p>
                  </div>

                  <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl text-[var(--text-main)] hover:bg-blue-50 dark:hover:bg-white/5 transition-colors">
                   <Link href="/profile">Profile Settings</Link>
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
