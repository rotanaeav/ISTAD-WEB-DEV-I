interface ProductTableSkeletonProps {
  rowCount?: number;
}

export default function ProductSkeleton({ rowCount = 5 }: ProductTableSkeletonProps) {
  return (
    <>
      {[...Array(rowCount)].map((_, i) => (
        <tr key={i} className="animate-pulse border-b border-white/5 last:border-none">
          
          <td className="px-6 py-4">
            <div className="h-4 w-12 bg-slate-200 dark:bg-white/10 rounded"></div>
          </td>

          <td className="px-6 py-4">
            <div className="h-4 w-48 bg-slate-200 dark:bg-white/10 rounded"></div>
          </td>

          <td className="px-6 py-4">
            <div className="h-4 w-20 bg-slate-200 dark:bg-white/10 rounded"></div>
          </td>

          <td className="px-6 py-4">
            <div className="h-6 w-16 bg-slate-200 dark:bg-white/10 rounded-full"></div>
          </td>

          <td className="px-6 py-4">
            <div className="h-4 w-24 bg-slate-200 dark:bg-white/10 rounded"></div>
          </td>

          <td className="px-6 py-4 text-right">
            <div className="flex items-center justify-end gap-2">
              <div className="h-8 w-8 bg-slate-200 dark:bg-white/10 rounded-lg"></div>
              <div className="h-8 w-8 bg-slate-200 dark:bg-white/10 rounded-lg"></div>
            </div>
          </td>

        </tr>
      ))}
    </>
  );
}