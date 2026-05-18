import Link from "next/link";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { projects } from "@/constants/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-b border-[var(--border)] bg-[var(--surface)] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <Typography variant="h2" component="h2">
            Projects
          </Typography>

          <Typography
            color="text.secondary"
            className="flex-1"
            sx={{
              mt: 2,
              lineHeight: 1.8,
            }}
          >
            Selected projects from my professional work and personal
            development.
          </Typography>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="h-full bg-[var(--surface)] transition hover:-translate-y-1 hover:border-[var(--accent)]"
            >
              <CardContent className="flex h-full flex-col">
                <Typography variant="h5" component="h3">
                  {project.title}
                </Typography>

                <Typography sx={{ color: "primary", fontWeight: 600, mt: 1 }}>
                  {project.role}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{ mt: 2, lineHeight: 1.7 }}
                  className="flex-1"
                >
                  {project.description}
                </Typography>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((stack) => (
                    <Chip
                      key={stack}
                      label={stack}
                      size="small"
                      variant="outlined"
                      color="primary"
                    />
                  ))}
                </div>

                {project.href ? (
                  <div className="mt-6">
                    <Link
                      //   component={Link}
                      href={project.href}
                    >
                      <Button variant="contained">View Project</Button>
                    </Link>
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
