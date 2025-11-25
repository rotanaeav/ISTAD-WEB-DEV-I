import { useState } from "react";
import Link from "next/link";
import { Edit, Trash2, QrCode, ArrowUpDown, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/src/lib/types";
import ProductSkeleton from "./ProductSkeleton";
import { formatDate } from "@/src/lib/utils";

interface ProductTableProps {
  products: Product[];
  loading: boolean;
  onDelete: (id: string) => void;
}

export default function ProductTable({ products, loading, onDelete }: ProductTableProps) {
  
  // Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToNext = () => setCurrentPage(p => Math.min(totalPages, p + 1));
  const goToPrev = () => setCurrentPage(p => Math.max(1, p - 1));

  return (
    <div className="rounded-[24px] overflow-hidden border border-white/40 dark:border-white/5 bg-white/40 dark:bg-[#0f172a]/40 backdrop-blur-xl shadow-sm flex flex-col min-h-[600px]">
      <div className="overflow-x-auto flex-grow">
        <table className="w-full">
          
          {/* Header */}
          <thead className="bg-white/50 dark:bg-white/5 border-b border-white/20">
            <tr>
              <th className="px-6 py-5 text-left text-xs font-extrabold text-[var(--text-muted)] uppercase tracking-wider w-24">ID</th>
              <th className="px-6 py-5 text-left text-xs font-extrabold text-[var(--text-muted)] uppercase tracking-wider">Product Name</th>
              <th className="px-6 py-5 text-left text-xs font-extrabold text-[var(--text-muted)] uppercase tracking-wider">Price</th>
              <th className="px-6 py-5 text-left text-xs font-extrabold text-[var(--text-muted)] uppercase tracking-wider">
                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors">
                  Scans <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="px-6 py-5 text-left text-xs font-extrabold text-[var(--text-muted)] uppercase tracking-wider">Created</th>
              <th className="px-6 py-5 text-right text-xs font-extrabold text-[var(--text-muted)] uppercase tracking-wider">Actions</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-white/20 dark:divide-white/5">
            {loading ? (
              // --- USE THE NEW COMPONENT HERE ---
              <ProductSkeleton rowCount={5} />
            ) : currentData.length > 0 ? (
              // Real Rows
              currentData.map((product) => (
                <tr key={product.id} className="group hover:bg-blue-50/50 dark:hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-mono font-bold text-slate-400">#{product.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-[var(--text-main)]">{product.name}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-[var(--text-main)]">${Number(product.price).toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
                       <QrCode className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                       <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300">{product.scanCount || 0}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-[var(--text-muted)]">{formatDate(product.createDate)}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/dashboard/products/edit/${product.id}`}>
                        <button className="p-2 rounded-lg text-blue-600 bg-blue-50 dark:bg-blue-900/10 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors border border-blue-200 dark:border-blue-800">
                          <Edit className="w-4 h-4" />
                        </button>
                      </Link>
                      <button onClick={() => onDelete(product.id)} className="p-2 rounded-lg text-red-600 bg-red-50 dark:bg-red-900/10 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors border border-red-200 dark:border-red-800">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              // Empty State
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-[var(--text-muted)]">
                  <div className="flex flex-col items-center justify-center gap-2">
                     <Search className="w-8 h-8 opacity-20" />
                     <p>No products found</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="px-6 py-4 border-t border-white/20 flex items-center justify-between bg-white/30 dark:bg-white/5">
         <span className="text-xs text-[var(--text-muted)] font-medium">
           Showing <span className="font-bold text-[var(--text-main)]">{Math.min(startIndex + 1, products.length)}-{Math.min(startIndex + ITEMS_PER_PAGE, products.length)}</span> of {products.length}
         </span>
         <div className="flex gap-2">
           <button onClick={goToPrev} disabled={currentPage === 1} className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold rounded-lg bg-white/50 dark:bg-black/20 border border-white/20 disabled:opacity-40 hover:bg-white dark:hover:bg-white/10 transition-colors text-[var(--text-main)]">
             <ChevronLeft className="w-3 h-3" /> Prev
           </button>
           <button onClick={goToNext} disabled={currentPage === totalPages} className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold rounded-lg bg-white/50 dark:bg-black/20 border border-white/20 disabled:opacity-40 hover:bg-white dark:hover:bg-white/10 transition-colors text-[var(--text-main)]">
             Next <ChevronRight className="w-3 h-3" />
           </button>
         </div>
      </div>
    </div>
  );
}