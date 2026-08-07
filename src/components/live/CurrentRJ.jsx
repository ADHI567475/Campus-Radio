import { motion } from "framer-motion";
import { Mic, Users, Music2, Globe } from "lucide-react";

export default function CurrentRJ() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* Banner */}
      <div className="relative h-28 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500">

        <div className="absolute -bottom-12 left-8">
          <img
            src="https://i.pravatar.cc/200?img=32"
            alt="RJ Maya"
            className="h-24 w-24 rounded-full border-4 border-[#080B14] object-cover"
          />
        </div>

      </div>

      {/* Content */}
      <div className="px-8 pb-8 pt-16">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold text-white">
              RJ Maya
            </h2>

            <p className="mt-1 text-zinc-400">
              Evening Live Host
            </p>

          </div>

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="rounded-full bg-red-500/20 p-3"
          >
            <Mic className="text-red-400" />
          </motion.div>

        </div>

        <p className="mt-6 leading-7 text-zinc-300">
          🎙 "Good music. Great conversations. Keep your song requests coming!"
        </p>

        <div className="mt-8 grid grid-cols-3 gap-4">

          <div className="rounded-2xl bg-white/5 p-4 text-center">

            <Users className="mx-auto text-cyan-400" />

            <h3 className="mt-2 font-bold text-white">
              4.2K
            </h3>

            <p className="text-xs text-zinc-400">
              Followers
            </p>

          </div>

          <div className="rounded-2xl bg-white/5 p-4 text-center">

            <Music2 className="mx-auto text-violet-400" />

            <h3 className="mt-2 font-bold text-white">
              312
            </h3>

            <p className="text-xs text-zinc-400">
              Shows
            </p>

          </div>

          <div className="rounded-2xl bg-white/5 p-4 text-center">

            <Globe className="mx-auto text-cyan-400" />

            <h3 className="mt-2 font-bold text-white">
              CampusRadio.live
            </h3>

            <p className="text-xs text-zinc-400">
              Website
            </p>

          </div>

        </div>

      </div>

    </motion.div>
  );
}