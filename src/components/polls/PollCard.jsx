import { motion } from "framer-motion";

const options = [
  { emoji: "🎤", name: "Cultural Fest", votes: 62 },
  { emoji: "💻", name: "Hackathon", votes: 28 },
  { emoji: "🏏", name: "Sports Meet", votes: 10 },
];

export default function PollCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <h3 className="text-2xl font-bold text-white">
        Which event are you most excited for?
      </h3>

      <p className="mt-2 text-zinc-400">
        327 students have voted
      </p>

      <div className="mt-8 space-y-6">
        {options.map((option) => (
          <div key={option.name}>
            <div className="mb-2 flex justify-between">
              <span className="text-white">
                {option.emoji} {option.name}
              </span>

              <span className="text-violet-400">
                {option.votes}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                className="h-full rounded-full bg-violet-600"
                initial={{ width: 0 }}
                whileInView={{ width: `${option.votes}%` }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 w-full rounded-full bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-500">
        Vote Now
      </button>
    </div>
  );
}