import { motion } from "framer-motion";

export default function ProgressBar() {
  return (
    <div className="mt-8">
      <div className="mb-2 flex justify-between text-sm text-zinc-400">
        <span>12:14</span>
        <span>60:00</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          className="h-full rounded-full bg-violet-600"
          initial={{ width: 0 }}
          animate={{ width: "35%" }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}