import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  Check,
  CheckSquare,
  Clock3,
  Mail,
  Play,
  Sparkles,
  BarChart3,
  ShieldCheck,
  Users,
  BriefcaseBusiness,
  GraduationCap,
  BookOpen,
  UserRound,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Smart daily planning",
    text: "AI creates a balanced plan based on your tasks, time, and energy.",
    icon: Sparkles,
  },
  {
    title: "Tasks + appointments in one place",
    text: "Everything together in a calming day view or calendar.",
    icon: CalendarDays,
  },
  {
    title: "Focus and progress tracking",
    text: "Build momentum, habits, and celebrate your progress.",
    icon: BarChart3,
  },
];

const planningCards = [
  {
    title: "Smart prioritization",
    text: "Focus on what moves the needle.",
    icon: Sparkles,
  },
  {
    title: "Mood-aware planning",
    text: "Plans that match how you feel and think.",
    icon: Check,
  },
  {
    title: "Time blocked flow",
    text: "Deep work, breaks, and time to breathe.",
    icon: Clock3,
  },
  {
    title: "Adaptive next steps",
    text: "Re-plans as your day evolves.",
    icon: Zap,
  },
];

const useCases = [
  {
    title: "Managers",
    text: "Lead teams and keep projects on track.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Employees",
    text: "Stay organized, meet deadlines, and focus.",
    icon: Users,
  },
  {
    title: "Freelancers",
    text: "Manage clients, timeline, and deliverables.",
    icon: Bot,
  },
  {
    title: "University Students",
    text: "Balance classes, assignments, and personal goals.",
    icon: GraduationCap,
  },
  {
    title: "School Students",
    text: "Stay on top of homework and activities.",
    icon: BookOpen,
  },
];

const appScreens = [
  "/assets/task-ai/screen-today.png",
  "/assets/task-ai/screen-tasks.png",
  "/assets/task-ai/screen-plan.png",
  "/assets/task-ai/screen-focus.png",
  "/assets/task-ai/screen-progress.png",
  "/assets/task-ai/screen-email.png",
];

