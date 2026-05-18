import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CheckSquare,
  Clock3,
  GraduationCap,
  Mail,
  Play,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const asset = (name: string) => `/images/task-ai/${name}`;

const features = [
  {
    title: "Smart daily planning",
    text: "AI creates a balanced plan based on your tasks, time, and energy.",
    icon: Sparkles,
  },
  {
    title: "Tasks + appointments",
    text: "See your tasks and calendar together in one calm view.",
    icon: CalendarDays,
  },
  {
    title: "Focus tracking",
    text: "Build momentum with focus sessions and simple progress.",
    icon: BarChart3,
  },
];

const planningCards = [
  {
    title: "Smart prioritization",
    text: "Focus on what matters most.",
    icon: Sparkles,
  },
  {
    title: "Mood-aware planning",
    text: "Plan your day based on your energy.",
    icon: Check,
  },
  {
    title: "Time blocked flow",
    text: "Deep work, breaks, and space to breathe.",
    icon: Clock3,
  },
  {
    title: "Adaptive next steps",
    text: "The plan changes when your day changes.",
    icon: Zap,
  },
];

const useCases = [
  {
    title: "Managers",
    text: "Keep projects and team priorities clear.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Employees",
    text: "Stay organized and finish work calmly.",
    icon: Users,
  },
  {
    title: "Freelancers",
    text: "Manage clients, tasks, and delivery time.",
    icon: Bot,
  },
  {
    title: "University Students",
    text: "Balance classes, thesis, and personal plans.",
    icon: GraduationCap,
  },
  {
    title: "School Students",
    text: "Plan homework, study time, and activities.",
    icon: BookOpen,
  },
];

const appScreens = [
  {
    src: asset("screen-today.png"),
    title: "Today",
  },
  {
    src: asset("screen-tasks.png"),
    title: "Tasks",
  },
  {
    src: asset("screen-plan.png"),
    title: "Plan",
  },
  {
    src: asset("screen-focus.png"),
    title: "Focus",
  },
  {
    src: asset("screen-progress.png"),
    title: "Progress",
  },
  {
    src: asset("screen-email.png"),
    title: "AI Email",
  },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/20 sm:h-9 sm:w-9 sm:rounded-xl">
        <CheckSquare className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>

      <span className="text-base font-extrabold tracking-tight text-[#071943] sm:text-xl">
        Task AI
      </span>
    </Link>
  );
}

function SectionBadge({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-blue-600 shadow-sm sm:mb-4 sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
      {icon}
      {children}
    </div>
  );
}

