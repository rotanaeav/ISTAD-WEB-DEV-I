"use client";

import html2canvas from "html2canvas";
import { Copy, Download } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

interface QRDialogProps {
    open: boolean;
    setOpen: (value: boolean) => void;
    verifyUrl: string;
}

export default function QRDialog({ open, setOpen, verifyUrl }: QRDialogProps) {
    if (!open) return null;

    const ACTION_BTN =
        "p-2 rounded-lg border transition " +
        "bg-gray-100 dark:bg-white/10 " +
        "border-gray-300 dark:border-white/20 " +
        "text-gray-700 dark:text-white/70 " +
        "hover:bg-gray-200 dark:hover:bg-white/20 hover:text-black dark:hover:text-white";

    const handleDownload = async () => {
        const frame = document.getElementById("qr-frame");
        if (!frame) return;

        const canvas = await html2canvas(frame, { backgroundColor: null });
        const pngUrl = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = pngUrl;
        link.download = "qr-code.png";
        link.click();
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(verifyUrl);
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            aria-modal="true"
            role="dialog"
        >
            <div
                onClick={() => setOpen(false)}
                className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
            />

            <div
                className="
          relative z-10 w-full max-w-md p-6 rounded-3xl
          bg-white dark:bg-slate-900/90
          border border-gray-200 dark:border-white/10
          shadow-xl dark:shadow-2xl
          animate-fadeIn
          text-gray-900 dark:text-white
        "
            >
                {/* Close button */}
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 dark:text-white/70 hover:text-black dark:hover:text-white transition"
                >
                    ✕
                </button>

                {/* Header */}
                <h2 className="text-xl font-semibold mb-5 flex items-center gap-3">
                    Verify Product
                    <span className="text-xs font-medium bg-blue-500 text-white mt-1 px-3 py-1 rounded-full shadow">
                        Scan
                    </span>
                </h2>

                {/* QR Section */}
                <div className="flex justify-center py-4">
                    <div
                        id="qr-frame"
                        className="
              relative w-fit p-5 rounded-2xl
              bg-white dark:bg-white/5
              border border-gray-300 dark:border-white/10
              shadow-md dark:shadow-xl
            "
                    >
                        {/* Decorative Glow Frame */}
                        <div
                            className="
                absolute inset-0 rounded-2xl  
                border-2 border-blue-400/40 dark:border-blue-500/40 
                pointer-events-none
              "
                        />

                        {/* QR Code */}
                        <div className="p-3 bg-white rounded-xl">
                            <QRCodeSVG id="qr-code-svg" value={verifyUrl} size={180} />
                        </div>
                    </div>
                </div>

                {/* URL + Copy */}
                <div className="flex items-center justify-between gap-3 pb-4">
                    <div
                        className="
              flex-1 px-4 py-2 rounded-xl
              bg-gray-100 dark:bg-white/5
              border border-gray-300 dark:border-white/10
              backdrop-blur-md
              text-gray-700 dark:text-white/80
              text-sm truncate
            "
                    >
                        {verifyUrl}
                    </div>

                    <button
                        onClick={() => navigator.clipboard.writeText(verifyUrl)}
                        className={ACTION_BTN}
                    >
                        <Copy onClick={handleCopy} className="w-4 h-4" />
                    </button>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-gray-300 dark:border-white/10 mb-6"></div>

                {/* Footer */}
                <div className="flex justify-between items-center">
                    {/* Download button */}
                    <button className={ACTION_BTN} onClick={handleDownload}>
                        <Download className="w-4 h-4" />
                    </button>

                    {/* Cancel */}
                    <button
                        onClick={() => setOpen(false)}
                        className="
              px-4 py-2 rounded-xl text-sm
              border border-gray-300 dark:border-white/20
              text-gray-600 dark:text-white/80 
              hover:bg-gray-100 dark:hover:bg-white/10 
              hover:text-gray-900 dark:hover:text-white
              transition
            "
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
