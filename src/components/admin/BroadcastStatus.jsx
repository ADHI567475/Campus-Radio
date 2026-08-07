import { Radio } from "lucide-react";
import { useLive } from "../../context/LiveContext";

export default function BroadcastStatus() {
  const { isLive, currentShow } = useLive();

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Broadcast Status
          </h2>

          <p className="mt-2 text-zinc-400">
            Current broadcast information
          </p>

        </div>

        <div
          className={`rounded-full px-4 py-2 font-semibold ${
            isLive
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {isLive ? "🔴 LIVE" : "⚫ OFFLINE"}
        </div>

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div>

          <p className="text-zinc-500">
            Show
          </p>

          <h3 className="mt-2 text-xl text-white">
            {currentShow.title}
          </h3>

        </div>

        <div>

          <p className="text-zinc-500">
            RJ
          </p>

          <h3 className="mt-2 text-xl text-white">
            {currentShow.rj || "-"}
          </h3>

        </div>

        <div>

          <p className="text-zinc-500">
            Listeners
          </p>

          <h3 className="mt-2 text-xl text-white">
            {currentShow.listeners}
          </h3>

        </div>

      </div>

    </div>
  );
}