import { motion } from "framer-motion";
import clsx from "clsx";

export default function GlassCard({
  children,
  className = "",
  hover = true,
}) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.01,
            }
          : {}
      }
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
      className={clsx(
        "rounded-[28px]",
        "border border-white/10",
        "bg-white/5",
        "backdrop-blur-2xl",
        "shadow-[0_8px_40px_rgba(0,0,0,0.35)]",
        "transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}