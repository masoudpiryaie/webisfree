"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@mui/material/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { NavLinks } from "@/constants/navLinks";
// import { mainNavLinks } from "@/constants/mainNavLinks";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[var(--text-primary)]"
        >
          Webisfree<span className="text-[var(--accent)]">.</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {NavLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-sm font-semibold text-[var(--accent)]"
                    : "text-sm font-medium text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Button
            component={Link}
            href="/portfolio"
            variant="contained"
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              textTransform: "none",
              fontWeight: 700,
              borderRadius: "10px",
              boxShadow: "none",
            }}
          >
            Hire Me
          </Button>
        </div>
      </nav>
    </header>
  );
}
