import GlassCard from "../ui/GlassCard";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  Clock,
  ArrowRight,
} from "lucide-react";

const polls = [
  {
    question: "Which event should Pulse FM host next?",
    totalVotes: 486,
    endsIn: "5h",
    options: [
      { name: "Hackathon", percent: 62 },
      { name: "Open Mic", percent: 38 },
    ],
  },
  {
    question: "Favorite study spot on campus?",
    totalVotes: 312,
    endsIn: "9h",
    options: [
      { name: "Library", percent: 48 },
      { name: "Innovation Lab", percent: 32 },
      { name: "Hostel Common Room", percent: 20 },
    ],
  },
  {
    question: "Friday Night music theme?",
    totalVotes: 674,
    endsIn: "12h",
    options: [
      { name: "Indie", percent: 35 },
      { name: "EDM", percent: 30 },
      { name: "Lo-Fi", percent: 20 },
      { name: "Retro", percent: 15 },
    ],
  },
];

export default function PollSection() {
  return (
    <section className="relative py-28">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="📊 POLLS"
          title="Campus"
          highlight="Opinion"
          description="Vote on today's biggest campus questions and see live results."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {polls.map((poll, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
            >

              <GlassCard className="group h-full rounded-3xl p-7">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2 text-cyan-300">

                    <BarChart3 size={18} />

                    <span className="text-sm font-medium">
                      Live Poll
                    </span>

                  </div>

                  <div className="flex items-center gap-2 text-xs text-zinc-400">

                    <Clock size={15} />

                    Ends in {poll.endsIn}

                  </div>

                </div>

                <h3 className="mt-6 text-xl font-bold text-white leading-8">
                  {poll.question}
                </h3>

                <div className="mt-8 space-y-5">

                  {poll.options.map((option) => (

                    <div key={option.name}>

                      <div className="mb-2 flex justify-between text-sm">

                        <span className="text-zinc-300">
                          {option.name}
                        </span>

                        <span className="font-semibold text-white">
                          {option.percent}%
                        </span>

                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">

                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${option.percent}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                          }}
                        />

                      </div>

                    </div>

                  ))}

                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

                  <div className="flex items-center gap-2 text-zinc-400">

                    <Users size={18} />

                    {poll.totalVotes} votes

                  </div>

                  <button className="flex items-center gap-2 text-cyan-300 transition group-hover:gap-3">

                    Vote

                    <ArrowRight size={18} />

                  </button>

                </div>

              </GlassCard>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}