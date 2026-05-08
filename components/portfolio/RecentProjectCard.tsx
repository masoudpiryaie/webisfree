import Link from "next/link";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function RecentProjectCard() {
  return (
    <section id="projects">
      <div className="mb-4 flex items-center justify-between">
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Most recent project
        </Typography>

        <Link
          href="/project/clubmate"
          className="text-cyan-400 hover:opacity-80"
        >
          See all projects
        </Link>
      </div>

      <div className="rounded-xl bg-[var(--card-bg)] p-6">
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Clubmate
          </Typography>

          <GitHubIcon sx={{ color: "#22d3ee" }} />
        </div>

        <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
          A modern landing page and product showcase for a nightlife-oriented
          social platform built with Next.js and MUI.
        </Typography>

        <div className="flex flex-wrap gap-2">
          <span className="rounded bg-[var(--chip-bg)] px-3 py-2 text-xs text-[var(--text-secondary)]">
            Next.js
          </span>
          <span className="rounded bg-[var(--chip-bg)] px-3 py-2 text-xs text-[var(--text-secondary)]">
            MUI
          </span>
          <span className="rounded bg-[var(--chip-bg)] px-3 py-2 text-xs text-[var(--text-secondary)]">
            Tailwind
          </span>
        </div>
      </div>
    </section>
  );
}
