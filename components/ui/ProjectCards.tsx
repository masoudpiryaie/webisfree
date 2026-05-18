import Link from "next/link";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { Project } from "@/types/contact";
import { projects } from "@/constants/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_22px_70px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 dark:shadow-[0_22px_70px_rgba(0,0,0,0.25)]">
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b ${project.accent}`}
      />

      <div className="relative p-4">
        <Link
          href={project.href}
          aria-label={`Open ${project.title}`}
          className="block focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--surface)] rounded-2xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-[210px] w-full object-cover transition duration-700 group-hover:scale-[1.04] sm:h-[250px] lg:h-[210px] xl:h-[240px]"
            />

            <div className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-[11px] font-black text-slate-900 shadow-sm backdrop-blur dark:border-white/10 dark:bg-black/60 dark:text-white">
              {project.label}
            </div>
          </div>
        </Link>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p
              className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold ${project.tagColor}`}
            >
              {project.role}
            </p>

            <h3 className="mt-3 text-2xl font-black tracking-tight text-[var(--text-primary)]">
              {project.title}
            </h3>
          </div>

          <Link
            href={project.href}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card-bg)] text-[var(--text-primary)] transition hover:bg-[var(--sidebar-hover)]"
            aria-label={`Open ${project.title}`}
          >
            <OpenInNewOutlinedIcon fontSize="small" />
          </Link>
        </div>

        <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
          {project.description}
        </p>

        <div className="mt-5 space-y-3">
          {project.highlights.map((item) => (
            <div key={item} className="flex gap-2.5">
              <CheckCircleOutlineOutlinedIcon
                sx={{
                  color: "var(--accent)",
                  fontSize: 18,
                  mt: "3px",
                  flexShrink: 0,
                }}
              />

              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--border)] bg-[var(--chip-bg)] px-3 py-1.5 text-[11px] font-semibold text-[var(--text-secondary)]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3 pt-6">
          <Link
            href={project.href}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-4 py-3 text-sm font-black text-[#031617] transition hover:opacity-90"
          >
            View Case Study
            <OpenInNewOutlinedIcon fontSize="small" />
          </Link>

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--text-primary)] transition hover:bg-[var(--sidebar-hover)]"
              aria-label={`${project.title} GitHub`}
            >
              <GitHubIcon fontSize="small" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-3 xl:gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
