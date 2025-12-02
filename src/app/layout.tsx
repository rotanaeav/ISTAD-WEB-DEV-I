import type { Metadata } from "next";
import { Inter, Kantumruy_Pro } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });
const kantumruy = Kantumruy_Pro({
  subsets: ["khmer", "latin"],
  variable: "--font-kantumruy",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://product-verify-web.rotana-dev.online'), 
  keywords: ["product verification", "anti-counterfeit", "QR code scanner", 
   "authenticity check", "ISTAD", "blockchain verification"],
  authors: [{ name: "ISTAD Team", url: "https://istad.co" }],
  creator: "ISTAD, Rotana Eav, Keo MengLong, Phann Monika, Prum Sakkda, Mot Na",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://product-verify-web.rotana-dev.online",
    title: "Product Verify - Trust What You Buy",
    description: "Instantly verify product authenticity with our advanced QR tracking system.",
    siteName: "Product Verify",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Product Verify Dashboard Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Product Verify - Secure Authenticity",
    description: "Stop fakes. Verify products instantly with secure QR technology.",
    images: ["/og-image.png"], 
    creator: "ISTAD, Rotana Eav, Keo MengLong, Phann Monika, Prum Sakkda, Mot Na",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}