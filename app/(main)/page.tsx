import Link from "next/link";
import Button from "@mui/material/Button";

export default function HomePage() {
  return (
    <section className="bg-[var(--background)] px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Webisfree
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight text-[var(--text-primary)] md:text-7xl">
            Frontend portfolio, products and learning content.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            A personal platform for my portfolio, project case studies, future
            blog posts, tutorials, podcasts and digital products.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/portfolio">
              <Button variant="contained">View Portfolio</Button>
            </Link>

            <Link href="/projects/clubmate">
              <Button variant="outlined">View Clubmate</Button>
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="rounded-2xl bg-[var(--card-bg)] p-6">
            <p className="text-sm text-[var(--text-secondary)]">
              Featured project
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[var(--text-primary)]">
              Clubmate
            </h2>

            <p className="mt-4 leading-7 text-[var(--text-secondary)]">
              A landing page concept for a nightlife and clubbing social app.
            </p>

            <Link
              href="/projects/clubmate"
              className="mt-5 inline-block font-medium text-[var(--accent)]"
            >
              Open case study →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
