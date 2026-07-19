import { motion } from "framer-motion";
import { Heart, ThumbsUp, Laugh, UserCircle2 } from "lucide-react";

export default function ThoughtCard({
  text,
  likes,
  hearts,
  laughs,
  time,
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <UserCircle2 className="text-violet-400" size={36} />

          <div>
            <h3 className="font-semibold text-white">
              Anonymous
            </h3>

            <p className="text-xs text-zinc-400">
              {time}
            </p>
          </div>
        </div>
      </div>

      <p className="leading-7 text-zinc-300">
        {text}
      </p>

      <div className="mt-6 flex gap-6 text-zinc-400">

        <div className="flex items-center gap-2">
          <ThumbsUp size={18}/>
          {likes}
        </div>

        <div className="flex items-center gap-2">
          <Heart size={18}/>
          {hearts}
        </div>

        <div className="flex items-center gap-2">
          <Laugh size={18}/>
          {laughs}
        </div>

      </div>
    </motion.div>
  );
}