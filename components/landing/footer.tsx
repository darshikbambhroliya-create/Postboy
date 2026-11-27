import Link from "next/link";
import { Send } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="about"
      className="border-t border-slate-800 bg-[#080D20] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <Send className="h-6 w-6 text-violet-500" />
          <span className="text-xl font-bold text-white">
            Post<span className="text-violet-500">boy</span>
          </span>
        </Link>

        <p className="text-center text-sm text-slate-500">
          © Postboy. Built for developers.
        </p>

        <div className="flex items-center gap-5">
          <Link
            href="https://github.com"
            target="_blank"
            aria-label="GitHub"
            className="text-slate-400 transition hover:text-white">
            <FaGithub size={22} />
          </Link>

          <Link
            href="#features"
            className="text-sm text-slate-400 transition hover:text-white">
            Features
          </Link>

          <Link
            href="#docs"
            className="text-sm text-slate-400 transition hover:text-white">
            Docs
          </Link>
        </div>
      </div>
    </footer>
  );
}
