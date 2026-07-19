import GlassCard from "../ui/GlassCard";
import {
  Radio,
  Users,
  Heart,
  Volume2,
  SkipBack,
  SkipForward,
  Play,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HeroPlayer() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      <GlassCard className="group relative overflow-hidden rounded-[32px] border border-white/10 p-8 transition-all duration-500">

        {/* Background Glow */}
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

        <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

        <div className="relative">

          {/* Header */}
          <div className="flex items-start justify-between">

            <div>

              <div className="flex items-center gap-3">

                <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
                  NOW PLAYING
                </p>

                <div className="flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1">

                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                  </span>

                  <span className="text-xs font-semibold text-red-300">
                    LIVE
                  </span>

                </div>

              </div>

              <h2 className="mt-5 text-4xl font-bold text-white">
                Midnight Mix
              </h2>

              <p className="mt-2 text-zinc-400">
                Hosted by <span className="text-white">RJ Maya</span>
              </p>

            </div>

            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/20">

              <Radio className="text-violet-300" size={36} />

              <motion.div
                className="absolute inset-0 rounded-full border border-violet-400"
                animate={{
                  scale: [1, 1.8],
                  opacity: [0.7, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                }}
              />

            </div>

          </div>

          {/* Equalizer */}
          <div className="mt-12 flex items-end gap-2">
            {[40, 70, 50, 90, 65, 85, 55, 75].map((h, i) => (
              <motion.div
                key={i}
                className="w-3 rounded-full bg-gradient-to-t from-violet-500 via-fuchsia-400 to-cyan-400"
                style={{ height: h }}
                animate={{
                  height: [h, h + 20, h],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1 + i * 0.15,
                }}
              />
            ))}
          </div>

          {/* Progress */}
          <div className="mt-10">

            <div className="mb-3 flex justify-between text-xs text-zinc-400">
              <span>02:14</span>
              <span>05:48</span>
            </div>

            <div className="h-2 rounded-full bg-white/10">

              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                initial={{ width: "38%" }}
                animate={{
                  width: ["38%", "62%", "38%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                }}
              />

            </div>

          </div>

          {/* Listeners */}
          <div className="mt-6 flex items-center gap-2 text-zinc-400">

            <Users size={18} />

            <span>1,284 Listening Live</span>

          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">

            <button className="text-zinc-400 transition hover:text-white">
              <Heart size={20} />
            </button>

            <button className="text-zinc-400 transition hover:text-white">
              <SkipBack size={22} />
            </button>

            <button className="rounded-full bg-violet-500 p-4 shadow-lg shadow-violet-500/40 transition duration-300 hover:scale-105">
              <Play fill="white" className="text-white" size={22} />
            </button>

            <button className="text-zinc-400 transition hover:text-white">
              <SkipForward size={22} />
            </button>

            <button className="text-zinc-400 transition hover:text-white">
              <Volume2 size={20} />
            </button>

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
}