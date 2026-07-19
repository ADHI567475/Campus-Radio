import { CalendarDays, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function EventCard({
  title,
  date,
  time,
  venue,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div className="flex items-center gap-2 text-violet-400">
        <CalendarDays size={18} />
        <span>{date}</span>
      </div>

      <h3 className="mt-4 text-2xl font-bold text-white">
        {title}
      </h3>

      <div className="mt-6 space-y-3 text-zinc-400">

        <div className="flex items-center gap-2">
          <Clock size={18} />
          {time}
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={18} />
          {venue}
        </div>

      </div>

      <button className="mt-8 w-full rounded-full bg-violet-600 py-3 font-semibold text-white hover:bg-violet-500">
        View Details
      </button>
    </motion.div>
  );
}