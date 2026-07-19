import { motion } from "framer-motion";
import {
  Radio,
  Users,
  Headphones,
  ArrowRight,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import SectionHeader from "../ui/SectionHeader";

const shows = [
  {
    title: "Midnight Mix",
    host: "RJ Maya",
    genre: "Lo-Fi • Chill",
    listeners: "1,284",
    color: "from-violet-500 to-cyan-400",
  },
  {
    title: "Morning Beats",
    host: "RJ Alex",
    genre: "Pop • Hits",
    listeners: "842",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Campus Talks",
    host: "Prof. David",
    genre: "Podcasts",
    listeners: "615",
    color: "from-pink-500 to-violet-500",
  },
  {
    title: "Night Owl",
    host: "RJ Sarah",
    genre: "Indie • Acoustic",
    listeners: "972",
    color: "from-orange-500 to-pink-500",
  },
];

export default function LiveOnAir() {
  return (
    <section className="py-28">

      <SectionHeader
        badge="🎙 LIVE"
        title="Pulse"
        highlight="Live"
        description="Tune into the hottest live shows hosted by students, clubs, and faculty."
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {shows.map((show, index) => (

          <motion.div
            key={show.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              y: -10,
            }}
          >

            <GlassCard className="group relative overflow-hidden rounded-[32px] p-6 h-full">

              {/* Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${show.color} opacity-10 transition-opacity duration-500 group-hover:opacity-20`}
              />

              {/* LIVE Badge */}
              <div className="relative flex items-center justify-between">

                <div className="flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1">

                  <span className="relative flex h-2 w-2">

                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />

                  </span>

                  <span className="text-xs font-semibold text-red-300">
                    LIVE
                  </span>

                </div>

                <Radio className="text-violet-400" />

              </div>

              {/* Show */}
              <div className="relative mt-8">

                <h3 className="text-2xl font-bold text-white">
                  {show.title}
                </h3>

                <p className="mt-2 text-zinc-400">
                  Hosted by {show.host}
                </p>

                <span className="mt-4 inline-flex rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-300">
                  {show.genre}
                </span>

              </div>

              {/* Equalizer */}
              <div className="mt-8 flex items-end gap-[4px]">

                {[20, 36, 24, 42, 30, 38].map((h, i) => (

                  <motion.div
                    key={i}
                    className={`w-[4px] rounded-full bg-gradient-to-t ${show.color}`}
                    style={{
                      height: h,
                    }}
                    animate={{
                      height: [h, h + 12, h],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1 + i * 0.15,
                    }}
                  />

                ))}

              </div>

              {/* Footer */}
              <div className="mt-8 flex items-center justify-between">

                <div className="flex items-center gap-2 text-sm text-zinc-400">

                  <Users size={16} />

                  {show.listeners}

                </div>

                <button className="flex items-center gap-2 text-sm font-medium text-violet-300 transition hover:text-white">

                  <Headphones size={16} />

                  Join

                  <ArrowRight size={16} />

                </button>

              </div>

            </GlassCard>

          </motion.div>

        ))}

      </div>

    </section>
  );
}