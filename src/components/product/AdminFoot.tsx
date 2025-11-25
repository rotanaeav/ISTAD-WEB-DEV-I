export default function AdminFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-6 px-8 border-t border-slate-200 dark:border-white/5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
   
        <p className="text-xs font-medium text-[var(--text-muted)]">
          &copy; {currentYear} <span className="font-bold text-[var(--text-main)]">ISTAD</span>. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a href="https://github.com/rotanaeav/ISTAD-WEB-DEV-I" className="text-xs font-medium text-[var(--text-muted)] hover:text-blue-500 transition-colors">
            Support
          </a>
          <a href="https://github.com/rotanaeav/ISTAD-WEB-DEV-I" className="text-xs font-medium text-[var(--text-muted)] hover:text-blue-500 transition-colors">
            License
          </a>
          <div className="px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
            <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400">
              v1.0.0
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}