function FloatingCard({
  className,
  icon,
  title,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div
      className={`hidden rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-[0_18px_50px_rgba(46,84,180,0.14)] backdrop-blur md:flex items-center gap-3 ${className}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>
      <p className="max-w-[150px] text-sm font-semibold leading-snug text-slate-900">
        {title}
      </p>
    </div>
  );
}

function SectionBadge({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-600 shadow-sm">
      {icon}
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f8ff] text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(132,94,247,0.22),transparent_38%),radial-gradient(circle_at_top_left,rgba(65,132,255,0.14),transparent_32%)]" />

      <header className="sticky top-0 z-50 border-b border-white/70 bg-[#f5f8ff]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/20">
              <CheckSquare className="h-5 w-5" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-950">
              Task AI
            </span>
          </Link>

          <nav className="hidden items-center gap-9 text-sm font-semibold text-slate-700 md:flex">
            <Link href="#home" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="#features" className="hover:text-blue-600">
              Features
            </Link>
            <Link href="#how" className="hover:text-blue-600">
              How It Works
            </Link>
            <Link href="#use-cases" className="hover:text-blue-600">
              Use Cases
            </Link>
            <Link href="#faq" className="hover:text-blue-600">
              FAQ
            </Link>
          </nav>

          <Link
            href="/app"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Open App
          </Link>
        </div>
      </header>

      <section id="home" className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-10 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:pb-20 lg:pt-16">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-slate-800 shadow-sm">
              <Sparkles className="h-4 w-4 text-blue-600" />
              Powered by Google Gemini
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-[#071943] sm:text-6xl lg:text-7xl">
              Run your day from one calm AI workspace.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Manage tasks, appointments, focus sessions, and emails in one
              place. Task AI helps you plan smarter, stay consistent, and get
              things done without overwhelm.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/app"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-2xl shadow-blue-600/25 transition hover:bg-blue-700"
              >
                Try Task AI
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="#how"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-base font-bold text-slate-900 shadow-sm transition hover:border-blue-200 hover:text-blue-600"
              >
                <Play className="h-5 w-5 text-blue-600" />
                See How It Works
              </Link>
            </div>

            <Link
              href="mailto:help@task-ai.webcl.app"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
            >
              help@task-ai.webcl.app
              <ArrowRight className="h-4 w-4 -rotate-45" />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="absolute inset-6 rounded-full bg-purple-300/30 blur-3xl" />
            <div className="absolute left-4 top-1/2 h-72 w-72 rounded-full border border-white/70 bg-purple-200/20 blur-sm" />

            <FloatingCard
              className="absolute -left-10 bottom-32"
              icon={<CalendarDays className="h-5 w-5" />}
              title="Google Calendar sync"
            />

            <FloatingCard
              className="absolute -right-6 top-28"
              icon={<Bot className="h-5 w-5 text-violet-600" />}
              title="Mood-aware planning"
            />

            <FloatingCard
              className="absolute -right-10 bottom-40"
              icon={<CheckSquare className="h-5 w-5 text-emerald-600" />}
              title="Appointments & tasks together"
            />

            <div className="relative mx-auto w-[86%] max-w-[460px]">
              <Image
                src="/assets/task-ai/hero-phone-hand.png"
                alt="Task AI mobile app in hand"
                width={760}
                height={900}
                priority
                className="h-auto w-full drop-shadow-[0_35px_70px_rgba(35,72,160,0.22)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="px-5 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white bg-white/85 p-5 shadow-[0_20px_80px_rgba(39,77,145,0.08)] backdrop-blur md:p-7">
          <div className="grid gap-4 lg:grid-cols-[1.05fr_repeat(3,1fr)]">
            <div className="rounded-3xl bg-gradient-to-br from-white to-blue-50/70 p-7">
              <h2 className="max-w-xs text-2xl font-black leading-tight text-[#071943]">
                Everything you need to organize your day
              </h2>
              <Sparkles className="mt-5 h-6 w-6 text-blue-500" />
            </div>

            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="px-5 py-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-white bg-white/75 shadow-[0_20px_80px_rgba(39,77,145,0.08)] lg:grid-cols-[0.8fr_1.1fr_0.7fr]">
          <div className="p-8 lg:p-12">
            <SectionBadge icon={<CalendarDays className="h-4 w-4" />}>
              Google Calendar Sync
            </SectionBadge>

            <h2 className="text-4xl font-black leading-tight text-[#071943]">
              No more switching between apps.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Sync with Google Calendar and see your events, tasks, and focus
              time blocks right alongside your emails. Task AI sees the big
              picture, so your day is on track.
            </p>
          </div>

          <div className="relative min-h-[280px] overflow-hidden">
            <Image
              src="/assets/task-ai/student-study.png"
              alt="Student using Task AI"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex items-center justify-center p-6 lg:p-8">
            <div className="w-full rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-900/5">
              <h3 className="text-lg font-black text-slate-950">
                Today's Plan
              </h3>

              <div className="mt-5 space-y-3">
                {[
                  ["9:00", "Marketing Review", "bg-emerald-500"],
                  ["11:00", "Client Call", "bg-blue-500"],
                  ["1:00", "Deep Work", "bg-orange-500"],
                  ["3:30", "University Lecture", "bg-violet-500"],
                ].map(([time, title, color]) => (
                  <div
                    key={title}
                    className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm"
                  >
                    <span className="font-bold text-slate-500">{time}</span>
                    <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
                    <span className="font-bold text-slate-800">{title}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm font-bold text-slate-500">
                <CalendarDays className="h-4 w-4 text-blue-600" />
                Synced with Google Calendar
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[2rem] border border-white bg-gradient-to-br from-white via-blue-50/70 to-purple-100/70 p-8 shadow-[0_20px_80px_rgba(39,77,145,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <SectionBadge icon={<Sparkles className="h-4 w-4" />}>
              AI Planning
            </SectionBadge>

            <h2 className="max-w-md text-4xl font-black leading-tight text-[#071943] sm:text-5xl">
              A daily plan built by AI.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
              Google Gemini looks at your tasks, calendar, and energy to create
              a balanced, realistic plan. It prioritizes what matters, fits in
              quick wins, and adapts as things change.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {planningCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white bg-white/85 p-5 shadow-sm"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-black text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute inset-0 rounded-full bg-violet-300/30 blur-3xl" />
            <Image
              src="/assets/task-ai/phone-plan.png"
              alt="AI plan phone screen"
              width={700}
              height={880}
              className="relative mx-auto h-auto w-[82%] drop-shadow-[0_30px_70px_rgba(49,75,160,0.2)]"
            />
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white bg-white/80 p-6 shadow-[0_20px_80px_rgba(39,77,145,0.08)] lg:grid-cols-[0.95fr_1fr] lg:p-10">
          <div className="rounded-[1.5rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4">
            <Image
              src="/assets/task-ai/screen-email.png"
              alt="AI email screen"
              width={700}
              height={950}
              className="mx-auto h-auto w-full max-w-[520px] rounded-[2rem] shadow-2xl shadow-blue-900/10"
            />
          </div>

          <div className="flex flex-col justify-center">
            <SectionBadge icon={<Mail className="h-4 w-4" />}>
              AI Email Help
            </SectionBadge>

            <h2 className="max-w-md text-4xl font-black leading-tight text-[#071943] sm:text-5xl">
              Write better emails with less effort.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Draft, improve, and rewrite with AI assistance. Save time and
              communicate smarter to stay on track.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["AI prompts", Sparkles],
                ["Professional tone", ShieldCheck],
                ["Follow-up reminders", Clock3],
                ["Schedule with your reply", CalendarDays],
              ].map(([title, Icon]) => {
                const LucideIcon = Icon as typeof Sparkles;

                return (
                  <div
                    key={title as string}
                    className="flex items-center gap-3 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <LucideIcon className="h-5 w-5" />
                    </div>
                    <p className="font-black text-slate-900">{title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="px-5 pb-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] border border-white bg-white/80 p-8 shadow-[0_20px_80px_rgba(39,77,145,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <h2 className="max-w-sm text-4xl font-black leading-tight text-[#071943]">
              Built for real work and real study.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-8 text-slate-600">
              For managers, employees, and students at every stage of your day.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-black text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[350px] overflow-hidden rounded-[1.7rem]">
            <Image
              src="/assets/task-ai/man-work.png"
              alt="Man working with Task AI"
              fill
              className="object-cover"
            />

            <div className="absolute right-5 top-5 w-[210px] rounded-3xl border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur">
              <h3 className="font-black text-slate-950">Work or phone</h3>
              <div className="mt-4 space-y-3 text-sm font-bold text-slate-600">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  Task focus
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  Smart balance
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-violet-600" />
                  Real-time updates
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white bg-white/80 p-8 shadow-[0_20px_80px_rgba(39,77,145,0.08)] lg:grid-cols-[0.75fr_1.25fr] lg:p-10">
          <div>
            <h2 className="max-w-sm text-4xl font-black leading-tight text-[#071943]">
              Stay focused. See your progress.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Track what matters, understand what helps you stay productive, and
              keep growing with a calm progress view.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Focus time tracking and insights",
                "Goals & habits",
                "Weekly summaries",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="font-bold text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4">
              <Image
                src="/assets/task-ai/screen-focus.png"
                alt="Focus session"
                width={600}
                height={850}
                className="mx-auto h-auto max-h-[480px] w-auto rounded-[2rem] shadow-2xl shadow-blue-900/10"
              />
            </div>

            <div className="rounded-[1.5rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4">
              <Image
                src="/assets/task-ai/screen-progress.png"
                alt="Weekly progress"
                width={600}
                height={850}
                className="mx-auto h-auto max-h-[480px] w-auto rounded-[2rem] shadow-2xl shadow-blue-900/10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white bg-white/75 p-6 shadow-[0_20px_80px_rgba(39,77,145,0.08)] lg:p-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {appScreens.map((src, index) => (
              <div
                key={src}
                className="overflow-hidden rounded-[1.7rem] border border-blue-100 bg-gradient-to-b from-white to-blue-50 p-3 shadow-sm"
              >
                <Image
                  src={src}
                  alt={`Task AI app screen ${index + 1}`}
                  width={420}
                  height={720}
                  className="h-auto w-full rounded-[1.4rem]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-[2rem] bg-gradient-to-r from-violet-200 via-blue-100 to-purple-200 p-8 text-center shadow-[0_20px_80px_rgba(39,77,145,0.1)] md:flex-row md:text-left lg:p-10">
          <div>
            <div className="mb-3 flex justify-center text-white md:justify-start">
              <Sparkles className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-black text-[#071943]">
              Let AI turn intention into action.
            </h2>
            <p className="mt-2 text-base text-slate-700">
              Your calm, intelligent workspace — everything together.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link
              href="/app"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-blue-600/20 hover:bg-blue-700"
            >
              Open Task AI
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="mailto:help@task-ai.webcl.app"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white bg-white/80 px-7 py-4 font-bold text-blue-600 shadow-sm"
            >
              Visit help@task-ai.webcl.app
              <ArrowRight className="h-5 w-5 -rotate-45" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/80 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <div className="flex items-center gap-2 font-bold text-slate-800">
            <CheckSquare className="h-5 w-5 text-blue-600" />
            Task AI
          </div>

          <p>© 2026 Task AI. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-blue-600">
              Privacy
            </Link>
            <Link href="#" className="hover:text-blue-600">
              Terms
            </Link>
            <Link href="#" className="hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
