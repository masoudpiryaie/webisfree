import Link from "next/link";
import Button from "@mui/material/Button";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
// import { profile } from "console";
import { experiences } from "@/constants/experiences";
import { skillGroups } from "@/constants/skills";
import {
  profile,
  education,
  languages,
  recentProject,
} from "@/constants/profileData";
// import {
//   education,
//   experiences,
//   languages,
//   profile,
//   recentProject,
//   skillGroups,
// } from "@/constants/portfolioData";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Mobile top bar */}
      <div className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)]/90 px-5 py-4 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between">
          <Link href="/portfolio#home" className="text-xl font-bold">
            My Portfolio<span className="text-[var(--accent)]">.</span>
          </Link>

          <Link
            href="/project/clubmate"
            className="rounded-lg border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-secondary)]"
          >
            Clubmate
          </Link>
        </div>
      </div>

      {/* Banner */}
      <section id="home" className="relative h-[250px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-fuchsia-400 to-purple-800" />
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_18%_70%,rgba(34,211,238,0.95),transparent_30%),radial-gradient(circle_at_55%_20%,rgba(255,255,255,0.65),transparent_20%),radial-gradient(circle_at_82%_45%,rgba(126,34,206,0.95),transparent_30%)]" />
      </section>

      <div className="mx-auto max-w-7xl px-5 pb-10 md:px-8">
        {/* Profile header */}
        <section className="-mt-14 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-end">
            <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-zinc-800">
              <img
                src="/images/portfolio/profile.png"
                alt="profile picture"
                className="object-cover"
              />
            </div>

            <div className="pb-3">
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-2 text-xl text-[var(--text-secondary)]">
                {profile.role}
              </p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {profile.location}
              </p>
            </div>
          </div>

          <div className="flex items-end lg:justify-end">
            <Button
              variant="contained"
              endIcon={<DownloadOutlinedIcon />}
              sx={{
                px: 3,
                py: 1.7,
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 700,
                backgroundColor: "#18d4c6",
                color: "#041316",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#12c7bb",
                  boxShadow: "none",
                },
              }}
            >
              Download Resume
            </Button>
          </div>
        </section>

        {/* Content */}
        <section className="mt-10 grid gap-10 lg:grid-cols-[1fr_370px]">
          {/* Left column */}
          <div>
            <section
              id="about"
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold">About me</h2>

              <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
                {profile.summary}
              </p>

              <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                {profile.secondSummary}
              </p>

              <Link
                href="#contact"
                className="mt-5 inline-block font-medium text-[var(--accent)] hover:opacity-80"
              >
                Contact me...
              </Link>
            </section>

            <section id="experience" className="mt-8">
              <div className="mb-5 flex items-center gap-3">
                <BusinessCenterOutlinedIcon sx={{ color: "var(--accent)" }} />
                <h2 className="text-2xl font-bold">Work Experience</h2>
              </div>

              <div className="space-y-5">
                {experiences.map((experience) => (
                  <article
                    key={`${experience.company}-${experience.date}`}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold">
                          {experience.title}
                        </h3>
                        <p className="mt-1 font-semibold text-[var(--accent)]">
                          {experience.company}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-[var(--chip-bg)] px-3 py-1 text-xs text-[var(--text-secondary)]">
                          {experience.date}
                        </span>
                        <span className="rounded-full bg-[var(--chip-bg)] px-3 py-1 text-xs text-[var(--text-secondary)]">
                          {experience.type}
                        </span>
                      </div>
                    </div>

                    <ul className="mt-5 list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
                      {experience.points.map((point) => (
                        <li key={point} className="leading-7">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Right column */}
          <aside className="space-y-8">
            <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <h2 className="text-xl font-bold">I write;</h2>

              <div className="mt-5 space-y-5">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <p className="mb-3 text-sm font-semibold text-[var(--text-primary)]">
                      {group.title}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-[var(--chip-bg)] px-3 py-2 text-sm text-[var(--text-secondary)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="projects"
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold">Most recent project</h2>
                <Link
                  href={recentProject.href}
                  className="text-sm font-medium text-[var(--accent)] hover:opacity-80"
                >
                  See project
                </Link>
              </div>

              <div className="rounded-xl bg-[var(--card-bg)] p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-bold">{recentProject.title}</h3>
                  <GitHubIcon sx={{ color: "var(--accent)" }} />
                </div>

                <p className="text-sm leading-7 text-[var(--text-secondary)]">
                  {recentProject.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {recentProject.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded bg-[var(--chip-bg)] px-3 py-2 text-xs text-[var(--text-secondary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="mb-5 flex items-center gap-2">
                <SchoolOutlinedIcon sx={{ color: "var(--accent)" }} />
                <h2 className="text-xl font-bold">Education</h2>
              </div>

              <div className="space-y-5">
                {education.map((item) => (
                  <div key={item.degree}>
                    <h3 className="font-bold">{item.degree}</h3>
                    <p className="mt-1 text-sm text-[var(--accent)]">
                      {item.school}
                    </p>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                      {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="mb-5 flex items-center gap-2">
                <LanguageOutlinedIcon sx={{ color: "var(--accent)" }} />
                <h2 className="text-xl font-bold">Languages</h2>
              </div>

              <div className="space-y-2">
                {languages.map((item) => (
                  <p
                    key={item}
                    className="text-sm text-[var(--text-secondary)]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </section>

            <section
              id="contact"
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <div className="mb-5 flex items-center gap-2">
                <MailOutlineOutlinedIcon sx={{ color: "var(--accent)" }} />
                <h2 className="text-xl font-bold">Contact</h2>
              </div>

              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p>{profile.email}</p>
                <p>{profile.phone}</p>
                <p>{profile.location}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={profile.linkedin}
                  target="_blank"
                  className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--sidebar-hover)]"
                >
                  LinkedIn
                </Link>

                <Link
                  href={profile.github}
                  target="_blank"
                  className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--sidebar-hover)]"
                >
                  GitHub
                </Link>

                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[#031617]"
                >
                  Email
                </a>
              </div>
            </section>
          </aside>
        </section>

        <footer className="mt-14 pb-6 text-center text-sm text-[var(--text-secondary)]">
          ©2026 Webisfree. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
