import { useState } from "react";
import { Mic, MicOff, MessageSquare, Timer } from "lucide-react";
import { useLive } from "../../context/LiveContext";

export default function BroadcastControls() {
  const {
    isLive,
    currentShow,
    startLive,
    stopLive,
  } = useLive();

  const [title, setTitle] = useState(currentShow.title);
  const [rj, setRJ] = useState(currentShow.rj || "RJ Alex");

  const [micMuted, setMicMuted] = useState(false);
  const [chatEnabled, setChatEnabled] = useState(true);
  const [slowMode, setSlowMode] = useState(false);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="text-2xl font-bold text-white">
        Broadcast Controls
      </h2>

      <p className="mt-2 text-zinc-400">
        Control your live session.
      </p>

      {/* Show Title */}

      <label className="mt-8 block text-white">
        Show Title
      </label>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mt-2 w-full rounded-xl border border-white/10 bg-[#111827] p-4 text-white outline-none"
      />

      {/* RJ */}

      <label className="mt-6 block text-white">
        RJ Name
      </label>

      <input
        value={rj}
        onChange={(e) => setRJ(e.target.value)}
        className="mt-2 w-full rounded-xl border border-white/10 bg-[#111827] p-4 text-white outline-none"
      />

      {/* Toggles */}

      <div className="mt-8 space-y-4">

        <button
          onClick={() => setMicMuted(!micMuted)}
          className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-[#111827] p-4 text-white"
        >
          <span className="flex items-center gap-3">
            {micMuted ? <MicOff size={18} /> : <Mic size={18} />}
            Microphone
          </span>

          <span>
            {micMuted ? "Muted" : "Live"}
          </span>
        </button>

        <button
          onClick={() => setChatEnabled(!chatEnabled)}
          className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-[#111827] p-4 text-white"
        >
          <span className="flex items-center gap-3">
            <MessageSquare size={18} />
            Live Chat
          </span>

          <span>
            {chatEnabled ? "Enabled" : "Disabled"}
          </span>
        </button>

        <button
          onClick={() => setSlowMode(!slowMode)}
          className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-[#111827] p-4 text-white"
        >
          <span className="flex items-center gap-3">
            <Timer size={18} />
            Slow Mode
          </span>

          <span>
            {slowMode ? "ON" : "OFF"}
          </span>
        </button>

      </div>

      {/* Live Buttons */}

      <div className="mt-8 flex gap-4">

        {!isLive ? (
          <button
            onClick={() => startLive(title, rj)}
            className="flex-1 rounded-full bg-green-600 py-4 font-semibold text-white transition hover:bg-green-500"
          >
            ▶ Start Broadcast
          </button>
        ) : (
          <button
            onClick={stopLive}
            className="flex-1 rounded-full bg-red-600 py-4 font-semibold text-white transition hover:bg-red-500"
          >
            ■ End Broadcast
          </button>
        )}

      </div>

    </div>
  );
}