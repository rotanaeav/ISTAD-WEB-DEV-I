"use client";

import { useState } from "react";
import AdminFooter from "@/src/components/product/AdminFoot";
import AdminNavbar from "@/src/components/product/AdminNav";
import Sidebar from "@/src/components/product/SideBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex font-sans text-[var(--text-main)]">
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile / Tablet sidebar (slide-in) */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={closeSidebar}
        />

        {/* Sidebar panel */}
        <div className="relative h-full w-64 bg-slate-900 dark:bg-slate-950">
          <Sidebar />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen w-full lg:ml-64 transition-all duration-300">
        {/* Pass toggle to navbar so it can show a hamburger button */}
        <AdminNavbar onToggleSidebar={toggleSidebar} />

        <main className="flex-1 p-4 md:p-8 overflow-y-auto">{children}</main>

        <AdminFooter />
      </div>
    </div>
  );
}
