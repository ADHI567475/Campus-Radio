import { useState } from "react";
import { Bell } from "lucide-react";
import NotificationDropdown from "./NotificationDropdown";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="group relative rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(124,58,237,0.25)]"
      >
        <Bell
          size={20}
          className="text-white transition-transform duration-300 group-hover:scale-110"
        />

        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white shadow-lg">
          3
        </span>
      </button>

      <NotificationDropdown open={open} />
    </div>
  );
}