import {
  Radio,
  LayoutDashboard,
  Mic2,
  Newspaper,
  Bell,
  Users,
} from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Mic2, label: "Broadcast" },
  { icon: Newspaper, label: "Campus Desk" },
  { icon: Bell, label: "Announcements" },
  { icon: Users, label: "Listeners" },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-28 h-fit rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <div className="mb-10 flex items-center gap-3">

        <div className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 p-3">
          <Radio className="text-white" />
        </div>

        <div>
          <h2 className="font-bold text-white">
            Admin Studio
          </h2>

          <p className="text-sm text-zinc-400">
            Campus Radio
          </p>
        </div>

      </div>

      <div className="space-y-3">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}

      </div>

    </aside>
  );
}