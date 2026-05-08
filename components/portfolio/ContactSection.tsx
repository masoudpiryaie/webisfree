import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ContactSection() {
  return (
    <section id="contact" className="section bg-[var(--surface)]">
      <div className="container">
        <Typography variant="h2" component="h2" mb={3}>
          Contact
        </Typography>

        <Typography color="text.secondary" lineHeight={1.8} mb={4}>
          I am open to frontend developer roles, React/Next.js projects, and
          opportunities related to modern web applications.
        </Typography>

        <div className="flex flex-wrap gap-3">
          <Button variant="contained" href="mailto:masoud.mpy@gmail.com">
            Email Me
          </Button>

          <Button
            variant="outlined"
            href="https://www.linkedin.com/in/masoud-piryaie/"
            target="_blank"
          >
            LinkedIn
          </Button>

          <Button
            variant="outlined"
            href="https://github.com/masoudpiryaie/"
            target="_blank"
          >
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
