import { useState } from "react";
import { Music2, Send, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const initialQueue = [
  {
    id: 1,
    song: "Believer - Imagine Dragons",
    by: "Rahul",
    status: "Pending",
  },
  {
    id: 2,
    song: "Heat Waves - Glass Animals",
    by: "Sneha",
    status: "Accepted",
  },
];

export default function SongRequest() {
  const [song, setSong] = useState("");
  const [queue, setQueue] = useState(initialQueue);

  const requestSong = () => {
    if (!song.trim()) return;

    setQueue((prev) => [
      {
        id: Date.now(),
        song,
        by: "You",
        status: "Pending",
      },
      ...prev,
    ]);

    setSong("");
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Song Requests
          </h2>

          <p className="mt-1 text-zinc-400">
            Send a request to the RJ
          </p>
        </div>

        <div className="rounded-full bg-violet-500/20 px-3 py-1 text-violet-300">
          {queue.length} Queue
        </div>

      </div>

      <div className="flex gap-3">

        <input
          value={song}
          onChange={(e) => setSong(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") requestSong();
          }}
          placeholder="Song name..."
          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
        />

        <button
          onClick={requestSong}
          className="rounded-xl bg-violet-600 px-5 transition hover:bg-violet-500"
        >
          <Send size={18} />
        </button>

      </div>

      <div className="mt-8 space-y-4">

        {queue.map((item) => (

          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between rounded-2xl bg-white/5 p-4"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-violet-500/20 p-3">
                <Music2 className="text-violet-300" />
              </div>

              <div>

                <h3 className="font-semibold text-white">
                  {item.song}
                </h3>

                <p className="text-sm text-zinc-400">
                  Requested by {item.by}
                </p>

              </div>

            </div>

            {item.status === "Pending" ? (
              <div className="flex items-center gap-2 rounded-full bg-yellow-500/10 px-3 py-1 text-yellow-400">

                <Clock size={16} />

                Pending

              </div>
            ) : (
              <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-green-400">

                <CheckCircle2 size={16} />

                Accepted

              </div>
            )}

          </motion.div>

        ))}

      </div>

    </div>
  );
}