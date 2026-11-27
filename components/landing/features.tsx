import { Zap, FolderKanban, SlidersHorizontal, Code2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Send API requests and get responses quickly with a smooth workflow.",
  },
  {
    icon: FolderKanban,
    title: "Collections",
    description: "Organize your API requests into collections and folders.",
  },
  {
    icon: SlidersHorizontal,
    title: "Environments",
    description: "Manage development, staging and production environments.",
  },
  {
    icon: Code2,
    title: "Developer Friendly",
    description: "A clean interface designed to make API development easier.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#080D20] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Features
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Everything you need to
            <span className="text-violet-400"> work with APIs.</span>
          </h2>

          <p className="mt-5 text-slate-400">
            A simple and powerful workspace for your entire API development
            workflow.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-800 bg-[#10182B] p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-500/50">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500 group-hover:text-white">
                  <Icon size={27} />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
