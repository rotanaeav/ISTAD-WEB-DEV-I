import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { cookies } from "next/headers";
import { Product } from "@/src/lib/types";

export default async function VerifySuccessPage() {
    const uuid = (await cookies()).get("uuid")?.value;

    if (!uuid) {
        return (
            <div className="w-full h-screen flex items-center justify-center text-center p-6">
                <div className="bg-white/70 dark:bg-[#ffffff14] backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-red-300/40 dark:border-red-700/40 max-w-md">
                    <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-3">
                        Verification Expired
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        This verification link has expired. Please scan the QR code again.
                    </p>
                    <Link href="/" className="inline-block">
                        <button className="px-6 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition shadow-lg">
                            Return Home
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    const listRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`, {
        cache: "no-store",
    });

    const list = await listRes.json();

    // Find product by UUID
    const product: Product | undefined = list.find(
        (p: Product) => p.uuid === uuid
    );

    if (!product) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <p className="text-xl text-red-600">Product not found.</p>
            </div>
        );
    }

    const formattedDate = new Date(Number(product.createDate) * 1000).toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "short",
            day: "numeric",
        }
    );

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-4">

            <main className="relative z-10 w-full max-w-md mx-auto">
                <div className="p-8 md:p-10 rounded-3xl bg-white/70 dark:bg-[#ffffff14] backdrop-blur-xl text-center shadow-2xl border border-emerald-300/40 dark:border-emerald-700/40">

                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-emerald-100/70 
              dark:bg-emerald-500/20 flex items-center justify-center 
              text-emerald-600 dark:text-emerald-300 shadow-xl">
                        <ShieldCheck className="w-14 h-14" />
                    </div>

                    <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-[var(--text-main)]">
                        Verification Successful!
                    </h1>
                    <p className="text-lg text-[var(--text-muted)] mb-8">
                        This product is <strong>100% genuine</strong>.
                        <br />
                        Scan count: <strong>{product.scanCount}</strong>
                    </p>

                    <div className="text-left space-y-3 mb-10 p-5 rounded-xl 
              bg-white/60 dark:bg-slate-800/50 border border-white/70 dark:border-slate-700 shadow-lg">
                        <p className="font-semibold text-[var(--text-main)] border-b pb-2 mb-2 
                border-slate-200 dark:border-slate-700">
                            Product Details
                        </p>

                        <ul className="text-sm space-y-2 text-[var(--text-muted)]">
                            <li>
                                <strong>Status:</strong>{" "}
                                <span className="text-emerald-500 font-medium">Authentic</span>
                            </li>
                            <li>
                                <strong>Product ID:</strong> {product.productId}
                            </li>
                            <li>
                                <strong>Product Name:</strong> {product.name}
                            </li>
                            <li>
                                <strong>Description:</strong> {product.description}
                            </li>
                            <li>
                                <strong>Price:</strong> ${product.price}
                            </li>
                            <li>
                                <strong>Scan Count:</strong> {product.scanCount}
                            </li>
                            <li>
                                <strong>Create Date:</strong> {formattedDate}
                            </li>
                        </ul>
                    </div>

                    <Link href="/">
                        <button className="glass-button px-8 py-3 rounded-xl font-semibold 
              w-full text-[var(--text-main)] hover:text-blue-600 dark:hover:text-blue-300 
              flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition">
                            <ArrowLeft className="w-5 h-5" />
                            Back to Home
                        </button>
                    </Link>
                </div>
            </main>
        </div>
    );
}
