export const profile = {
  name: "Masoud Piryaie",
  role: "Frontend Developer",
  location: "Berlin, Germany",
  email: "masoud.mpy@gmail.com",
  phone: "+49 157 55994405",
  linkedin: "https://www.linkedin.com/in/masoud-piryaie/",
  github: "https://github.com/masoudpiryaie/",
  summary:
    "Frontend Engineer with 5+ years of experience building scalable, TypeScript-first applications with React and Next.js. Deep expertise in component architecture, performance optimization, and API integration, with a strong track record of delivering maintainable, high-quality code in cross-functional teams.",
  secondSummary:
    "Currently completing a Master's in Data Science & AI, with practical exposure to ML pipelines and AI-driven features.",
};

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "TypeScript",
      "JavaScript",
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "UI & Styling",
    skills: ["Material UI", "Tailwind CSS", "shadcn/ui", "Sass"],
  },
  {
    title: "State & Data",
    skills: [
      "Redux",
      "Redux Toolkit",
      "Zustand",
      "React Query",
      "REST APIs",
      "Socket.IO",
    ],
  },
  {
    title: "DevOps & Tooling",
    skills: ["Docker", "Git", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Testing",
    skills: ["Jest", "React Testing Library"],
  },
];

export const experiences = [
  {
    title: "React Developer",
    company: "Pardco - GS1",
    date: "Jul 2022 - Mar 2025",
    type: "On-site, full-time",
    points: [
      "Engineered a high-traffic admin platform for 100K+ users, enabling real-time GS1 code management, advanced data visualization, and live operational tracking.",
      "Rebuilt a legacy monolithic UI with React, Material UI, Zustand, and React Query, reducing codebase size by 20%.",
      "Optimized API data fetching with React Query caching and request deduplication, cutting redundant network calls by around 40%.",
      "Developed 30+ accessible, responsive UI components with Material UI and Tailwind CSS.",
      "Implemented role-based access control and secure session handling for sensitive GS1 data.",
      "Achieved 85%+ unit test coverage using Jest and React Testing Library.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Hamiket",
    date: "Apr 2020 - Jun 2022",
    type: "On-site, full-time",
    points: [
      "Delivered a multi-panel marketplace platform for Customer, Vendor, and Support users using Next.js and React.",
      "Integrated RESTful APIs with Axios and centralized interceptors for authentication, error handling, and request standardization.",
      "Worked with UI/UX designers to translate Figma designs into responsive, pixel-perfect interfaces.",
      "Contributed to a real-time chat feature using Socket.IO.",
    ],
  },
  {
    title: "IT Manager and Webmaster",
    company: "TarisGold - Multi-Vendor Platform",
    date: "Jan 2019 - Mar 2020",
    type: "On-site, full-time",
    points: [
      "Automated live gold price synchronization via third-party API integration.",
      "Reduced manual pricing errors by more than 95%.",
      "Optimized website performance by reducing request size by 25%.",
      "Improved Lighthouse score from 65 to 90.",
    ],
  },
];

export const education = [
  {
    degree: "Master's in Data Science, AI",
    school: "GISMA University of Applied Sciences",
    date: "Apr 2025 - Apr 2026",
  },
  {
    degree: "Bachelor's in Civil Engineering",
    school: "University of Kurdistan",
    date: "Sep 2012 - Jul 2018",
  },
];

export const languages = [
  "English: Proficient",
  "German: Intermediate, B1 and in progress",
];

export const recentProject = {
  title: "Clubmate",
  href: "/projects/clubmate",
  description:
    "A modern landing page and product showcase for a nightlife-oriented social platform built with Next.js, Material UI, and Tailwind CSS.",
  stack: ["Next.js", "MUI", "Tailwind", "Landing Page"],
};
