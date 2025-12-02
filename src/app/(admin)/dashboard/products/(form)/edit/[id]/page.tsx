"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, AlertCircle } from "lucide-react";
import { Product } from "@/src/lib/types";
import PageLoader from "@/src/components/ui/PageLoader";

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Form State
  const [formData, setFormData] = useState<Partial<Product>>({
    name: "",
    price: 0,
    description: "",
  });


  // 1. FETCH PRODUCT
  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setFormData(data);
      } catch (err) {
        setError("Failed to load product data.");
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchProduct();
  }, [id]);

  // 2. INPUT CHANGE
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };

  // 3. SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to update product");

      router.push("/dashboard/products");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setSaving(false);
    }
  };

  if (loading) {
    return <PageLoader text="Loading product details..." />;
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

      <div className="flex items-center gap-4">
        <Link href="/dashboard/products">
          <button className="p-2 rounded-xl bg-white dark:bg-white/5 hover:bg-white/80 transition-colors border border-white/20">
            <ArrowLeft className="w-5 h-5 text-[var(--text-main)]" />
          </button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-main)]">Edit Product</h1>
          <p className="text-sm text-[var(--text-muted)]">Basic details about your product.</p>
        </div>
      </div>

    
      <div className="p-8 rounded-[24px] bg-white shadow  border border-gray-200 dark:bg-[#ffffff14] dark:border-white/20">

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 flex items-center gap-3 text-red-600 dark:text-red-400">
            <AlertCircle className="w-5 h-5" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--text-main)] ml-1">Product ID</label>
            <input
              value={formData.productId || "No ID Found"}
              readOnly
              className="w-full px-4 py-3 rounded-xl border border-gray-300  text-gray-900 dark:text-[#ffffff] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-950 dark:border-white/20 dark:focus:border-white/50 outline-none"
            />
          </div>


          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--text-main)] ml-1">Product Name</label>
            <input
              name="name"
              type="text"
              required
              value={formData.name || ""}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300  text-gray-900 dark:text-[#ffffff] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-950 dark:border-white/20 dark:focus:border-white/50 outline-none transition-all text-[var(--text-main)]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--text-main)] ml-1">Price ($)</label>
            <input
              name="price"
              type="number"
              step="0.01"
              required
              value={formData.price || 0}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300  text-gray-900 dark:text-[#ffffff] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-950 dark:border-white/20 dark:focus:border-white/50 outline-none transition-all text-[var(--text-main)]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--text-main)] ml-1">Description</label>
            <textarea
              name="description"
              rows={4}
              value={formData.description || ""}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300  text-gray-900 dark:text-[#ffffff] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-950 dark:border-white/20 dark:focus:border-white/50 outline-none transition-all resize-none text-[var(--text-main)]"
            />
          </div>

          <div className="flex items-center gap-4 pt-4">
            <Link href="/dashboard/products" className="flex-1">
              <button type="button" className="w-full py-3.5 rounded-xl bg-slate-100 dark:bg-white/5 text-[var(--text-muted)] font-bold hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                Cancel
              </button>
            </Link>

            <button
              type="submit"
              disabled={saving}
              className="flex-1 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/30 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {saving ? (
                <>Saving...</>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Save Changes
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}