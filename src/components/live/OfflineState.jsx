import { motion } from "framer-motion";
import {
  Radio,
  Clock3,
  Bell,
  CalendarDays,
  Music2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OfflineState() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* Top Glow */}
      <div className="relative overflow-hidden bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 p-8">

        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">

          <div className="flex items-center gap-3">
            <Radio className="text-white" size={28} />

            <h2 className="text-3xl font-black text-white">
              Campus Radio
            </h2>
          </div>

          <p className="mt-5 text-white/90">
            No RJ is currently broadcasting.
            Enjoy our curated campus playlist while you wait.
          </p>

        </div>

      </div>

      {/* Body */}

      <div className="space-y-6 p-8">

        <div className="rounded-2xl border border-white/10 bg-[#111827] p-5">

          <div className="flex items-center gap-3">

            <Music2 className="text-cyan-400" />

            <div>

              <p className="text-lg font-semibold text-white">
                Now Playing
              </p>

              <p className="text-zinc-400">
                Campus Playlist
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111827] p-5">

          <div className="flex items-center gap-3">

            <Clock3 className="text-violet-400" />

            <div>

              <p className="text-lg font-semibold text-white">
                Next Live Show
              </p>

              <p className="text-zinc-400">
                Confession Night • 8:00 PM
              </p>

            </div>

          </div>

        </div>

        <div className="flex flex-wrap gap-4">

          <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105">

            <Bell size={18} />

            Notify Me

          </button>

          <button
            onClick={() => navigate("/events")}
            className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >

            <CalendarDays size={18} />

            View Schedule

          </button>

        </div>

      </div>

    </motion.div>
  );
}