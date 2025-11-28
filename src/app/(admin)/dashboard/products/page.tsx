"use client";

import ProductHeader from "@/src/components/product/ProductHeader";
import ProductTable from "@/src/components/product/Table";
import ProductToolbar from "@/src/components/product/Toolbar";
import { Product } from "@/src/lib/types";
import { useState, useEffect } from "react";

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`);
        const data = await res.json();
        // Sort by newest first
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

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`, {
        method: 'DELETE'
      });
      setProducts(products.filter(p => p.id !== id));
    } catch (error) {
      alert("Failed to delete");
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <ProductHeader />
      <ProductToolbar
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        totalCount={products.length} 
      />
      <ProductTable
        products={filteredProducts} 
        loading={loading} 
        onDelete={handleDelete}
      />
    </div>
  );
}