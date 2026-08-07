import { useState } from "react";
import { Megaphone } from "lucide-react";

export default function AnnouncementPanel() {
  const [announcement, setAnnouncement] = useState("");

  const handleSend = () => {
    if (!announcement.trim()) return;

    alert("📢 Announcement sent!");

    setAnnouncement("");
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <div className="flex items-center gap-3">

        <Megaphone className="text-cyan-400" />

        <h2 className="text-2xl font-bold text-white">
          Announcements
        </h2>

      </div>

      <p className="mt-3 text-zinc-400">
        Broadcast important announcements to every student.
      </p>

      <textarea
        rows={6}
        value={announcement}
        onChange={(e) => setAnnouncement(e.target.value)}
        placeholder="Write an announcement..."
        className="mt-6 w-full rounded-2xl border border-white/10 bg-[#111827] p-4 text-white outline-none focus:border-cyan-400"
      />

      <button
        onClick={handleSend}
        className="mt-6 rounded-full bg-cyan-500 px-7 py-3 font-semibold text-white transition hover:bg-cyan-400"
      >
        📢 Send Announcement
      </button>

    </div>
  );
}