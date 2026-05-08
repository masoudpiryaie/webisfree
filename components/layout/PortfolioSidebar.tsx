"use client";

import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { portfolioNavLinks } from "@/constants/portfolioNavLinks";
import { useThemeMode } from "@/providers/AppProviders";

const iconMap = {
  home: <HomeOutlinedIcon fontSize="small" />,
  projects: <FolderOpenOutlinedIcon fontSize="small" />,
  about: <PersonOutlineOutlinedIcon fontSize="small" />,
  experience: <WorkOutlineOutlinedIcon fontSize="small" />,
  contact: <MailOutlineOutlinedIcon fontSize="small" />,
  github: <GitHubIcon fontSize="small" />,
};

export default function PortfolioSidebar() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <div className="flex h-screen flex-col px-6 py-8">
      <Link
        href="/portfolio#home"
        className="mb-12 text-3xl font-bold tracking-tight text-[var(--text-primary)]"
      >
        Webisfree<span className="text-[var(--accent)]">.</span>
      </Link>

      <nav className="flex flex-1 flex-col gap-2">
        {portfolioNavLinks.map((item) => {
          const content = (
            <>
              <span className="text-[var(--text-secondary)]">
                {iconMap[item.icon as keyof typeof iconMap]}
              </span>
              <span>{item.label}</span>
            </>
          );

          const className =
            "flex items-center gap-4 rounded-xl px-4 py-4 text-base font-medium text-[var(--text-secondary)] transition hover:bg-[var(--sidebar-hover)] hover:text-[var(--text-primary)]";

          if (item.external) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={className}
              >
                {content}
              </a>
            );
          }

          return (
            <Link key={item.label} href={item.href} className={className}>
              {content}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={toggleTheme}
        className="mt-6 flex items-center gap-3 rounded-xl border border-[var(--border)] px-4 py-3 text-sm font-medium text-[var(--text-secondary)] transition hover:bg-[var(--sidebar-hover)]"
      >
        {mode === "dark" ? (
          <LightModeOutlinedIcon fontSize="small" />
        ) : (
          <DarkModeOutlinedIcon fontSize="small" />
        )}
        {mode === "dark" ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
}
