import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function EducationSection() {
  return (
    <section id="education" className="section">
      <div className="container">
        <Typography variant="h2" component="h2" sx={{ mb: 5 }}>
          Education & Languages
        </Typography>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-[var(--surface)]">
            <CardContent>
              <Typography variant="h5">
                Master&apos;s in Data Science, AI
              </Typography>
              <Typography color="primary" sx={{ mt: 1 }}>
                GISMA University of Applied Sciences
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                Apr 2025 - Apr 2026
              </Typography>
            </CardContent>
          </Card>

          <Card className="bg-[var(--surface)]">
            <CardContent>
              <Typography variant="h5">
                Bachelor&apos;s in Civil Engineering
              </Typography>
              <Typography color="primary" sx={{ mt: 1 }}>
                University of Kurdistan
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                Sep 2012 - Jul 2018
              </Typography>
            </CardContent>
          </Card>

          <Card className="bg-[var(--surface)]">
            <CardContent>
              <Typography variant="h5">Languages</Typography>
              <Typography color="text.secondary" sx={{ mt: 2 }}>
                English: Proficient
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                German: Intermediate, B1 and in progress
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
