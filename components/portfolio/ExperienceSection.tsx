import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { experiences } from "@/constants/experiences";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Typography variant="h2" component="h2" mb={5}>
          Experience
        </Typography>

        <div className="grid gap-6">
          {experiences.map((experience) => (
            <Card
              className="bg-[var(--surface)]"
              key={`${experience.company}-${experience.date}`}
            >
              <CardContent>
                <Typography variant="h5" component="h3">
                  {experience.title}
                </Typography>

                <Typography color="primary" fontWeight={600} mt={1}>
                  {experience.company}
                </Typography>

                <div className="flex flex-wrap gap-2 mt-3 mb-4">
                  <Chip label={experience.date} size="small" />
                  <Chip label={experience.type} size="small" />
                </div>

                <ul className="space-y-2">
                  {experience.points.map((point) => (
                    <li key={point}>
                      <Typography
                        color="text.secondary"
                        sx={{ lineHeight: 1.7 }}
                      >
                        {point}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
