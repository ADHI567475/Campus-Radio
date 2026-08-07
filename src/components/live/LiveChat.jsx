import { useEffect, useRef, useState } from "react";
import { Send, Circle } from "lucide-react";
import { motion } from "framer-motion";

const initialMessages = [
  {
    id: 1,
    user: "Rahul",
    text: "Play Believer 🔥",
    time: "11:01",
  },
  {
    id: 2,
    user: "Anonymous",
    text: "Happy Birthday Priya ❤️",
    time: "11:02",
  },
  {
    id: 3,
    user: "Sneha",
    text: "RJ Maya is killing it today 😂",
    time: "11:03",
  },
];

export default function LiveChat() {
  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState("");

  // Reference to the scrollable chat container
  const chatRef = useRef(null);

  // Skip auto-scroll on the first render
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const now = new Date();

    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        user: "You",
        text: message,
        time,
      },
    ]);

    setMessage("");
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 p-5">
        <div>
          <h2 className="text-xl font-bold text-white">
            Live Chat
          </h2>

          <p className="mt-1 flex items-center gap-2 text-sm text-green-400">
            <Circle
              size={10}
              fill="currentColor"
              className="animate-pulse"
            />

            Chat is Live
          </p>
        </div>

        <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm text-violet-300">
          {messages.length} Messages
        </span>
      </div>

      {/* Messages */}
      <div
        ref={chatRef}
        className="h-[420px] overflow-y-auto space-y-4 p-5"
      >
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className={`rounded-2xl p-4 ${
              msg.user === "You"
                ? "ml-10 bg-violet-600/20"
                : "mr-10 bg-white/5"
            }`}
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="font-semibold text-cyan-300">
                {msg.user}
              </span>

              <span className="text-xs text-zinc-500">
                {msg.time}
              </span>
            </div>

            <p className="text-white">
              {msg.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-3 border-t border-white/10 p-5">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          placeholder="Send a live message..."
          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
        />

        <button
          onClick={sendMessage}
          className="rounded-xl bg-violet-600 p-4 transition hover:bg-violet-500"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}