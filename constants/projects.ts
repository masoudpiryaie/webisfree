import { Project } from "@/types/contact";

export const projects: Project[] = [
  {
    title: "ClubMate",
    label: "Nightlife Mobile App",
    image: "/images/portfolio/projects/clubmate.png",
    href: "/projects/clubmate",
    github: "#",
    accent: "from-fuchsia-500/25 via-purple-500/10 to-transparent",
    tagColor:
      "bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-500/10 dark:text-fuchsia-300",
    description:
      "A mobile-first nightlife social app concept focused on club discovery, user profiles, ticket offers, chat, and event-based interactions. The UI uses a dark visual identity with neon details to match the club atmosphere.",
    role: "full-stack",
    stack: ["Mobile UI", "Dark Theme", "Responsive Design", "Product UX"],
    highlights: [
      "Dark mobile-first interface",
      "Profile, ticket, and chat screens",
      "Strong nightlife visual identity",
    ],
  },
  {
    title: "Andormera",
    label: "AI Rental Platform",
    image: "/images/portfolio/projects/andormera.png",
    href: "/projects/andormera",
    github: "#",
    accent: "from-teal-500/25 via-emerald-500/10 to-transparent",
    tagColor: "bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300",
    description:
      "A real estate platform for apartment, house, and WG listings. It includes property publishing, listing review, multilingual listing presentation, and an admin panel for managing properties and inquiries.",
    role: "full-stack",
    stack: ["Next.js", "TypeScript", "Zustand", "Gemini AI", "Tailwind CSS"],
    highlights: [
      "AI multilingual property descriptions",
      "Admin dashboard and listing management",
      "Verified listing workflow",
    ],
  },
  {
    title: "Task AI",
    label: "AI Productivity Workspace",
    image: "/images/portfolio/projects/taskai.png",
    href: "/projects/taskAi",
    github: "#",
    accent: "from-blue-500/25 via-violet-500/10 to-transparent",
    tagColor: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
    description:
      "A calm productivity workspace for tasks, appointments, focus sessions, progress tracking, and AI email help. Gemini AI is used to support daily planning and smarter task suggestions.",
    role: "full-stack",
    stack: ["Next.js", "TypeScript", "Zustand", "Gemini AI", "Tailwind CSS"],
    highlights: [
      "AI daily planning workflow",
      "Focus mode and progress tracking",
      "Task, calendar, and email features",
    ],
  },
];
