import { Volume2 } from "lucide-react";

export default function VolumeSlider() {
  return (
    <div className="mt-8 flex items-center gap-4">
      <Volume2 className="text-zinc-400" />

      <input
        type="range"
        min="0"
        max="100"
        defaultValue="75"
        className="w-full accent-violet-600"
      />
    </div>
  );
}