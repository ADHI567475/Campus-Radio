import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2, Radio, Clock } from "lucide-react";
import schedule from "../../data/schedule";

export default function Schedule() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <div className="mb-8 flex items-center gap-3">
          <CalendarDays className="text-violet-400" size={30} />
          <div>
            <h2 className="text-3xl font-bold text-white">
              Today's Schedule
            </h2>
            <p className="text-zinc-400">
              Stay tuned for every show
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {schedule.map((show, index) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-5"
            >
              <div className="flex items-center gap-5">
                <div className="text-center">
                  <p className="text-lg font-bold text-white">
                    {show.time}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {show.title}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    Hosted by {show.host}
                  </p>
                </div>
              </div>

              {show.status === "completed" && (
                <span className="flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-400">
                  <CheckCircle2 size={16} />
                  Completed
                </span>
              )}

              {show.status === "live" && (
                <span className="flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-2 text-sm font-semibold text-red-400">
                  <Radio size={16} />
                  LIVE
                </span>
              )}

              {show.status === "upcoming" && (
                <span className="flex items-center gap-2 rounded-full bg-violet-500/20 px-4 py-2 text-sm text-violet-300">
                  <Clock size={16} />
                  Upcoming
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}