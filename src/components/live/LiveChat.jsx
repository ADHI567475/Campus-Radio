import { motion } from "framer-motion";
import {
  Send,
  Smile,
  Pin,
  ShieldCheck,
} from "lucide-react";

const messages = [
  {
    user: "RJ Aryan",
    text: "Welcome everyone ❤️ Tonight's show is all about your song requests!",
    rj: true,
  },
  {
    user: "Rahul",
    text: "Play Believer 🔥",
  },
  {
    user: "Ananya",
    text: "Happy Birthday to my best friend 🥳",
  },
  {
    user: "Ajay",
    text: "ECE rocks ❤️",
  },
  {
    user: "Meghana",
    text: "Can you dedicate Heat Waves to CSE girls 😂",
  },
  {
    user: "Sandeep",
    text: "Good evening everyone 👋",
  },
];

export default function LiveChat() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden"
    >
      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 p-5">

        <div>

          <div className="flex items-center gap-3">

            <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />

            <h2 className="text-xl font-bold text-white">
              Live Chat
            </h2>

          </div>

          <p className="mt-1 text-sm text-zinc-400">
            Chat with the RJs and fellow students
          </p>

        </div>

        <div className="rounded-full bg-violet-500/20 px-4 py-2 text-sm font-semibold text-violet-300">
          128 Online
        </div>

      </div>

      {/* Pinned */}

      <div className="flex items-center gap-3 border-b border-white/10 bg-violet-500/10 p-4">

        <Pin className="h-4 w-4 text-violet-300" />

        <p className="text-sm text-violet-200">
          Confession Night starts at 8 PM ❤️
        </p>

      </div>

      {/* Messages */}

      <div className="h-[420px] space-y-4 overflow-y-auto p-5">

        {messages.map((msg, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
            }}
            className="flex gap-3"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 font-bold text-white">

              {msg.user.charAt(0)}

            </div>

            <div className="flex-1">

              <div className="flex items-center gap-2">

                <span className="font-semibold text-white">

                  {msg.user}

                </span>

                {msg.rj && (
                  <span className="flex items-center gap-1 rounded-full bg-cyan-500/20 px-2 py-1 text-xs text-cyan-300">

                    <ShieldCheck size={12} />

                    RJ

                  </span>
                )}

              </div>

              <p className="mt-1 text-sm text-zinc-300">

                {msg.text}

              </p>

            </div>

          </motion.div>

        ))}

      </div>

      {/* Input */}

      <div className="border-t border-white/10 p-5">

        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">

          <Smile className="text-zinc-400" />

          <input
            placeholder="Login to join the conversation..."
            disabled
            className="flex-1 bg-transparent text-white placeholder:text-zinc-500 outline-none"
          />

          <button className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 p-3 text-white transition hover:scale-105">

            <Send size={18} />

          </button>

        </div>

      </div>
    </motion.div>
  );
}