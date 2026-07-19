import { motion } from "framer-motion";

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
      <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300">
        {badge}
      </span>

      <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
        {title}{" "}
        <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-pink-400 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
        {description}
      </p>
    </motion.div>
  );
}