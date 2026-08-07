import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function SuccessCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-green-500/20 bg-green-500/10 p-6"
    >
      <div className="flex items-center gap-4">

        <CheckCircle2
          className="text-green-400"
          size={34}
        />

        <div>

          <h2 className="text-xl font-bold text-white">
            Submission Received
          </h2>

          <p className="mt-1 text-zinc-300">
            Your submission has been sent to Campus Desk and is awaiting admin review.
          </p>

        </div>

      </div>
    </motion.div>
  );
}