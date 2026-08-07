import { motion } from "framer-motion";
import { Radio } from "lucide-react";

export default function AuthHeader({
  title,
  subtitle,
  step,
  totalSteps,
}) {
  const progress =
    step && totalSteps
      ? (step / totalSteps) * 100
      : 0;

  return (
    <div className="mb-8">

      <div className="flex flex-col items-center">

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 shadow-lg"
        >
          <Radio className="text-white" />
        </motion.div>

        <h1 className="text-3xl font-black text-white">
          CAMPUS RADIO
        </h1>

        <p className="mt-2 text-center text-zinc-400">
          {subtitle}
        </p>

      </div>

      <div className="mt-8">

        <h2 className="text-center text-2xl font-bold text-white">
          {title}
        </h2>

        {step && totalSteps && (
          <>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">

              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
              />

            </div>

            <p className="mt-3 text-center text-sm text-cyan-300">
              Step {step} of {totalSteps}
            </p>
          </>
        )}

      </div>

    </div>
  );
}