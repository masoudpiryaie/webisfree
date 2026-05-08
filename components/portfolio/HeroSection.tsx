import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center border-b border-[var(--border)] bg-[var(--background)] pt-[72px]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <Typography variant="body1" color="primary" sx={{ fontWeight: 600 }}>
            Frontend Developer
          </Typography>

          <Typography
            variant="h1"
            component="h1"
            sx={{
              mt: 2,
              fontSize: {
                xs: "2.5rem",
                md: "4.5rem",
              },
              lineHeight: 1.05,
            }}
          >
            Masoud Piryaie
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mt: 3,
              maxWidth: "720px",
              lineHeight: 1.8,
            }}
          >
            Frontend Engineer with 5+ years of experience building scalable,
            TypeScript-first applications with React and Next.js. Skilled in
            component architecture, performance optimization, API integration,
            and modern frontend tooling.
          </Typography>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button variant="contained" href="#contact">
              Contact Me
            </Button>

            <Button variant="outlined" href="#experience">
              View Experience
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
