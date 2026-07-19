import { motion } from "framer-motion";
import clsx from "clsx";

export default function GlowButton({
  children,
  className = "",
  ...props
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={clsx(
        "rounded-full",
        "px-6 py-3",
        "font-semibold",
        "text-white",
        "bg-gradient-to-r from-violet-600 to-indigo-500",
        "shadow-lg shadow-violet-500/30",
        "transition-all duration-300",
        "hover:shadow-violet-500/50",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}