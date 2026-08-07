import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FeedCard({
  icon,
  title,
  subtitle,
  time,
  color,
  link,
}) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      onClick={() => navigate(link)}
      className="cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-400"
    >
      <div className="flex items-center justify-between">

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
        >
          {icon}
        </div>

        <ArrowRight className="text-zinc-500" />

      </div>

      <h2 className="mt-6 text-xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-3 text-zinc-400">
        {subtitle}
      </p>

      <p className="mt-6 text-sm text-cyan-300">
        {time}
      </p>

    </motion.div>
  );
}