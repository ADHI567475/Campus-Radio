import { useState } from "react";
import {
  Bell,
  Music2,
  Radio,
  Vote,
  Heart,
  MessageCircle,
  CalendarDays,
  CheckCheck,
  Trash2,
} from "lucide-react";
import { motion } from "framer-motion";

const initialNotifications = [
  {
    id: 1,
    icon: <Heart size={18} />,
    title: "Rahul liked your discussion.",
    time: "Just now",
    unread: true,
    color: "text-red-400",
  },
  {
    id: 2,
    icon: <MessageCircle size={18} />,
    title: "Sneha commented on your post.",
    time: "3 mins ago",
    unread: true,
    color: "text-cyan-400",
  },
  {
    id: 3,
    icon: <Music2 size={18} />,
    title: "Your song request was accepted.",
    time: "10 mins ago",
    unread: true,
    color: "text-violet-400",
  },
  {
    id: 4,
    icon: <Radio size={18} />,
    title: "Pulse FM is LIVE now.",
    time: "25 mins ago",
    unread: false,
    color: "text-green-400",
  },
  {
    id: 5,
    icon: <Vote size={18} />,
    title: "A new campus poll is available.",
    time: "1 hour ago",
    unread: false,
    color: "text-yellow-400",
  },
  {
    id: 6,
    icon: <CalendarDays size={18} />,
    title: "Tech Fest starts tomorrow.",
    time: "Yesterday",
    unread: false,
    color: "text-orange-400",
  },
];

export default function NotificationDropdown({ onClose }) {
  const [notifications, setNotifications] = useState(initialNotifications);

  const unread = notifications.filter((n) => n.unread).length;

  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({
        ...n,
        unread: false,
      }))
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -15,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -15,
      }}
      transition={{
        duration: 0.2,
      }}
      className="absolute right-0 top-16 z-50 w-[390px] overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020]/95 shadow-2xl backdrop-blur-2xl"
    >
      {/* Header */}

      <div className="border-b border-white/10 p-5">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Bell className="text-violet-400" />

            <div>

              <h2 className="font-bold text-white">
                Notifications
              </h2>

              <p className="text-xs text-zinc-500">
                {unread} unread
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="text-xl text-zinc-500 transition hover:text-white"
          >
            ×
          </button>

        </div>

      </div>

      {/* Notifications */}

      <div className="max-h-[420px] space-y-3 overflow-y-auto p-5">

        {notifications.length === 0 ? (

          <div className="py-12 text-center">

            <Bell
              size={40}
              className="mx-auto text-zinc-600"
            />

            <p className="mt-4 text-zinc-500">
              No notifications
            </p>

          </div>

        ) : (

          notifications.map((item) => (

            <motion.div
              key={item.id}
              layout
              whileHover={{
                x: 4,
              }}
              className={`rounded-2xl border p-4 transition ${
                item.unread
                  ? "border-violet-500/20 bg-violet-500/10"
                  : "border-white/5 bg-white/5"
              }`}
            >

              <div className="flex gap-4">

                <div className={item.color}>
                  {item.icon}
                </div>

                <div className="flex-1">

                  <p className="text-sm text-white">
                    {item.title}
                  </p>

                  <p className="mt-2 text-xs text-zinc-500">
                    {item.time}
                  </p>

                </div>

                {item.unread && (
                  <span className="mt-2 h-2 w-2 rounded-full bg-violet-500" />
                )}

              </div>

            </motion.div>

          ))

        )}

      </div>

      {/* Footer */}

      <div className="grid grid-cols-2 gap-3 border-t border-white/10 p-5">

        <button
          onClick={markAllRead}
          className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 text-white transition hover:bg-violet-500"
        >
          <CheckCheck size={18} />
          Read All
        </button>

        <button
          onClick={clearAll}
          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-white transition hover:bg-red-500/20"
        >
          <Trash2 size={18} />
          Clear
        </button>

      </div>

    </motion.div>
  );
}