import { motion } from "framer-motion";
import { Radio } from "lucide-react";

export default function FloatingRadio() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative mb-10 flex items-center justify-center"
    >
      {/* Wave 1 */}
      <motion.div
        animate={{
          scale: [1, 1.6],
          opacity: [0.35, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="absolute h-40 w-40 rounded-full border border-violet-400/40"
      />

      {/* Wave 2 */}
      <motion.div
        animate={{
          scale: [1, 2],
          opacity: [0.25, 0],
        }}
        transition={{
          duration: 2,
          delay: 0.6,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="absolute h-40 w-40 rounded-full border border-violet-400/30"
      />

      {/* Radio */}
      <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full border border-violet-500/30 bg-violet-600/20 backdrop-blur-xl shadow-[0_0_80px_rgba(139,92,246,0.5)]">
        <Radio size={64} className="text-violet-400" />
      </div>
    </motion.div>
  );
}