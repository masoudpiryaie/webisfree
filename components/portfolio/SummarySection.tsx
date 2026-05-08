import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function SummarySection() {
  return (
    <section
      id="summary"
      className="border-b border-[var(--border)] bg-[var(--surface)] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Typography variant="h2" sx={{ mb: 5 }} component="h2">
          Summary
        </Typography>

        <Card className="bg-[var(--surface)]">
          <CardContent>
            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 1.9,
                maxWidth: "850px",
              }}
            >
              Frontend Engineer with 5+ years of experience building scalable,
              TypeScript-first applications with React and Next.js. Deep
              experience in component architecture, performance optimization,
              API integration, and maintainable frontend systems. Currently
              completing a Master&apos;s in Data Science & AI with practical
              exposure to ML pipelines and AI-driven features.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
