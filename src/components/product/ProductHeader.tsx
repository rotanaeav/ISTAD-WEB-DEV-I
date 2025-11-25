export default function ProductHeader() {
  return (
    <div className="flex flex-col gap-1 mb-6">
      <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-main)] tracking-tight">
        Products
      </h1>
      <p className="text-sm text-[var(--text-muted)]">
        Manage your inventory and track verification scans.
      </p>
    </div>
  );
}