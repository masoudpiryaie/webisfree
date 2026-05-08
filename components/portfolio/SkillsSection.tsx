import Typography from "@mui/material/Typography";

const skills = [
  "HTML, CSS & CSS Modules",
  "JavaScript",
  "React & Next.js",
  "TypeScript",
  "Styled Components",
  "Material UI",
];

export default function SkillsSection() {
  return (
    <section>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
        I write;
      </Typography>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-md bg-[var(--chip-bg)] px-4 py-3 text-sm text-[var(--text-secondary)]"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
