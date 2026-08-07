import { useState } from "react";
import {
  Music2,
  Plus,
  Trash2,
  PlayCircle,
} from "lucide-react";

export default function PlaylistQueue() {
  const [song, setSong] = useState("");

  const [queue, setQueue] = useState([
    "Believer",
    "Night Changes",
    "Heat Waves",
  ]);

  const addSong = () => {
    if (!song.trim()) return;

    setQueue([...queue, song]);

    setSong("");
  };

  const removeSong = (index) => {
    setQueue(queue.filter((_, i) => i !== index));
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <div className="flex items-center gap-3">

        <Music2 className="text-violet-400" />

        <h2 className="text-2xl font-bold text-white">
          Playlist Queue
        </h2>

      </div>

      <p className="mt-2 text-zinc-400">
        Manage the upcoming songs.
      </p>

      {/* Now Playing */}

      <div className="mt-8 rounded-2xl bg-[#111827] p-5">

        <p className="text-sm text-zinc-500">
          Now Playing
        </p>

        <div className="mt-2 flex items-center gap-3">

          <PlayCircle className="text-green-400" />

          <span className="text-lg font-semibold text-white">
            Campus Radio Theme
          </span>

        </div>

      </div>

      {/* Queue */}

      <div className="mt-8 space-y-3">

        {queue.map((item, index) => (

          <div
            key={index}
            className="flex items-center justify-between rounded-xl bg-[#111827] p-4"
          >

            <span className="text-white">
              {index + 1}. {item}
            </span>

            <button
              onClick={() => removeSong(index)}
            >
              <Trash2
                size={18}
                className="text-red-400 hover:text-red-300"
              />
            </button>

          </div>

        ))}

      </div>

      {/* Add Song */}

      <div className="mt-8 flex gap-3">

        <input
          value={song}
          onChange={(e) => setSong(e.target.value)}
          placeholder="Song title..."
          className="flex-1 rounded-xl bg-[#111827] p-4 text-white outline-none"
        />

        <button
          onClick={addSong}
          className="rounded-xl bg-violet-600 px-5 text-white hover:bg-violet-500"
        >
          <Plus />
        </button>

      </div>

    </div>
  );
}