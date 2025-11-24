import Footer from "@/src/components/ui/Footer";
import Navbar from "@/src/components/ui/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow pt-20 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}