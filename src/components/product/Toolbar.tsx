import { Search } from "lucide-react";

interface ProductToolbarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  totalCount: number;
}

export default function ProductToolbar({ searchTerm, setSearchTerm, totalCount }: ProductToolbarProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Search Bar */}
      <div className="md:col-span-2 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search by name or ID..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/60 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-[var(--text-main)]"
        />
      </div>
      
      {/* Quick Stat */}
      <div className="flex items-center justify-between px-6 py-3 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-500/10">
         <span className="text-sm font-medium text-[var(--text-muted)]">Total Items</span>
         <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{totalCount}</span>
      </div>
    </div>
  );
}