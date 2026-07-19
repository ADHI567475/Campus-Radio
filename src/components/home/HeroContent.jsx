import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-3xl"
    >
      <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
        🔴 LIVE NOW
      </span>

      <h1 className="mt-8 text-6xl font-black tracking-tight text-white md:text-8xl">
        Your Campus.
        <br />
        Your Voice.
      </h1>

      <p className="mt-6 text-lg text-zinc-400">
        The heartbeat of student life. Listen live, vote in polls,
        share anonymous thoughts, and stay connected.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <Button
          size="lg"
          className="rounded-full bg-violet-600 px-8 hover:bg-violet-500"
        >
          <Play className="mr-2 h-5 w-5 fill-current" />
          Listen Live
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="rounded-full"
        >
          Explore
        </Button>
      </div>

      <p className="mt-8 text-zinc-500">
        👥 438 Students Listening
      </p>
    </motion.div>
  );
}