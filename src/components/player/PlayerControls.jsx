import { SkipBack, Play, SkipForward } from "lucide-react";

export default function PlayerControls() {
  return (
    <div className="mt-8 flex items-center justify-center gap-8">
      <button className="rounded-full p-3 hover:bg-zinc-800">
        <SkipBack className="text-white" />
      </button>

      <button className="rounded-full bg-violet-600 p-5 hover:bg-violet-500">
        <Play className="fill-white text-white" />
      </button>

      <button className="rounded-full p-3 hover:bg-zinc-800">
        <SkipForward className="text-white" />
      </button>
    </div>
  );
}