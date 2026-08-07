import { useState } from "react";
import {
  Heart,
  Play,
  Pause,
  Share2,
  Radio,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

export default function LiveControls() {
  const [playing, setPlaying] = useState(true);
  const [liked, setLiked] = useState(false);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <div className="flex items-center justify-between">

        <div>

          <div className="flex items-center gap-3">

            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="h-3 w-3 rounded-full bg-red-500"
            />

            <span className="font-semibold text-red-400">
              LIVE BROADCAST
            </span>

          </div>

          <p className="mt-2 text-zinc-400">
            Broadcasting across campus
          </p>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2">

          <Users size={18} className="text-cyan-400" />

          <span className="font-semibold text-white">
            1,284
          </span>

        </div>

      </div>

      {/* Wave Animation */}

      <div className="mt-10 flex items-end justify-center gap-2">

        {[35, 60, 45, 80, 50, 75, 55, 70, 45, 65].map((h, i) => (

          <motion.div
            key={i}
            className="w-2 rounded-full bg-gradient-to-t from-violet-500 via-fuchsia-400 to-cyan-400"
            style={{ height: h }}
            animate={{
              height: [h, h + 25, h],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8 + i * 0.08,
            }}
          />

        ))}

      </div>

      {/* Controls */}

      <div className="mt-10 flex items-center justify-center gap-8">

        <button
          onClick={() => setLiked(!liked)}
          className={`transition ${
            liked
              ? "text-red-500"
              : "text-zinc-400 hover:text-red-500"
          }`}
        >
          <Heart
            size={24}
            fill={liked ? "currentColor" : "none"}
          />
        </button>

        <button
          onClick={() => setPlaying(!playing)}
          className="rounded-full bg-violet-600 p-5 shadow-lg shadow-violet-600/40 transition hover:scale-110"
        >
          {playing ? (
            <Pause className="text-white" />
          ) : (
            <Play fill="white" className="text-white" />
          )}
        </button>

        <button className="text-zinc-400 transition hover:text-cyan-400">
          <Share2 size={24} />
        </button>

      </div>

      <div className="mt-10 grid grid-cols-3 gap-4">

        <div className="rounded-2xl bg-white/5 p-5 text-center">

          <Radio className="mx-auto text-violet-400" />

          <p className="mt-2 text-sm text-zinc-400">
            Broadcast
          </p>

          <h3 className="mt-1 font-bold text-white">
            ON AIR
          </h3>

        </div>

        <div className="rounded-2xl bg-white/5 p-5 text-center">

          <Heart className="mx-auto text-red-400" />

          <p className="mt-2 text-sm text-zinc-400">
            Likes
          </p>

          <h3 className="mt-1 font-bold text-white">
            3.8K
          </h3>

        </div>

        <div className="rounded-2xl bg-white/5 p-5 text-center">

          <Users className="mx-auto text-cyan-400" />

          <p className="mt-2 text-sm text-zinc-400">
            Listening
          </p>

          <h3 className="mt-1 font-bold text-white">
            1,284
          </h3>

        </div>

      </div>

    </div>
  );
}