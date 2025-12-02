"use client";

import ProductHeader from "@/src/components/product/ProductHeader";
import ProductTable from "@/src/components/product/Table";
import ProductToolbar from "@/src/components/product/Toolbar";
import DeleteProduct from "@/src/components/ui/Delete";
import { Product } from "@/src/lib/types";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`);
        const data = await res.json();
        const sorted = data.sort((a: Product, b: Product) =>
          Number(b.id) - Number(a.id)
        );
        setProducts(sorted);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.id.includes(searchTerm)
  );

  const confirmDelete = async () => {
    if (!deleteId) return;
    setIsDeleting(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${deleteId}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete");

      setProducts(products.filter((p) => p.id !== deleteId));

      toast.success("Product deleted", {
        description: "The product has been removed successfully.",
        className: "bg-white/40 dark:bg-[#0f172a]/40 backdrop-blur-xl border border-emerald-300/50 dark:border-emerald-600/40 rounded-2xl shadow-lg text-emerald-700 dark:text-emerald-300",
      });

    } catch (error) {
      toast.error("Delete failed", {
        description: "The product could not be removed.",
        className: "bg-white/40 dark:bg-[#0f172a]/40 backdrop-blur-xl border border-red-300/50 dark:border-red-600/40 rounded-2xl shadow-lg text-red-700 dark:text-red-300",
      });
    } finally {
      setIsDeleting(false);
      setDeleteId(null);
    }
  };

  return (
    <div className="relative space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <ProductHeader />
      <ProductToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        totalCount={products.length}
      />
      <ProductTable
        products={filteredProducts}
        loading={loading}
        onDelete={(id) => setDeleteId(id)}
      />
      <DeleteProduct
        isOpen={deleteId !== null}
        onClose={() => setDeleteId(null)}
        onConfirm={confirmDelete}
        loading={isDeleting}
      />
    </div>
  );
}