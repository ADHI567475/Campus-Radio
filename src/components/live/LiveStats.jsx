import { motion } from "framer-motion";
import {
  Users,
  Heart,
  Radio,
  MessageCircle,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    title: "Listeners",
    value: "1,284",
    color: "text-cyan-400",
  },
  {
    icon: Heart,
    title: "Song Likes",
    value: "3,892",
    color: "text-red-400",
  },
  {
    icon: Radio,
    title: "Broadcast Time",
    value: "02:41:16",
    color: "text-violet-400",
  },
  {
    icon: MessageCircle,
    title: "Live Messages",
    value: "742",
    color: "text-green-400",
  },
];

export default function LiveStats() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.12,
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-zinc-400">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {item.value}
                </h2>

              </div>

              <div className="rounded-2xl bg-white/5 p-4">

                <Icon
                  size={28}
                  className={item.color}
                />

              </div>

            </div>
          </motion.div>
        );
      })}
    </div>
  );
}