import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center border-b border-[var(--border)] bg-[var(--background)] pt-[72px]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <Typography variant="body1" color="primary" fontWeight={600}>
            Frontend Developer
          </Typography>

          <Typography
            variant="h1"
            component="h1"
            mt={2}
            sx={{
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

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={4}>
            <Button variant="contained" href="#contact">
              Contact Me
            </Button>

            <Button variant="outlined" href="#experience">
              View Experience
            </Button>
          </Stack>
        </div>
      </div>
    </section>
  );
}
