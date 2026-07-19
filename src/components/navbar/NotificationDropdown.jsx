import { Bell, Music2, Radio, Vote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const notifications = [
  {
    icon: <Music2 size={16} />,
    title: "Your song request was accepted",
    time: "2 min ago",
  },
  {
    icon: <Radio size={16} />,
    title: "Confession Night starts in 20 mins",
    time: "20 min",
  },
  {
    icon: <Vote size={16} />,
    title: "New campus poll is live",
    time: "1 hour ago",
  },
];

export default function NotificationDropdown({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 top-14 z-50 w-80 rounded-2xl border border-white/10 bg-zinc-900/95 p-5 shadow-2xl backdrop-blur-xl"
        >
          <div className="mb-4 flex items-center gap-2">
            <Bell className="text-violet-400" />
            <h3 className="text-lg font-semibold text-white">
              Notifications
            </h3>
          </div>

          <div className="space-y-3">
            {notifications.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-white/5 p-3 transition hover:bg-white/10"
              >
                <div className="flex gap-3">
                  <div className="text-violet-400">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm text-white">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      {item.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-5 w-full rounded-xl bg-violet-600 py-2 text-white transition hover:bg-violet-500">
            View All
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}