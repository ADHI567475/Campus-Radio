import { motion } from "framer-motion";
import {
  Headphones,
  ArrowRight,
  Radio,
  Users,
  CalendarDays,
} from "lucide-react";

import GlowButton from "../ui/GlowButton";

const stats = [
  {
    icon: Radio,
    value: "24/7",
    label: "Live Shows",
  },
  {
    icon: Users,
    value: "5K+",
    label: "Students",
  },
  {
    icon: CalendarDays,
    value: "40+",
    label: "Events",
  },
];

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-xl lg:max-w-2xl"
    >
      {/* Live Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2 backdrop-blur-xl"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
        </span>

        <span className="text-sm font-semibold tracking-wide text-red-300">
          LIVE NOW
        </span>
      </motion.div>

      {/* Heading */}
      <h1 className="text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
        Our Campus.
        <br />
        One{" "}
        <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-pink-400 bg-clip-text text-transparent">
          Pulse.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
        Music, conversations, events and student stories—
        all streaming live in one place.
      </p>

      {/* Stats */}
      <div className="mt-10 grid grid-cols-3 gap-4">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + index * 0.15,
              }}
              whileHover={{
                y: -6,
              }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <Icon className="mb-3 h-6 w-6 text-violet-400" />

              <h3 className="text-2xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-1 text-sm text-zinc-400">
                {item.label}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">
        <GlowButton className="flex items-center gap-2">
          <Headphones size={18} />
          Listen Live
        </GlowButton>

        <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10">
          Explore Campus
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}