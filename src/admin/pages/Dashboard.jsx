import AdminLayout from "../layout/AdminLayout";
import {
  Radio,
  Newspaper,
  MessageSquare,
  BarChart3,
  CalendarDays,
  Users,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLive } from "../../context/LiveContext";
import { useNews } from "../../context/NewsContext";
import { useDiscussion } from "../../context/DiscussionContext";

export default function Dashboard() {
  const navigate = useNavigate();

  const { isLive, currentShow } = useLive();
  const { news } = useNews();
  const { posts } = useDiscussion();

  const pendingNews = news.filter((n) => !n.approved).length;

  const cards = [
    {
      title: "Pending News",
      value: pendingNews,
      icon: Newspaper,
      color: "text-cyan-400",
      path: "/admin/campus-desk",
    },
    {
      title: "Discussions",
      value: posts.length,
      icon: MessageSquare,
      color: "text-violet-400",
      path: "/admin/discussions",
    },
    {
      title: "Active Polls",
      value: 3,
      icon: BarChart3,
      color: "text-green-400",
      path: "/admin/polls",
    },
    {
      title: "Upcoming Events",
      value: 4,
      icon: CalendarDays,
      color: "text-yellow-300",
      path: "/admin/events",
    },
  ];

  return (
    <AdminLayout>

      <h1 className="text-4xl font-black text-white">
        Dashboard
      </h1>

      <p className="mt-2 text-zinc-400">
        Welcome back, Admin.
      </p>

      {/* Cards */}

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              onClick={() => navigate(card.path)}
              className="cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-cyan-400"
            >
              <Icon className={card.color} size={28} />

              <h2 className="mt-5 text-4xl font-black text-white">
                {card.value}
              </h2>

              <p className="mt-2 text-zinc-400">
                {card.title}
              </p>
            </div>
          );
        })}

      </div>

      {/* Live Status */}

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Live Broadcast
            </h2>

            <p className="mt-2 text-zinc-400">
              Current broadcast status
            </p>

          </div>

          <div
            className={`rounded-full px-5 py-2 font-semibold ${
              isLive
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {isLive ? "LIVE" : "OFFLINE"}
          </div>

        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <div>
            <p className="text-zinc-500">
              Show
            </p>

            <h3 className="mt-2 text-xl text-white">
              {currentShow.title}
            </h3>
          </div>

          <div>
            <p className="text-zinc-500">
              RJ
            </p>

            <h3 className="mt-2 text-xl text-white">
              {currentShow.rj || "-"}
            </h3>
          </div>

          <div>
            <p className="text-zinc-500">
              Listeners
            </p>

            <h3 className="mt-2 text-xl text-white">
              {currentShow.listeners}
            </h3>
          </div>

        </div>

      </div>

      {/* Quick Actions */}

      <div className="mt-10">

        <h2 className="text-2xl font-bold text-white">
          Quick Actions
        </h2>

        <div className="mt-6 flex flex-wrap gap-5">

          <button
            onClick={() => navigate("/admin/live")}
            className="rounded-full bg-violet-600 px-7 py-4 text-white transition hover:bg-violet-500"
          >
            🎙 Live Control
          </button>

          <button
            onClick={() => navigate("/admin/campus-desk")}
            className="rounded-full bg-cyan-600 px-7 py-4 text-white transition hover:bg-cyan-500"
          >
            📰 Review News
          </button>

          <button
            onClick={() => navigate("/admin/polls")}
            className="rounded-full bg-green-600 px-7 py-4 text-white transition hover:bg-green-500"
          >
            🗳 Create Poll
          </button>

          <button
            onClick={() => navigate("/admin/events")}
            className="rounded-full bg-orange-600 px-7 py-4 text-white transition hover:bg-orange-500"
          >
            📅 Add Event
          </button>

        </div>

      </div>

    </AdminLayout>
  );
}