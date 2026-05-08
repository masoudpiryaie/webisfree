import PortfolioSidebar from "@/components/layout/PortfolioSidebar";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <aside className="hidden w-[270px] shrink-0 border-r border-[var(--border)] bg-[var(--sidebar-bg)] lg:block fixed top-0 left-0 h-full">
        <PortfolioSidebar />
      </aside>

      <main className="min-h-screen flex-1 overflow-x-hidden lg:ml-[270px]">
        {children}
      </main>
    </div>
  );
}
