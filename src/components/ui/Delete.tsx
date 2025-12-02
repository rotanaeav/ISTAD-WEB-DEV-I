"use client";

import { AlertCircle, Loader2, Trash2 } from "lucide-react";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
  title?: string;
  description?: string;
}

export default function DeleteProduct({
  isOpen,
  onClose,
  onConfirm,
  loading,
  title = "Delete Item?",
  description = "Are you sure you want to delete this?"
}: DeleteModalProps) {
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-500/20 dark:bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={!loading ? onClose : undefined}
      ></div>

      <div className="relative w-full max-w-md p-6 rounded-3xl 
                      bg-white/60 dark:bg-[#0f172a]/60 
                      border border-white/60 dark:border-white/10 
                      backdrop-blur-2xl shadow-2xl 
                      animate-in zoom-in-95 fade-in duration-200">
        
        <div className="flex flex-col items-center text-center gap-4">
          
          <div className="w-16 h-16 rounded-full bg-red-100/50 dark:bg-red-500/10 flex items-center justify-center mb-2 shadow-inner">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>

          <h3 className="text-2xl font-bold text-[var(--text-main)]">
            {title}
          </h3>
          
          <p className="text-[var(--text-muted)] text-sm">
            {description}
          </p>

          <div className="grid grid-cols-2 gap-3 w-full mt-4">
            <button
              onClick={onClose}
              disabled={loading}
              className="px-4 py-3 rounded-xl font-medium 
                         bg-gray-100/50 dark:bg-white/5 
                         hover:bg-gray-200/50 dark:hover:bg-white/10 
                         text-gray-700 dark:text-gray-300 
                         border border-transparent hover:border-gray-300/50 dark:hover:border-white/10
                         transition-all active:scale-95 disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              onClick={onConfirm}
              disabled={loading}
              className="px-4 py-3 rounded-xl font-bold 
                         bg-red-500/80 hover:bg-red-600/90 
                         text-white shadow-lg shadow-red-500/30 
                         flex items-center justify-center gap-2
                         transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Deleting...</span>
                </>
              ) : (
                <>
                  <Trash2 className="w-4 h-4" />
                  <span>Yes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}