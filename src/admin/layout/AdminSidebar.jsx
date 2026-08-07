import {
  LayoutDashboard,
  Radio,
  Newspaper,
  MessageSquare,
  BarChart3,
  CalendarDays,
  Users,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin",
  },
  {
    name: "Live Control",
    icon: Radio,
    path: "/admin/live",
  },
  {
    name: "Campus Desk",
    icon: Newspaper,
    path: "/admin/campus-desk",
  },
  {
    name: "Discussions",
    icon: MessageSquare,
    path: "/admin/discussions",
  },
  {
    name: "Poll Manager",
    icon: BarChart3,
    path: "/admin/polls",
  },
  {
    name: "Events",
    icon: CalendarDays,
    path: "/admin/events",
  },
  {
    name: "Users",
    icon: Users,
    path: "/admin/users",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/admin/settings",
  },
];

export default function AdminSidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 border-r border-white/10 bg-[#090B12] p-6">

      <h1 className="mb-10 text-2xl font-black text-white">
        📻 Campus Radio
      </h1>

      <div className="space-y-2">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-2xl px-5 py-4 transition ${
                  isActive
                    ? "bg-violet-600 text-white"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <Icon size={20} />

              {item.name}
            </NavLink>
          );
        })}

      </div>

    </aside>
  );
}