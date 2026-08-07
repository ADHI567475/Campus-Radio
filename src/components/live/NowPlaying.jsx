import AudioVisualizer from "./AudioVisualizer";
import { useAudio } from "../../context/AudioPlayerContext";

export default function NowPlaying() {
  const { playing } = useAudio();

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      {/* Album Art */}
      <div className="flex justify-center">
        <div
          className={`relative h-72 w-72 rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500 shadow-2xl shadow-violet-500/30 ${
            playing ? "animate-[spin_12s_linear_infinite]" : ""
          }`}
        >
          <div className="absolute inset-8 rounded-full bg-[#080B14]" />

          <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        </div>
      </div>

      <p className="mt-8 text-center text-sm tracking-[6px] text-white/60">
         LIVE NOW
      </p>

      <h1 className="mt-3 text-center text-4xl font-bold text-white">
        Host
      </h1>

      <AudioVisualizer />

    </div>
  );
}