"use client";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  CirclePlus,
  ClipboardCheck,
  Globe2,
  Home,
  Languages,
  LayoutDashboard,
  LockKeyhole,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

const asset = (name: string) => `/images/andormera/${name}`;

type IconCard = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const featureCards: IconCard[] = [
  {
    title: "Free Property Listing",
    text: "List your apartment, house, or WG for free. No hidden fees.",
    icon: CirclePlus,
  },
  {
    title: "AI Multilingual Ads",
    text: "Write once and show your ad in English, German, and Persian.",
    icon: Languages,
  },
  {
    title: "Verified Listings",
    text: "Every listing is reviewed before it goes live.",
    icon: ShieldCheck,
  },
  {
    title: "Easy Admin Panel",
    text: "Manage properties, messages, and inquiries in one place.",
    icon: LayoutDashboard,
  },
];

const steps = [
  {
    title: "Add your property",
    text: "Fill details, upload photos, and publish for free.",
    icon: ClipboardCheck,
  },
  {
    title: "We review it",
    text: "Our team checks the listing quality and safety.",
    icon: ShieldCheck,
  },
  {
    title: "Shown in 3 languages",
    text: "Your ad appears in English, German, and Persian.",
    icon: Languages,
  },
  {
    title: "Receive inquiries",
    text: "Tenants contact you directly through the platform.",
    icon: MessageCircle,
  },
];

const ownerItems = [
  "Reach more tenants with 3-language exposure",
  "Verified platform for more trust",
  "Good for private owners and agents",
];

const seekerItems = [
  "Browse apartments, houses, and WG listings",
  "Contact agents directly",
  "Safe, transparent, and multilingual",
];

function Logo() {
  return (
    <Link
      href="http://localhost:3000/projects/andormera"
      className="flex items-center gap-2"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-700/15 sm:h-9 sm:w-9">
        <Home className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>

      <div className="leading-tight">
        <p className="text-sm font-black text-slate-950 sm:text-lg">
          Andormera
        </p>
        <p className="text-[9px] font-bold text-slate-500 sm:text-xs">
          HomeRent
        </p>
      </div>
    </Link>
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-extrabold transition sm:rounded-2xl sm:px-6 sm:py-3.5 sm:text-sm";

  if (variant === "secondary") {
    return (
      <Link
        href={href}
        className={`${base} border border-teal-700/25 bg-white text-teal-900 shadow-sm hover:border-teal-700/50 hover:bg-teal-50 ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} bg-[#d88409] text-white shadow-xl shadow-amber-700/20 hover:bg-[#be7307] ${className}`}
    >
      {children}
    </Link>
  );
}

function Badge({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1.5 text-[10px] font-extrabold text-teal-800 ring-1 ring-teal-100 sm:gap-2 sm:text-xs">
      {icon}
      {children}
    </div>
  );
}

function FeatureCard({ item }: { item: IconCard }) {
  const Icon = item.icon;

  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)] backdrop-blur sm:rounded-3xl sm:p-6">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 sm:mb-4 sm:h-12 sm:w-12">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>

      <h3 className="text-sm font-black text-slate-950 sm:text-base">
        {item.title}
      </h3>

      <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">
        {item.text}
      </p>
    </div>
  );
}

function StepItem({
  index,
  title,
  text,
  icon: Icon,
}: {
  index: number;
  title: string;
  text: string;
  icon: LucideIcon;
}) {
  return (
    <div className="relative rounded-2xl border border-slate-200/70 bg-white/75 p-4 text-left shadow-sm md:border-0 md:bg-transparent md:p-0 md:text-center md:shadow-none">
      <div className="flex items-center gap-3 md:block">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-teal-700 shadow-sm sm:h-14 sm:w-14 md:mx-auto">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>

        <div className="min-w-0">
          <div className="mb-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-800 text-[9px] font-black text-white md:mx-auto md:-mt-2 md:flex">
            {index}
          </div>

          <h3 className="text-sm font-black text-slate-950 sm:text-base">
            {title}
          </h3>
        </div>
      </div>

      <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 md:mx-auto md:max-w-[210px]">
        {text}
      </p>
    </div>
  );
}

