import GlassCard from "../ui/GlassCard";
import {
  Heart,
  Pause,
  Play,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { motion } from "framer-motion";
import { useAudio } from "../../context/AudioPlayerContext";

export default function HeroPlayer() {
  const {
    playing,
    togglePlay,
    currentSong,
    currentTime,
    duration,
    seek,
    formatTime,
    previousSong,
    nextSong,
    toggleLike,
  } = useAudio();

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <GlassCard className="group relative overflow-hidden rounded-[32px] border border-white/10 p-8">

        {/* Glow */}
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -left-12 bottom-0 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative flex flex-col items-center">

          {/* Album */}
          <motion.img
            src={currentSong.cover}
            alt={currentSong.title}
            animate={
              playing
                ? { rotate: 360 }
                : { rotate: 0 }
            }
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="h-56 w-56 rounded-full border-4 border-white/10 object-cover shadow-[0_0_40px_rgba(124,58,237,.35)]"
          />

          {/* Song */}
          <h2 className="mt-8 text-3xl font-bold text-white">
            {currentSong.title}
          </h2>

          <p className="mt-2 text-zinc-400">
            {currentSong.artist}
          </p>

          {/* Equalizer */}
          <div className="mt-10 flex items-end gap-2">

            {[35,55,45,70,60,80,50,75].map((h,i)=>(

              <motion.div
                key={i}
                className="w-3 rounded-full bg-gradient-to-t from-violet-500 via-fuchsia-400 to-cyan-400"
                style={{height:h}}
                animate={
                  playing
                    ? {
                        height:[h,h+25,h]
                      }
                    : {
                        height:h
                      }
                }
                transition={{
                  repeat:Infinity,
                  duration:0.9+i*0.08
                }}
              />

            ))}

          </div>

          {/* Progress */}

          <div className="mt-10 w-full">

            <div className="mb-3 flex justify-between text-xs text-zinc-400">

              <span>{formatTime(currentTime)}</span>

              <span>{formatTime(duration)}</span>

            </div>

            <input
              type="range"
              min={0}
              max={duration || 0}
              value={currentTime}
              onChange={(e)=>seek(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-violet-500"
            />

          </div>

          {/* Controls */}

          <div className="mt-10 flex items-center gap-7">

            <button
              onClick={toggleLike}
              className={`transition ${
                currentSong.liked
                  ? "text-red-500"
                  : "text-zinc-400 hover:text-red-500"
              }`}
            >
              <Heart
                size={22}
                fill={currentSong.liked ? "currentColor" : "none"}
              />
            </button>

            <button
              onClick={previousSong}
              className="text-zinc-400 transition hover:text-white hover:scale-110"
            >
              <SkipBack size={24}/>
            </button>

            <motion.button
              whileTap={{scale:.9}}
              onClick={togglePlay}
              className="rounded-full bg-violet-600 p-5 shadow-[0_0_30px_rgba(124,58,237,.5)]"
            >
              {playing
                ? <Pause className="text-white" size={24}/>
                : <Play fill="white" className="text-white" size={24}/>
              }
            </motion.button>

            <button
              onClick={nextSong}
              className="text-zinc-400 transition hover:text-white hover:scale-110"
            >
              <SkipForward size={24}/>
            </button>

          </div>

          {/* Queue */}

          <div className="mt-10 w-full rounded-2xl border border-white/10 bg-white/5 p-5">

            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-300">
              Up Next
            </p>

            <div className="space-y-3">

              <div className="flex justify-between text-white/80">
                <span>Late Night Chill</span>
                <span className="text-zinc-500">03:12</span>
              </div>

              <div className="flex justify-between text-white/80">
                <span>Morning Energy</span>
                <span className="text-zinc-500">04:05</span>
              </div>

            </div>

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
}