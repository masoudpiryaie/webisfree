import Typography from "@mui/material/Typography";

export default function AboutSection() {
  return (
    <section id="about" className="mt-10">
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
        About me
      </Typography>

      <Typography
        color="text.secondary"
        sx={{
          lineHeight: 1.9,
          fontSize: "1.05rem",
          mb: 3,
        }}
      >
        Frontend Engineer with 5+ years of experience building scalable,
        TypeScript-first applications with React and Next.js. Deep experience in
        component architecture, performance optimization, API integration, and
        maintainable frontend systems.
      </Typography>

      <Typography
        color="text.secondary"
        sx={{
          lineHeight: 1.9,
          fontSize: "1.05rem",
        }}
      >
        Currently focused on building clean UI systems, modern web experiences,
        and production-grade frontend architecture with Next.js, MUI, Tailwind,
        and React Query.
      </Typography>

      <button className="mt-4 text-cyan-400 transition hover:opacity-80">
        Read more...
      </button>
    </section>
  );
}
