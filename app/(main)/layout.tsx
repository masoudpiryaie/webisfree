import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
// import MainFooter from "@/components/layout/MainFooter";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[72px]">{children}</main>
      <Footer />
    </>
  );
}
