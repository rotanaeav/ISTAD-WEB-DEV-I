"use client";

import { useState } from "react";
import { QRCodeSVG} from "qrcode.react";

export default function CreateProduct() {

    const [verifyUrl, setVerifyUrl] = useState<string | null>(null);

    console.log(verifyUrl)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData(e.target as HTMLFormElement);

        const newProduct = {
            productId: form.get("productId"),
            name: form.get("name"),
            description: form.get("description"),
            price: form.get("price"),
            uuid: crypto.randomUUID(), // auto-generate
            scanCount: 0,
        };

        console.log("Sending to API:", newProduct);

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/product`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newProduct),
                }
            );

            if (!res.ok) {
                throw new Error("Failed to create product");
            }

            const data = await res.json();


            // Create verify URL for QR generation
            const url = `${window.location.origin}/api/verify/${data.uuid}`;
            setVerifyUrl(url);

            // Reset form
            // (e.target as HTMLFormElement).reset();

        } catch (err) {
            console.error(err);
            alert("Error creating product. Please try again.");
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-10">
            {/* Header */}
            <div className="bg-white shadow rounded-lg p-6 border border-gray-200 dark:bg-[#ffffff14] dark:border-white/20">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-[#ffffff]">Create Product</h2>
                <p className="text-sm text-gray-600 dark:text-[#94a3b8]">Fill in the form below.</p>
            </div>

            {/* FORM */}
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow mt-6 rounded-lg p-8 border border-gray-200 space-y-8 dark:bg-[#ffffff14] dark:border-white/20"
            >
                <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-[#ffffff]">
                        Product Information
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-[#94a3b8]">Basic details about your product.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 mt-6">
                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium text-gray-700 dark:text-[#ffffff]">
                                Product ID
                            </label>
                            <input
                                type="text"
                                name="productId"
                                required
                                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 dark:text-[#ffffff] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-950 dark:border-white/20 dark:focus:border-white/50 outline-none"
                                placeholder="EX: PROD-1001"
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium text-gray-700 dark:text-[#ffffff]">
                                Product Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 dark:text-[#ffffff] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-950 dark:border-white/20 dark:focus:border-white/50 outline-none"
                                placeholder="EX: Premium Water Bottle"
                            />
                        </div>

                        <div className="sm:col-span-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-[#ffffff]">
                                Description
                            </label>
                            <textarea
                                name="description"
                                required
                                rows={3}
                                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 dark:text-[#ffffff] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-950 dark:border-white/20 dark:focus:border-white/50 outline-none"
                                placeholder="Short product description..."
                            ></textarea>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium text-gray-700 dark:text-[#ffffff]">
                                Price ($)
                            </label>
                            <input
                                type="number"
                                name="price"
                                step="0.1"
                                required
                                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 dark:text-[#ffffff] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-950 dark:border-white/20 dark:focus:border-white/50 outline-none"
                                placeholder="12.99"
                            />
                        </div>

                        <input type="hidden" name="scanCount" value="0" />
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-500 transition shadow"
                    >
                        Create Product
                    </button>
                </div>
            </form>

            {verifyUrl && (
                <div className="mt-8 p-6 bg-white border rounded-lg shadow">
                    <h3 className="text-lg font-semibold text-gray-800">QR Code</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Buyer will scan this QR to verify authenticity.
                    </p>

                    <div className="flex justify-center py-4">
                        <QRCodeSVG value={verifyUrl} size={180} />
                    </div>

                    <div className="mt-3 p-3 bg-gray-100 border rounded text-gray-800 font-mono break-all">
                        {verifyUrl}
                    </div>
                </div>
            )}
        </div>
    );
}