function FloatingCard({
  className,
  icon,
  title,
}: {
  className?: string;
  icon: ReactNode;
  title: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute z-30 hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-[0_18px_55px_rgba(46,84,180,0.16)] backdrop-blur lg:flex ${className}`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <p className="max-w-[145px] text-sm font-extrabold leading-snug text-[#071943]">
        {title}
      </p>
    </div>
  );
}

function MiniPlanCard() {
  const items = [
    ["9:00", "Marketing Review", "bg-emerald-500"],
    ["11:00", "Client Call", "bg-blue-500"],
    ["1:00", "Deep Work", "bg-orange-500"],
    ["3:30", "University Lecture", "bg-violet-500"],
  ];

  return (
    <div className="w-full rounded-2xl border border-blue-100 bg-white p-4 shadow-xl shadow-blue-900/5 sm:rounded-3xl sm:p-6">
      <h3 className="text-sm font-black text-[#071943] sm:text-lg">
        Today Plan
      </h3>

      <div className="mt-3 space-y-2 sm:mt-5 sm:space-y-3">
        {items.map(([time, title, color]) => (
          <div
            key={title}
            className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-[11px] sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm"
          >
            <span className="w-9 shrink-0 font-bold text-slate-500 sm:w-10">
              {time}
            </span>
            <span className={`h-2 w-2 shrink-0 rounded-full ${color}`} />
            <span className="font-bold text-slate-800">{title}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 text-[11px] font-bold text-slate-500 sm:mt-5 sm:text-sm">
        <CalendarDays className="h-3.5 w-3.5 text-blue-600 sm:h-4 sm:w-4" />
        Synced with Google Calendar
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f8ff] text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(132,94,247,0.18),transparent_34%),radial-gradient(circle_at_top_left,rgba(65,132,255,0.12),transparent_30%)]" />

      <header className="sticky top-0 z-50 border-b border-white/70 bg-[#f5f8ff]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-5 sm:py-3.5 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 text-sm font-bold text-slate-700 lg:flex">
            <Link href="#home" className="transition hover:text-blue-600">
              Home
            </Link>
            <Link href="#features" className="transition hover:text-blue-600">
              Features
            </Link>
            <Link href="#how" className="transition hover:text-blue-600">
              How It Works
            </Link>
            <Link href="#use-cases" className="transition hover:text-blue-600">
              Use Cases
            </Link>
            <Link href="#faq" className="transition hover:text-blue-600">
              FAQ
            </Link>
          </nav>

          <Link
            href="https://helptask-ai.vercel.app/tasks"
            className="rounded-full bg-blue-600 px-3.5 py-1.5 text-[11px] font-extrabold text-white shadow-xl shadow-blue-600/20 transition hover:bg-blue-700 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Open App
          </Link>
        </div>
      </header>

      <section id="home" className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 pb-7 pt-6 sm:px-5 sm:pb-14 sm:pt-10 lg:grid-cols-[1fr_0.96fr] lg:gap-10 lg:px-8 lg:pb-20 lg:pt-16">
          <div className="relative z-20 text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[11px] font-extrabold text-slate-800 shadow-sm sm:mb-7 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-600 sm:h-4 sm:w-4" />
              Powered by Google Gemini
            </div>

            <h1 className="mx-auto max-w-[720px] text-[2rem] font-black leading-[1.08] tracking-tight text-[#071943] sm:text-5xl md:text-6xl lg:mx-0 lg:text-7xl">
              Run your day from one calm AI workspace.
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
              Manage tasks, appointments, focus sessions, and emails in one
              place. Task AI helps you plan smarter, stay consistent, and get
              things done without overwhelm.
            </p>

            <div className="mt-5 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:justify-center sm:gap-3 lg:justify-start">
              <Link
                href="https://helptask-ai.vercel.app/tasks"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-extrabold text-white shadow-2xl shadow-blue-600/25 transition hover:bg-blue-700 sm:rounded-2xl sm:px-7 sm:py-4 sm:text-base"
              >
                Try Task AI
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>

              <Link
                href="#how"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-extrabold text-slate-900 shadow-sm transition hover:border-blue-200 hover:text-blue-600 sm:rounded-2xl sm:px-7 sm:py-4 sm:text-base"
              >
                <Play className="h-4 w-4 text-blue-600 sm:h-5 sm:w-5" />
                See How It Works
              </Link>
            </div>

            <Link
              href="mailto:help@task-ai.webcl.app"
              className="mt-4 inline-flex items-center justify-center gap-1.5 text-[11px] font-extrabold text-blue-600 sm:mt-6 sm:gap-2 sm:text-sm lg:justify-start"
            >
              help@task-ai.webcl.app
              <ArrowRight className="h-3.5 w-3.5 -rotate-45 sm:h-4 sm:w-4" />
            </Link>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[390px] sm:max-w-[500px] lg:max-w-[620px]">
            <div className="absolute left-1/2 top-1/2 z-0 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/25 blur-3xl" />
            <div className="absolute left-[10%] top-[20%] z-0 h-[55%] w-[70%] rounded-full border border-white/70 bg-purple-200/20 blur-sm" />

            <FloatingCard
              className="-left-8 bottom-[30%] xl:-left-14"
              icon={<CalendarDays className="h-5 w-5" />}
              title="Google Calendar sync"
            />

            <FloatingCard
              className="-right-1 top-[21%] xl:-right-8"
              icon={<Bot className="h-5 w-5 text-violet-600" />}
              title="Mood-aware planning"
            />

            <FloatingCard
              className="-right-4 bottom-[24%] xl:-right-12"
              icon={<CheckSquare className="h-5 w-5 text-emerald-600" />}
              title="Appointments & tasks together"
            />

            <div className="relative z-20 mx-auto w-[68%] max-w-[300px] sm:w-[76%] sm:max-w-[430px] lg:w-[84%] lg:max-w-[470px]">
              <Image
                src={asset("hero-phone-hand.png")}
                alt="Task AI mobile app in hand"
                width={760}
                height={900}
                priority
                className="h-auto w-full drop-shadow-[0_22px_45px_rgba(35,72,160,0.20)] sm:drop-shadow-[0_30px_65px_rgba(35,72,160,0.22)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="px-4 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white bg-white/85 p-3 shadow-[0_14px_45px_rgba(39,77,145,0.07)] backdrop-blur sm:rounded-[2rem] sm:p-5 md:p-7">
          <div className="grid gap-2.5 sm:gap-4 lg:grid-cols-[1.05fr_repeat(3,1fr)]">
            <div className="rounded-2xl bg-gradient-to-br from-white to-blue-50/70 p-4 sm:rounded-3xl sm:p-7">
              <h2 className="max-w-xs text-lg font-black leading-tight text-[#071943] sm:text-2xl">
                Everything you need to organize your day
              </h2>
              <Sparkles className="mt-3 h-4 w-4 text-blue-500 sm:mt-5 sm:h-6 sm:w-6" />
            </div>

            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-7"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:mb-5 sm:h-12 sm:w-12 sm:rounded-2xl">
                  <item.icon className="h-4.5 w-4.5 sm:h-6 sm:w-6" />
                </div>

                <h3 className="text-sm font-black text-[#071943] sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:mt-3 sm:text-sm sm:leading-6">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="px-4 py-5 sm:px-5 sm:py-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-white bg-white/75 shadow-[0_14px_45px_rgba(39,77,145,0.07)] sm:rounded-[2rem] lg:grid-cols-[0.85fr_1.1fr_0.75fr]">
          <div className="p-5 sm:p-8 lg:p-10 xl:p-12">
            <SectionBadge
              icon={<CalendarDays className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
            >
              Google Calendar Sync
            </SectionBadge>

            <h2 className="text-2xl font-black leading-tight text-[#071943] sm:text-4xl">
              No more switching between apps.
            </h2>

            <p className="mt-3 text-xs leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              Sync with Google Calendar and see your events, tasks, and focus
              time blocks right alongside your emails. Task AI sees the big
              picture, so your day is on track.
            </p>
          </div>

          <div className="relative min-h-[185px] overflow-hidden sm:min-h-[320px] lg:min-h-full">
            <Image
              src={asset("student-study.png")}
              alt="Student using Task AI"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex items-center justify-center p-4 sm:p-6 lg:p-7">
            <MiniPlanCard />
          </div>
        </div>
      </section>

      <section className="px-4 pb-5 sm:px-5 sm:pb-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-5 rounded-2xl border border-white bg-gradient-to-br from-white via-blue-50/70 to-purple-100/70 p-5 shadow-[0_14px_45px_rgba(39,77,145,0.07)] sm:rounded-[2rem] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <SectionBadge
              icon={<Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
            >
              AI Planning
            </SectionBadge>

            <h2 className="max-w-md text-2xl font-black leading-tight text-[#071943] sm:text-4xl lg:text-5xl">
              A daily plan built by AI.
            </h2>

            <p className="mt-3 max-w-lg text-xs leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              Google Gemini looks at your tasks, calendar, and energy to create
              a balanced, realistic plan. It prioritizes what matters, fits in
              quick wins, and adapts as things change.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-4">
              {planningCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white bg-white/85 p-3 shadow-sm sm:rounded-3xl sm:p-5"
                >
                  <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:mb-3 sm:h-11 sm:w-11 sm:rounded-2xl">
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>

                  <h3 className="text-xs font-black leading-snug text-[#071943] sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-[11px] leading-4 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[330px] sm:max-w-[430px] lg:max-w-[520px]">
            <div className="absolute inset-8 rounded-full bg-violet-300/30 blur-3xl" />
            <Image
              src={asset("phone-plan.png")}
              alt="AI plan phone screen"
              width={700}
              height={950}
              className="relative mx-auto h-auto w-[64%] drop-shadow-[0_20px_45px_rgba(49,75,160,0.18)] sm:w-[74%] lg:w-[82%]"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-5 sm:px-5 sm:pb-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 rounded-2xl border border-white bg-white/80 p-4 shadow-[0_14px_45px_rgba(39,77,145,0.07)] sm:rounded-[2rem] sm:p-6 lg:grid-cols-[0.95fr_1fr] lg:p-10">
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-2.5 sm:rounded-[1.5rem] sm:p-4">
            <Image
              src={asset("screen-email.png")}
              alt="AI email screen"
              width={500}
              height={600}
              className="mx-auto h-auto w-full max-w-[260px] rounded-xl shadow-2xl shadow-blue-900/10 sm:max-w-[520px] sm:rounded-[2rem]"
            />
          </div>

          <div className="flex flex-col justify-start">
            <SectionBadge icon={<Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}>
              AI Email Help
            </SectionBadge>

            <h2 className="max-w-md text-2xl font-black mt-6 leading-tight text-[#071943] sm:text-4xl lg:text-5xl">
              Write better emails with less effort.
            </h2>

            <p className="mt-3 max-w-xl text-xs leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              Draft, improve, and rewrite with AI assistance. Save time and
              communicate smarter to stay on track.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-4">
              {[
                ["AI prompts", Sparkles],
                ["Professional tone", ShieldCheck],
                ["Follow-up reminders", Clock3],
                ["Schedule reply", CalendarDays],
              ].map(([title, Icon]) => {
                const LucideIcon = Icon as typeof Sparkles;

                return (
                  <div
                    key={title as string}
                    className="flex items-center gap-2 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm sm:gap-3 sm:rounded-3xl sm:p-5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:h-11 sm:w-11 sm:rounded-2xl">
                      <LucideIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>

                    <p className="text-xs font-black leading-snug text-[#071943] sm:text-base">
                      {title as string}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="px-4 pb-5 sm:px-5 sm:pb-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 overflow-hidden rounded-2xl border border-white bg-white/80 p-5 shadow-[0_14px_45px_rgba(39,77,145,0.07)] sm:rounded-[2rem] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <h2 className="max-w-sm text-2xl font-black leading-tight text-[#071943] sm:text-4xl">
              Built for real work and real study.
            </h2>

            <p className="mt-3 max-w-lg text-xs leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-8">
              For managers, employees, freelancers, and students at every stage
              of the day.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-4 xl:grid-cols-3">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm sm:rounded-3xl sm:p-5"
                >
                  <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:mb-4 sm:h-11 sm:w-11 sm:rounded-2xl">
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>

                  <h3 className="text-xs font-black leading-snug text-[#071943] sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-[11px] leading-4 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[210px] overflow-hidden rounded-2xl sm:min-h-[350px] sm:rounded-[1.7rem]">
            <Image
              src={asset("man-work.png")}
              alt="Man working with Task AI"
              fill
              className="object-cover"
            />

            <div className="absolute right-4 top-4 hidden w-[205px] rounded-3xl border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur sm:block">
              <h3 className="font-black text-[#071943]">Work or phone</h3>

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

      <section className="px-4 pb-5 sm:px-5 sm:pb-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 rounded-2xl border border-white bg-white/80 p-5 shadow-[0_14px_45px_rgba(39,77,145,0.07)] sm:rounded-[2rem] sm:p-8 lg:grid-cols-[0.75fr_1.25fr] lg:p-10">
          <div>
            <h2 className="max-w-sm text-2xl font-black leading-tight text-[#071943] sm:text-4xl">
              Stay focused. See your progress.
            </h2>

            <p className="mt-3 text-xs leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              Track what matters, understand what helps you stay productive, and
              keep growing with a calm progress view.
            </p>

            <div className="mt-5 space-y-2.5 sm:mt-7 sm:space-y-4">
              {[
                "Focus time tracking and insights",
                "Goals & habits",
                "Weekly summaries",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 sm:h-7 sm:w-7">
                    <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>

                  <p className="text-xs font-bold text-slate-800 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-2.5 sm:rounded-[1.5rem] sm:p-4">
              <Image
                src={asset("screen-focus.png")}
                alt="Focus session"
                width={600}
                height={850}
                className="mx-auto h-auto max-h-[310px] w-auto rounded-xl shadow-2xl shadow-blue-900/10 sm:max-h-[480px] sm:rounded-[2rem]"
              />
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-2.5 sm:rounded-[1.5rem] sm:p-4">
              <Image
                src={asset("screen-progress.png")}
                alt="Weekly progress"
                width={600}
                height={850}
                className="mx-auto h-auto max-h-[310px] w-auto rounded-xl shadow-2xl shadow-blue-900/10 sm:max-h-[480px] sm:rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-5 sm:px-5 sm:pb-8 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white bg-white/75 p-4 shadow-[0_14px_45px_rgba(39,77,145,0.07)] sm:rounded-[2rem] sm:p-6 lg:p-8">
          <div className="mb-4 text-center sm:mb-5">
            <h2 className="text-xl font-black text-[#071943] sm:text-3xl">
              App screens
            </h2>

            <p className="mt-1.5 text-xs text-slate-600 sm:mt-2 sm:text-sm">
              Planning, focus, progress, and emails in one calm workspace.
            </p>
          </div>

          <div className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 xl:grid-cols-6">
            {appScreens.map((item) => (
              <div
                key={item.src}
                className="w-[175px] shrink-0 snap-start overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-b from-white to-blue-50 p-2 shadow-sm sm:w-auto sm:rounded-[1.7rem] sm:p-3"
              >
                <Image
                  src={item.src}
                  alt={`Task AI ${item.title} screen`}
                  width={420}
                  height={720}
                  className="h-auto w-full rounded-xl sm:rounded-[1.4rem]"
                />

                <p className="py-2.5 text-center text-[11px] font-extrabold text-slate-600 sm:py-3 sm:text-xs">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-7 sm:px-5 sm:pb-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-violet-200 via-blue-100 to-purple-200 p-5 text-center shadow-[0_14px_45px_rgba(39,77,145,0.08)] sm:rounded-[2rem] sm:p-8 md:flex-row md:text-left lg:p-10">
          <div>
            <div className="mb-2 flex justify-center text-white sm:mb-3 md:justify-start">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>

            <h2 className="text-xl font-black text-[#071943] sm:text-3xl">
              Let AI turn intention into action.
            </h2>

            <p className="mt-1.5 text-xs leading-5 text-slate-700 sm:mt-2 sm:text-base sm:leading-6">
              Your calm, intelligent workspace — everything together.
            </p>
          </div>

          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:gap-4">
            <Link
              href="https://helptask-ai.vercel.app/tasks"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-extrabold text-white shadow-xl shadow-blue-600/20 transition hover:bg-blue-700 sm:rounded-2xl sm:px-7 sm:py-4 sm:text-base"
            >
              Open Task AI
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>

            <Link
              href="mailto:masoud.mpy@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white bg-white/80 px-4 py-3 text-xs font-extrabold text-blue-600 shadow-sm sm:rounded-2xl sm:px-7 sm:py-4 sm:text-base"
            >
              Visit help
              <ArrowRight className="h-4 w-4 -rotate-45 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/80 px-4 py-6 sm:px-5 sm:py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-[11px] text-slate-500 sm:text-sm md:flex-row">
          <div className="flex items-center gap-2 font-extrabold text-slate-800">
            <CheckSquare className="h-4 w-4 text-blue-600 sm:h-5 sm:w-5" />
            Task AI
          </div>

          <p>© 2026 Task AI. All rights reserved.</p>

          <div className="flex items-center gap-4 sm:gap-5">
            <Link href="#" className="transition hover:text-blue-600">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-blue-600">
              Terms
            </Link>
            <Link
              href="mailto:masoud.mpy@gmail.com"
              className="transition hover:text-blue-600"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
