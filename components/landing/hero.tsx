import Link from "next/link";
import { ArrowRight, BookOpen, Rocket, Sparkles } from "lucide-react";
import DashboardPreview from "./dashboard-preview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#080D20] px-6 py-20 lg:py-28">
      {/* Background effects */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Hero content */}
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            <Sparkles size={16} />
            The Modern API Client
          </div>

          <h1 className="text-5xl font-bold leading-[1.12] tracking-tight text-white sm:text-6xl xl:text-7xl">
            Build. Test. Explore.
            <br />
            With{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Postboy.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
            A powerful, beautiful API client for developers. Send requests,
            inspect responses and explore APIs with ease.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/sign-in"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-4 font-semibold text-white shadow-xl shadow-violet-600/20 transition hover:-translate-y-1 hover:bg-violet-500">
              <Rocket size={19} />
              Get Started
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-7 py-4 font-semibold text-white transition hover:border-violet-500 hover:bg-violet-500/10">
              <BookOpen size={19} />
              Explore Features
            </Link>
          </div>

          <p className="mt-7 text-sm text-slate-500">
            Built for developers. Designed for productivity.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-violet-600/10 blur-3xl" />
          <div className="relative">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
