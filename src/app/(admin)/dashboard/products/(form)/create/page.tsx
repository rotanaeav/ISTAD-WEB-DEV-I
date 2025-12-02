"use client";

import { useEffect, useState } from "react";
import QRDialog from "@/src/components/features/QRDialog";

export default function CreateProduct() {
    const [open, setOpen] = useState(false);

    const [verifyUrl, setVerifyUrl] = useState<string | null>(null);
    const [autoProductId, setAutoProductId] = useState("");

    // AUTO-GENERATE PRODUCT ID (PD-001, PD-002, ...)
    useEffect(() => {
        const fetchProductCount = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`);
                const list = await res.json();

                const nextNumber = (list.length + 1).toString().padStart(3, "0");
                setAutoProductId(`PD-${nextNumber}`);
            } catch (err) {
                console.error("Failed to fetch product list", err);
                setAutoProductId("PD-001"); // fallback
            }
        };

        fetchProductCount();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData(e.target as HTMLFormElement);

        const newProduct = {
            productId: autoProductId, // AUTO GENERATED
            name: form.get("name"),
            description: form.get("description"),
            price: form.get("price"),
            uuid: crypto.randomUUID(),
            scanCount: 0,
        };

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct),
            });

            if (!res.ok) {
                throw new Error("Failed to create product");
            }

            const data = await res.json();
            const url = `${window.location.origin}/api/verify/${data.uuid}`;
            setVerifyUrl(url);

        } catch (err) {
            console.error(err);
            alert("Error creating product. Please try again.");
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-10">
            <div className="bg-white shadow rounded-lg p-6 border border-gray-200 dark:bg-[#ffffff14] dark:border-white/20">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Create Product</h2>
                <p className="text-sm text-gray-600 dark:text-[#94a3b8]">
                    Fill in the form below.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow mt-6 rounded-lg p-8 border border-gray-200 space-y-8 dark:bg-[#ffffff14] dark:border-white/20"
            >
                <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                        Product Information
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-[#94a3b8]">
                        Basic details about your product.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 mt-6">

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium text-gray-700 dark:text-white">
                                Product ID
                            </label>
                            <input
                                type="text"
                                name="productId"
                                value={autoProductId}
                                readOnly
                                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 dark:text-white shadow-sm dark:bg-slate-950 dark:border-white/20 outline-none"
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium text-gray-700 dark:text-white">
                                Product Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 dark:text-white shadow-sm dark:bg-slate-950 dark:border-white/20 outline-none"
                                placeholder="EX: Premium Water Bottle"
                            />
                        </div>

                        <div className="sm:col-span-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-white">
                                Description
                            </label>
                            <textarea
                                name="description"
                                required
                                rows={3}
                                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 dark:text-white shadow-sm dark:bg-slate-950 dark:border-white/20 outline-none"
                                placeholder="Short product description..."
                            ></textarea>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium text-gray-700 dark:text-white">
                                Price ($)
                            </label>
                            <input
                                type="number"
                                name="price"
                                step="0.1"
                                required
                                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 dark:text-white shadow-sm dark:bg-slate-950 dark:border-white/20 outline-none"
                                placeholder="12.99"
                            />
                        </div>

                        <input type="hidden" name="scanCount" value="0" />
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={() => setOpen(true)}
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-blue-500/30 shadow-md"
                    >
                        Create Product
                    </button>
                </div>
            </form>

            {verifyUrl && <QRDialog open={open} setOpen={setOpen} verifyUrl={verifyUrl} />}

        </div>
    );
}
