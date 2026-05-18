import Link from "next/link";
import Button from "@mui/material/Button";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { experiences } from "@/constants/experiences";
import { skillGroups } from "@/constants/skills";
import { profile, education, languages } from "@/constants/profileData";
import ProjectCards from "@/components/ui/ProjectCards";

const quickStats = [
  {
    value: "3",
    label: "Selected Projects",
  },
  {
    value: "AI",
    label: "Gemini Features",
  },
  {
    value: "100%",
    label: "Responsive UI",
  },
];

function SectionLabel({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-4 py-2 text-xs font-bold text-[var(--text-secondary)] shadow-sm backdrop-blur">
      {icon}
      {children}
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <div className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)]/90 px-4 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between">
          <Link href="/portfolio#home" className="text-lg font-black">
            My Portfolio<span className="text-[var(--accent)]">.</span>
          </Link>

          <Link
            href="#projects"
            className="rounded-lg border border-[var(--border)] px-3 py-2 text-xs font-semibold text-[var(--text-secondary)]"
          >
            Projects
          </Link>
        </div>
      </div>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 via-fuchsia-500/20 to-purple-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(24,212,198,0.42),transparent_28%),radial-gradient(circle_at_52%_20%,rgba(255,255,255,0.35),transparent_18%),radial-gradient(circle_at_82%_40%,rgba(126,34,206,0.42),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-14 md:px-8 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_390px]">
            <div>
              <SectionLabel
                icon={
                  <AutoAwesomeOutlinedIcon
                    sx={{ color: "var(--accent)", fontSize: 18 }}
                  />
                }
              >
                Frontend Developer Portfolio
              </SectionLabel>

              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
                Building modern web apps with clean UI and useful AI features.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                I design and build responsive web applications using Next.js,
                TypeScript, Tailwind CSS, Zustand, and AI integrations. My focus
                is creating interfaces that are clear, practical, and ready for
                real users.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-6 py-3.5 text-sm font-black text-[#031617] transition hover:opacity-90"
                >
                  View Projects
                  <OpenInNewOutlinedIcon fontSize="small" />
                </Link>

                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 px-6 py-3.5 text-sm font-black text-[var(--text-primary)] backdrop-blur transition hover:bg-[var(--sidebar-hover)]"
                >
                  Contact Me
                  <MailOutlineOutlinedIcon fontSize="small" />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="absolute -inset-4 rounded-[2rem] bg-[var(--accent)]/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_25px_80px_rgba(15,23,42,0.18)]">
                <div className="relative mx-auto h-[220px] w-[220px] overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-zinc-800">
                  <img
                    src="/images/portfolio/profile.png"
                    alt="profile picture"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-5 text-center">
                  <h2 className="text-3xl font-black tracking-tight">
                    {profile.name}
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-[var(--accent)]">
                    {profile.role}
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {profile.location}
                  </p>
                </div>

                <div className="mt-6">
                  <Button
                    fullWidth
                    href="/files/resume/Masoud_Piryaie_CV.pdf"
                    download
                    variant="contained"
                    endIcon={<DownloadOutlinedIcon />}
                    sx={{
                      px: 3,
                      py: 1.5,
                      borderRadius: "14px",
                      textTransform: "none",
                      fontWeight: 800,
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-5 pb-10 md:px-8">
        <section
          id="about"
          className="-mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionLabel
                icon={
                  <CodeOutlinedIcon
                    sx={{ color: "var(--accent)", fontSize: 18 }}
                  />
                }
              >
                About me
              </SectionLabel>

              <h2 className="mt-5 text-2xl font-black tracking-tight md:text-3xl">
                I turn ideas into structured and responsive products.
              </h2>
            </div>

            <div>
              <p className="mt-4   text-sm leading-8 text-[var(--text-primary)] md:text-lg">
                {profile.summary}
              </p>

              <p className="mt-4   text-sm leading-8 text-[var(--text-primary)] md:text-lg">
                {profile.secondSummary}
              </p>

              <Link
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 font-bold text-[var(--accent)] hover:opacity-80"
              >
                Contact me
                <OpenInNewOutlinedIcon fontSize="small" />
              </Link>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-14">
          <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel
                icon={
                  <AutoAwesomeOutlinedIcon
                    sx={{ color: "var(--accent)", fontSize: 18 }}
                  />
                }
              >
                Selected Projects
              </SectionLabel>

              <h2 className="mt-5 text-2xl font-black max-w-2xl  tracking-tight md:text-3xl">
                Projects
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                These projects show my work in frontend development, responsive
                layouts, state management, and AI-powered user flows.
              </p>
            </div>
          </div>

          <ProjectCards />
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_370px]">
          <div>
            <section id="experience">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--chip-bg)] text-[var(--accent)]">
                  <BusinessCenterOutlinedIcon />
                </div>
                <div>
                  <h2 className="mt-5 text-2xl font-black max-w-2xl  tracking-tight md:text-3xl">
                    Work Experience
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Practical experience and responsibilities.
                  </p>
                </div>
              </div>

              <div className="relative space-y-5">
                {experiences.map((experience) => (
                  <article
                    key={`${experience.company}-${experience.date}`}
                    className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition hover:shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-black">
                          {experience.title}
                        </h3>
                        <p className="mt-1 font-bold text-[var(--accent)]">
                          {experience.company}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-[var(--chip-bg)] px-3 py-1 text-xs font-semibold text-[var(--text-secondary)]">
                          {experience.date}
                        </span>
                        <span className="rounded-full bg-[var(--chip-bg)] px-3 py-1 text-xs font-semibold text-[var(--text-secondary)]">
                          {experience.type}
                        </span>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-3">
                      {experience.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <CheckCircleOutlineOutlinedIcon
                            sx={{
                              color: "var(--accent)",
                              fontSize: 18,
                              mt: "3px",
                              flexShrink: 0,
                            }}
                          />
                          <span className="leading-7 text-[var(--text-secondary)]">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--chip-bg)] text-[var(--accent)]">
                  <DevicesOutlinedIcon />
                </div>
                <div>
                  <h2 className="text-xl font-black">Technical Toolkit</h2>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Tools and technologies I use.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <p className="mb-3 text-sm font-black text-[var(--text-primary)]">
                      {group.title}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] px-3 py-2 text-xs font-semibold text-[var(--text-secondary)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--chip-bg)] text-[var(--accent)]">
                  <SchoolOutlinedIcon />
                </div>
                <h2 className="text-xl font-black">Education</h2>
              </div>

              <div className="space-y-5">
                {education.map((item) => (
                  <div
                    key={item.degree}
                    className="rounded-2xl bg-[var(--card-bg)] p-4"
                  >
                    <h3 className="font-black">{item.degree}</h3>
                    <p className="mt-1 text-sm font-semibold text-[var(--accent)]">
                      {item.school}
                    </p>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                      {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--chip-bg)] text-[var(--accent)]">
                  <LanguageOutlinedIcon />
                </div>
                <h2 className="text-xl font-black">Languages</h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {languages.map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] px-3 py-2 text-sm font-semibold text-[var(--text-secondary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section
              id="contact"
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--chip-bg)] text-[var(--accent)]">
                  <MailOutlineOutlinedIcon />
                </div>
                <h2 className="text-xl font-black">Contact</h2>
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
                  className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--sidebar-hover)]"
                >
                  LinkedIn
                </Link>

                <Link
                  href={profile.github}
                  target="_blank"
                  className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--sidebar-hover)]"
                >
                  GitHub
                </Link>

                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-black text-[#031617] transition hover:opacity-90"
                >
                  Email
                </a>
              </div>
            </section>
          </aside>
        </section>

        <footer className="mt-14 border-t border-[var(--border)] py-6 text-center text-sm text-[var(--text-secondary)]">
          ©2026 Webisfree. All Rights Reserved.
        </footer>
      </main>
    </div>
  );
}
