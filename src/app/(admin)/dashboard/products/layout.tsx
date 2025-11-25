import AdminFooter from "@/src/components/product/AdminFoot";
import AdminNavbar from "@/src/components/product/AdminNav";
import Sidebar from "@/src/components/product/SideBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex font-sans text-[var(--text-main)]">
      
      {/* Sidebar (Hidden on mobile) */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      
      <div className="flex-1 flex flex-col min-h-screen w-full lg:ml-64 transition-all duration-300">
        
        <AdminNavbar />
        
        {/* 2. Page Content (grows to fill space) */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
           {children}
        </main>

        <AdminFooter />
        
      </div>

    </div>
  );
}