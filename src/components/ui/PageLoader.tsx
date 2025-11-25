import { Loader2 } from "lucide-react";

interface PageLoaderProps {
  text?: string;
  className?: string;
}

export default function PageLoader({ 
  text = "Loading...", 
  className = "h-96" 
}: PageLoaderProps) {
  return (
    <div className={`flex flex-col items-center justify-center w-full ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
        <Loader2 className="relative w-10 h-10 text-blue-600 dark:text-blue-400 animate-spin" />
      </div>
      <p className="mt-4 text-sm text-[var(--text-muted)] font-medium animate-pulse">
        {text}
      </p>
    </div>
  );
}