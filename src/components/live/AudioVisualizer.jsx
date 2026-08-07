import { useAudio } from "../../context/AudioPlayerContext";

const heights = [
  18, 32, 45, 28, 52, 36, 60, 26, 42, 58,
  24, 48, 34, 56, 30, 50, 40, 62, 38, 46,
  20, 35, 55, 29, 44, 60, 33, 52, 27, 48,
];

export default function AudioVisualizer() {
  const { playing } = useAudio();

  return (
    <div className="mt-8 flex h-16 items-end justify-center gap-[3px]">
      {heights.map((height, index) => (
        <div
          key={index}
          className={`w-[4px] rounded-full bg-violet-400 ${
            playing ? "animate-equalizer" : ""
          }`}
          style={{
            height: `${height}px`,
            animationDelay: `${index * 0.08}s`,
            animationDuration: `${0.6 + (index % 5) * 0.15}s`,
            opacity: playing ? 1 : 0.35,
          }}
        />
      ))}
    </div>
  );
}