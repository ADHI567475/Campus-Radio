import { motion } from "framer-motion";
import {
  Radio,
  Users,
  Heart,
  MessageCircle,
  Clock,
  Mic2,
  Headphones,
  Music2,
  ArrowRight,
  Bell,
} from "lucide-react";

import studio from "../../data/temp";

export default function StudioStatus() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Radio className="text-violet-400" size={30} />

          <div>
            <h2 className="text-2xl font-bold text-white">
              Pulse FM Studio
            </h2>

            <p className="text-sm text-zinc-400">
              Live Broadcast Status
            </p>
          </div>
        </div>

        {studio.isLive ? (
          <span className="rounded-full bg-red-500/20 px-4 py-2 font-semibold text-red-400">
            🔴 LIVE
          </span>
        ) : (
          <span className="rounded-full bg-zinc-700 px-4 py-2 font-semibold text-zinc-300">
            ⚫ OFFLINE
          </span>
        )}
      </div>

      <div className="mt-8">
        {studio.isLive ? (
          <>
            <h3 className="text-3xl font-bold text-white">
              {studio.currentShow}
            </h3>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <Info
                icon={<Mic2 size={18} />}
                label="Host"
                value={studio.host}
              />

              <Info
                icon={<Headphones size={18} />}
                label="Producer"
                value={studio.producer}
              />

              <Info
                icon={<Music2 size={18} />}
                label="Music Curator"
                value={studio.musicCurator}
              />
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {/* <Stat
                icon={<Users />}
                value={studio.listeners}
                label="Listeners"
              />

              <Stat
                icon={<Heart />}
                value={studio.likes}
                label="Likes"
              />

              <Stat
                icon={<MessageCircle />}
                value={studio.messages}
                label="Messages"
              /> */}

              {/* <Stat
                icon={<Clock />}
                value={studio.duration}
                label="Duration"
              /> */}
            </div>

            <div className="mt-8 rounded-2xl bg-black/20 p-5">
              <p className="text-sm text-zinc-400">
                Current Segment
              </p>

              <h4 className="mt-2 text-xl font-semibold text-white">
                {studio.currentSegment}
              </h4>
            </div>

            {/* <button className="mt-8 flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105">
              Join Live Chat
              <ArrowRight size={18} />
            </button> */}
          </>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-white">
              Studio is currently offline
            </h3>

            <div className="mt-8 rounded-2xl bg-black/20 p-6">
              <p className="text-zinc-400">
                Next Show
              </p>

              <h4 className="mt-2 text-2xl font-bold text-white">
                {studio.nextShow.title}
              </h4>

              <p className="mt-2 text-zinc-300">
                {studio.nextShow.time}
              </p>

              <p className="mt-1 text-zinc-500">
                Host: {studio.nextShow.host}
              </p>
            </div>

            <button className="mt-8 flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-white transition hover:bg-violet-500">
              <Bell size={18} />
              Notify Me
            </button>
          </>
        )}
      </div>
    </motion.section>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="rounded-2xl bg-black/20 p-5">
      <div className="mb-2 text-violet-400">{icon}</div>

      <h3 className="text-2xl font-bold text-white">
        {value}
      </h3>

      <p className="text-sm text-zinc-400">
        {label}
      </p>
    </div>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="rounded-2xl bg-black/20 p-5">
      <div className="mb-2 text-cyan-400">
        {icon}
      </div>

      <p className="text-sm text-zinc-400">
        {label}
      </p>

      <h4 className="mt-1 text-lg font-semibold text-white">
        {value}
      </h4>
    </div>
  );
}