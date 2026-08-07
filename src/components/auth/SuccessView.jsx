import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function SuccessView() {
  return (
    <div className="py-10 text-center">

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 12,
        }}
      >
        <CheckCircle2
          size={80}
          className="mx-auto text-green-400"
        />
      </motion.div>

      <h2 className="mt-6 text-3xl font-bold text-white">
        Welcome to Campus Radio!
      </h2>

      <p className="mt-3 text-zinc-400">
        Your account has been created successfully.
      </p>

      <div className="mt-8 rounded-2xl bg-green-500/10 p-5">
        <p className="text-green-300">
          Logging you in automatically...
        </p>
      </div>

    </div>
  );
}