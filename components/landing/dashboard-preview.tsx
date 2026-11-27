import {
  Folder,
  Clock,
  Settings,
  Globe,
  Plus,
  ChevronDown,
  Zap,
} from "lucide-react";

const collections = ["Authentication", "Products", "Payments"];

export default function DashboardPreview() {
  return (
    <div className="relative rounded-2xl border border-slate-700/70 bg-[#10182B] p-3 shadow-2xl shadow-violet-950/30">
      {/* Window header */}
      <div className="flex items-center gap-2 border-b border-slate-700/60 px-3 pb-4">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-auto text-xs text-slate-500">
          Postboy API Client
        </span>
      </div>

      <div className="flex min-h-[390px]">
        {/* Sidebar */}
        <aside className="hidden w-44 shrink-0 border-r border-slate-700/60 p-3 sm:block">
          <div className="mb-6 flex items-center gap-2 font-semibold text-white">
            <Zap className="h-5 w-5 text-violet-500" />
            Postboy
          </div>

          <div className="space-y-2 text-sm text-slate-400">
            <div className="flex items-center gap-2 rounded-lg bg-violet-500/15 p-2 text-violet-300">
              <Folder size={16} /> Collections
            </div>
            <div className="flex items-center gap-2 p-2">
              <Globe size={16} /> Environments
            </div>
            <div className="flex items-center gap-2 p-2">
              <Clock size={16} /> History
            </div>
            <div className="flex items-center gap-2 p-2">
              <Settings size={16} /> Settings
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between text-xs font-semibold text-slate-400">
            My Collections
            <Plus size={14} />
          </div>

          <div className="mt-4 space-y-4 text-xs text-slate-400">
            {collections.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Folder size={14} />
                {item}
              </div>
            ))}
          </div>
        </aside>

        {/* Main workspace */}
        <div className="min-w-0 flex-1 p-3 sm:p-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-md bg-violet-500/15 px-3 py-2 text-sm text-violet-300">
              New Request
            </div>
            <Plus size={16} className="text-slate-400" />
          </div>

          {/* Request URL */}
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 rounded-lg border border-slate-700 bg-[#080D20] px-3 py-3 text-sm font-semibold text-green-400">
              GET <ChevronDown size={14} />
            </div>

            <div className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-[#080D20] px-3 py-3 text-sm text-slate-300">
              https://api.example.com/users
            </div>

            <button className="rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white">
              Send
            </button>
          </div>

          {/* Request tabs */}
          <div className="mt-6 flex gap-6 border-b border-slate-700 text-sm text-slate-400">
            <span className="border-b-2 border-violet-500 pb-3 text-violet-300">
              Params
            </span>
            <span className="pb-3">Headers</span>
            <span className="pb-3">Body</span>
            <span className="pb-3">Tests</span>
          </div>

          {/* Parameters */}
          <div className="mt-5 grid grid-cols-2 text-xs text-slate-500">
            <div className="border-b border-r border-slate-700 p-3">Key</div>
            <div className="border-b border-slate-700 p-3">Value</div>
          </div>

          <div className="mt-4 rounded-lg border border-dashed border-slate-700 p-3 text-sm text-slate-500">
            + Add Parameter
          </div>

          {/* Response */}
          <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-3">
            <span className="text-sm font-semibold text-violet-300">
              Response
            </span>
            <div className="flex items-center gap-3 text-xs">
              <span className="rounded-md bg-green-500/10 px-2 py-1 text-green-400">
                ● 200 OK
              </span>
              <span className="text-slate-400">245ms</span>
            </div>
          </div>

          {/* Response JSON */}
          <pre className="mt-4 overflow-x-auto rounded-lg bg-[#080D20] p-4 text-xs leading-6 text-slate-300">
            <code>
              {`{
    "message": "Success",
    "data": {
      "id": 1,
      "name": "Postboy"
    }
  }`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