function CheckLine({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-xs font-semibold leading-5 text-slate-700 sm:text-sm sm:leading-6">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
        <Check className="h-3.5 w-3.5" />
      </span>
      {children}
    </li>
  );
}

export default function AndormeraLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf6ee] text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(236,176,83,0.15),transparent_35%),radial-gradient(circle_at_top_right,rgba(13,116,116,0.10),transparent_30%)]" />

      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/80 bg-white/90 px-3 py-2.5 shadow-[0_12px_35px_rgba(15,23,42,0.08)] backdrop-blur sm:rounded-3xl sm:px-6 sm:py-3">
          <Logo />

          <nav className="hidden items-center gap-8 text-sm font-extrabold text-slate-800 lg:flex">
            <Link href="#home" className="text-teal-800">
              Home
            </Link>
            <Link href="#listings" className="hover:text-teal-800">
              Listings
            </Link>
            <Link href="#how" className="hover:text-teal-800">
              How it Works
            </Link>
            <Link href="#features" className="hover:text-teal-800">
              Features
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="https://www.andormera.com/en/submit-property"
              className="hidden items-center gap-2 rounded-xl bg-[#d88409] px-4 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-amber-700/20 transition hover:bg-[#be7307] sm:flex"
            >
              <CirclePlus className="h-4 w-4" />
              Add Property
            </Link>

            <Link
              href="https://www.andormera.com/en/login"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-[11px] font-extrabold text-slate-800 shadow-sm sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
            >
              <UserRound className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Login
            </Link>
          </div>
        </div>
      </header>

      <section
        id="home"
        className="px-4 pb-6 pt-6 sm:px-5 sm:pb-12 sm:pt-10 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div className="relative z-10 text-center lg:text-left">
            <Badge icon={<BadgeCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}>
              Free to list. Trusted by thousands.
            </Badge>

            <h1 className="mx-auto mt-4 max-w-2xl text-[2rem] font-black leading-[1.07] tracking-tight text-slate-950 sm:mt-5 sm:text-5xl lg:mx-0 lg:text-6xl xl:text-7xl">
              List Your Property. Reach More People.
              <span className="block text-teal-800">In 3 Languages.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-[13px] leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 lg:mx-0">
              Publish your apartment, house, or WG for free. Every listing is
              reviewed before it goes live. Your ads are shown in English,
              German, and Persian with AI-powered multilingual presentation.
            </p>

            <div className="mt-5 flex flex-col justify-center gap-2.5 sm:mt-7 sm:flex-row sm:gap-3 lg:justify-start">
              <ButtonLink
                href="https://www.andormera.com/en/submit-property"
                className="w-full sm:w-auto"
              >
                <CirclePlus className="h-4 w-4" />
                Add Property for Free
              </ButtonLink>

              <ButtonLink
                href="https://www.andormera.com/de/my-listings"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                <Search className="h-4 w-4" />
                Browse Listings
              </ButtonLink>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-6 lg:justify-start">
              {["Free listing", "Verified before publish", "EN / DE / FA"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-amber-200 bg-white/80 px-3 py-1.5 text-[10px] font-extrabold text-slate-700 shadow-sm sm:px-3 sm:py-2 sm:text-xs"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[410px] sm:max-w-[650px] lg:max-w-[720px]">
            <div className="absolute -right-8 top-6 h-24 w-24 rounded-full bg-teal-600/20 blur-2xl sm:h-32 sm:w-32" />
            <div className="absolute -left-6 bottom-8 h-20 w-20 rounded-full bg-amber-300/25 blur-2xl sm:h-28 sm:w-28" />

            <Image
              src={asset("device-collage.png")}
              alt="Andormera HomeRent platform preview"
              width={1100}
              height={780}
              priority
              className="relative mx-auto h-auto w-[92%] drop-shadow-[0_20px_42px_rgba(15,23,42,0.12)] sm:w-full sm:drop-shadow-[0_28px_60px_rgba(15,23,42,0.13)]"
            />
          </div>
        </div>
      </section>

      <section id="features" className="px-4 pb-6 sm:px-5 sm:pb-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {featureCards.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section id="how" className="px-4 pb-6 sm:px-5 sm:pb-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-xl font-black text-slate-950 sm:text-4xl">
              How it works
            </h2>

            <p className="mt-1.5 text-xs text-slate-600 sm:mt-2 sm:text-base">
              From listing to inquiries in a few simple steps.
            </p>
          </div>

          <div className="relative mt-5 grid gap-3 sm:mt-10 sm:gap-6 md:grid-cols-4">
            <div className="absolute left-[13%] right-[13%] top-8 hidden border-t border-dashed border-slate-300 md:block" />

            {steps.map((step, index) => (
              <StepItem
                key={step.title}
                index={index + 1}
                title={step.title}
                text={step.text}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-6 sm:px-5 sm:pb-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-5 rounded-2xl border border-white/90 bg-white/65 p-4 shadow-[0_16px_45px_rgba(15,23,42,0.07)] sm:rounded-3xl sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
          <div>
            <Badge icon={<Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}>
              Powerful & Intuitive
            </Badge>

            <h2 className="mt-4 max-w-md text-2xl font-black leading-tight text-slate-950 sm:mt-5 sm:text-5xl">
              Built for simple property management
            </h2>

            <p className="mt-3 max-w-lg text-xs leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              Manage your listings, track inquiries, and stay in control from
              one beautiful and easy-to-use dashboard.
            </p>

            <ul className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3">
              {[
                "Add, edit, and publish properties",
                "Manage inquiries and messages",
                "Track performance and activity",
                "Stay organized and save time",
              ].map((item) => (
                <CheckLine key={item}>{item}</CheckLine>
              ))}
            </ul>

            <div className="mt-5 sm:mt-7">
              <ButtonLink
                href="https://www.andormera.com/admin"
                className="w-full sm:w-auto"
              >
                Go to Dashboard
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <Image
              src={asset("admin-dashboard.png")}
              alt="Andormera admin dashboard"
              width={1150}
              height={820}
              className="h-auto w-full rounded-2xl drop-shadow-[0_18px_38px_rgba(15,23,42,0.11)] sm:drop-shadow-[0_24px_50px_rgba(15,23,42,0.13)]"
            />

            <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
              {[
                "home-browser.png",
                "property-detail.png",
                "admin-create.png",
              ].map((name) => (
                <div
                  key={name}
                  className="overflow-hidden rounded-xl border border-white bg-white p-1 shadow-sm sm:rounded-2xl"
                >
                  <Image
                    src={asset(name)}
                    alt="Andormera preview"
                    width={360}
                    height={220}
                    className="h-14 w-full rounded-lg object-cover sm:h-28 sm:rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="listings" className="px-4 pb-6 sm:px-5 sm:pb-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-2 lg:gap-6">
          <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)] sm:rounded-3xl sm:p-8">
            <div className="grid gap-4 sm:grid-cols-[105px_1fr] sm:items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 sm:h-28 sm:w-28">
                <Building2 className="h-9 w-9 sm:h-12 sm:w-12" />
              </div>

              <div>
                <h3 className="text-xl font-black text-teal-900 sm:text-2xl">
                  For Property Owners
                </h3>

                <p className="mt-1.5 text-xs font-semibold text-slate-700 sm:mt-2 sm:text-sm">
                  Publish your apartment, house, or WG for free.
                </p>

                <ul className="mt-3 space-y-2 sm:mt-4">
                  {ownerItems.map((item) => (
                    <CheckLine key={item}>{item}</CheckLine>
                  ))}
                </ul>

                <div className="mt-4 sm:mt-5">
                  <ButtonLink
                    href="https://www.andormera.com/en/submit-property"
                    className="w-full sm:w-auto"
                  >
                    Add Property for Free
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)] sm:rounded-3xl sm:p-8">
            <div className="grid gap-4 sm:grid-cols-[105px_1fr] sm:items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sky-100 text-sky-700 sm:h-28 sm:w-28">
                <UserRound className="h-9 w-9 sm:h-12 sm:w-12" />
              </div>

              <div>
                <h3 className="text-xl font-black text-teal-900 sm:text-2xl">
                  For Home Seekers
                </h3>

                <p className="mt-1.5 text-xs font-semibold text-slate-700 sm:mt-2 sm:text-sm">
                  Find verified homes in your language.
                </p>

                <ul className="mt-3 space-y-2 sm:mt-4">
                  {seekerItems.map((item) => (
                    <CheckLine key={item}>{item}</CheckLine>
                  ))}
                </ul>

                <div className="mt-4 sm:mt-5">
                  <ButtonLink
                    href="https://www.andormera.com/de/my-listings"
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    Browse Verified Listings
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-6 sm:px-5 sm:pb-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-4 rounded-2xl bg-gradient-to-r from-teal-950 to-teal-700 p-5 text-white shadow-[0_18px_55px_rgba(15,23,42,0.16)] sm:rounded-3xl sm:p-8 lg:grid-cols-[1fr_auto] lg:p-10">
          <div>
            <h2 className="text-xl font-black sm:text-4xl">
              Ready to publish your property?
            </h2>

            <p className="mt-2 text-xs font-medium leading-5 text-teal-50 sm:mt-3 sm:text-base">
              Join owners who list for free and find tenants faster.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
            <ButtonLink
              href="https://www.andormera.com/en/submit-property"
              className="w-full sm:w-auto"
            >
              <CirclePlus className="h-4 w-4" />
              Add Property for Free
            </ButtonLink>

            <div className="flex items-center justify-center gap-2 text-[11px] font-bold text-teal-50 sm:text-sm">
              <LockKeyhole className="h-4 w-4" />
              Free · Verified · 3 Languages
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/60 px-4 py-6 sm:px-5 sm:py-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 sm:gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Logo />

            <p className="mt-3 max-w-sm text-xs leading-5 text-slate-600 sm:mt-4 sm:text-sm sm:leading-6">
              The smart way to list and find homes. Free listings, verified
              quality, and multilingual presentation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-black text-slate-950">Quick Links</h4>
            <div className="mt-3 space-y-1.5 text-xs text-slate-600 sm:mt-4 sm:space-y-2 sm:text-sm">
              <p>Listings</p>
              <p>How it Works</p>
              <p>Features</p>
              <p>FAQ</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black text-slate-950">For Owners</h4>
            <div className="mt-3 space-y-1.5 text-xs text-slate-600 sm:mt-4 sm:space-y-2 sm:text-sm">
              <p>Add Property</p>
              <p>Manage Listings</p>
              <p>How Verification Works</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black text-slate-950">For Seekers</h4>
            <div className="mt-3 space-y-1.5 text-xs text-slate-600 sm:mt-4 sm:space-y-2 sm:text-sm">
              <p>Browse Listings</p>
              <p>How to Rent</p>
              <p>Safety & Trust</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black text-slate-950">Languages</h4>
            <div className="mt-3 space-y-1.5 text-xs text-slate-600 sm:mt-4 sm:space-y-2 sm:text-sm">
              <p>English</p>
              <p>Deutsch</p>
              <p>فارسی</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 flex max-w-7xl flex-col justify-between gap-3 border-t border-slate-200 pt-4 text-[11px] text-slate-500 sm:mt-8 sm:flex-row sm:pt-5 sm:text-xs">
          <p>© 2025 Andormera / HomeRent. All rights reserved.</p>

          <div className="flex gap-4 sm:gap-5">
            <Link href="#">Terms of Use</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Imprint</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
