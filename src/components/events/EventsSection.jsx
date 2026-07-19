import GlassCard from "../ui/GlassCard";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";

const events = [
  {
    day: "20",
    month: "JUL",
    title: "TechFest 2026",
    time: "6:00 PM",
    venue: "Main Auditorium",
    category: "Technology",
  },
  {
    day: "22",
    month: "JUL",
    title: "Open Mic Night",
    time: "7:30 PM",
    venue: "Student Activity Center",
    category: "Entertainment",
  },
  {
    day: "28",
    month: "JUL",
    title: "AI Hackathon",
    time: "9:00 AM",
    venue: "Innovation Lab",
    category: "Coding",
  },
  {
    day: "30",
    month: "JUL",
    title: "Football Championship",
    time: "4:00 PM",
    venue: "Sports Ground",
    category: "Sports",
  },
];

export default function EventsSection() {
  return (
    <section className="relative py-28">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="📅 EVENTS"
          title="Never Miss"
          highlight="What's Happening"
          description="Stay updated with exciting campus events, competitions, workshops and student activities."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {events.map((event, index) => (

            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
            >

              <GlassCard className="group rounded-3xl p-7 transition-all duration-300">

                <div className="flex gap-6">

                  {/* Date */}

                  <div className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-lg shadow-violet-500/30">

                    <span className="text-3xl font-bold text-white">
                      {event.day}
                    </span>

                    <span className="text-sm font-medium tracking-widest text-white/80">
                      {event.month}
                    </span>

                  </div>

                  {/* Details */}

                  <div className="flex-1">

                    <div className="inline-flex rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-cyan-300">
                      {event.category}
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-white">
                      {event.title}
                    </h3>

                    <div className="mt-5 space-y-3">

                      <div className="flex items-center gap-3 text-zinc-400">

                        <Clock size={17} />

                        <span>{event.time}</span>

                      </div>

                      <div className="flex items-center gap-3 text-zinc-400">

                        <MapPin size={17} />

                        <span>{event.venue}</span>

                      </div>

                    </div>

                    <button className="mt-8 flex items-center gap-2 font-medium text-cyan-300 transition-all duration-300 group-hover:gap-3">

                      Register Now

                      <ArrowRight size={18} />

                    </button>

                  </div>

                </div>

              </GlassCard>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}