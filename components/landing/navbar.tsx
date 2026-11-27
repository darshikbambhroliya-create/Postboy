import { Suspense } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import currentUser from "@/app/features/authentication/actions";
import UserButton from "@/app/features/authentication/components/User-Button";

async function AuthActions() {
  const user = await currentUser();

  if (!user) {
    return (
      <Link
        href="/sign-in"
        className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-500">
        Sign In
      </Link>
    );
  }
  //@ts-ignore
  return <UserButton user={user} />;
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080D20]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Send className="h-8 w-8 text-violet-500" />

          <span className="text-2xl font-bold tracking-tight text-white">
            Post<span className="text-violet-500">boy</span>
          </span>
        </Link>

        {/* Navigation links */}
        <div className="hidden items-center gap-10 md:flex">
          <Link
            href="#features"
            className="text-sm text-slate-300 transition hover:text-white">
            Features
          </Link>

          <Link
            href="#docs"
            className="text-sm text-slate-300 transition hover:text-white">
            Docs
          </Link>

          <Link
            href="#about"
            className="text-sm text-slate-300 transition hover:text-white">
            About
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white transition hover:text-violet-400">
            <FaGithub size={24} />
          </Link>

          <Suspense
            fallback={
              <div className="h-10 w-20 animate-pulse rounded-xl bg-slate-800" />
            }>
            <AuthActions />
          </Suspense>
        </div>
      </nav>
    </header>
  );
}
