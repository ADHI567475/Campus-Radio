import { Bell, Search } from "lucide-react";
import { useLive } from "../../context/LiveContext";

export default function AdminNavbar() {
  const { isLive } = useLive();

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-white/10 bg-[#090B12]/90 px-8 backdrop-blur-xl">

      {/* Search */}
      <div className="flex w-96 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">

        <Search size={18} className="text-zinc-400" />

        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
        />

      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        <div
          className={`rounded-full px-4 py-2 text-sm font-semibold ${
            isLive
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {isLive ? "🔴 LIVE" : "⚫ OFFLINE"}
        </div>

        <button className="rounded-xl bg-white/5 p-3 transition hover:bg-white/10">
          <Bell className="text-white" size={20} />
        </button>

        <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-2">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-bold text-white">
            A
          </div>

          <div>
            <p className="font-semibold text-white">
              Admin
            </p>

            <p className="text-xs text-zinc-400">
              Campus Radio
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}