"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, PlusCircle, Check } from "lucide-react";
import SidebarLink from "./SideBarLink";

export default function Sidebar() {
  const pathname = usePathname();

  // const SidebarLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => {
  //   const isActive = pathname === href;
  //   return (
  //     <Link href={href} className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 mb-1
  //       ${isActive ? "bg-blue-50 dark:bg-white/5" : "hover:bg-white/50 dark:hover:bg-white/5"}`}>

  //       {isActive && (
  //         <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-blue-500" />
  //       )}

  //       <Icon className={`w-5 h-5 transition-colors ${isActive ? "text-blue-600 dark:text-blue-300" : "text-slate-400 group-hover:text-blue-500"}`} />

  //       <span className={`text-sm font-medium transition-colors ${isActive ? "text-blue-700 dark:text-blue-200 font-semibold" : "text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"}`}>
  //         {label}
  //       </span>
  //     </Link>
  //   );
  // };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 z-40 flex flex-col border-r border-white/20 bg-white/60 dark:bg-[#0f172a]/60 backdrop-blur-2xl">
      {/* 1. LOGO */}
      <div className="h-20 flex items-center px-6 border-b border-white/20 dark:border-white/5">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white">
            <Check className="w-5 h-5" strokeWidth={3} />
          </div>
          <span className="font-bold text-lg text-[var(--text-main)]">
            Admin
          </span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4">
        <div className="mb-6">
          {/* <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            Main
          </p> */}
          <SidebarLink
            href=""
            icon={LayoutDashboard}
            label="Dashboard"
            active={pathname === ""}
          />
        </div>

        <div>
          <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            Products
          </p>

          <SidebarLink
            href="/dashboard/products"
            icon={Package}
            label="All Products"
            active={pathname === "/dashboard/products"}
          />

          <SidebarLink
            href="/dashboard/products/create"
            icon={PlusCircle}
            label="Add Product"
            active={pathname === "/dashboard/products/create"}
          />
        </div>
      </div>
    </aside>
  );
}
