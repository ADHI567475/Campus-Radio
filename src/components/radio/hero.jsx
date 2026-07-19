import { Play, Radio, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto flex max-w-5xl flex-col items-center text-center"
      >

        <Radio className="mb-6 h-16 w-16 text-violet-500" />

        <h1 className="text-6xl font-extrabold tracking-tight text-white">
          Your Campus.
        </h1>

        <h1 className="mb-6 text-6xl font-extrabold text-violet-500">
          Your Voice.
        </h1>

        <p className="max-w-xl text-lg text-zinc-400">
          Tune into live campus broadcasts, participate in polls,
          share anonymous thoughts, and stay updated with every event.
        </p>

        <div className="mt-10 flex items-center gap-4">

          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-lg"
          >
            <Play className="mr-2 h-5 w-5 fill-white" />
            Listen Live
          </Button>

        </div>

        <div className="mt-8 flex items-center gap-2 text-zinc-400">
          <Users className="h-5 w-5" />
          438 Students Listening
        </div>

      </motion.div>
    </section>
  );
}