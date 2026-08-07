import { AnimatePresence, motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function LoginRequiredModal({
  open,
  onLogin,
  onClose,
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="w-full max-w-md rounded-3xl border border-white/10 bg-[#101424] p-8"
          >
            <div className="flex flex-col items-center">

              <div className="rounded-full bg-violet-600 p-5">
                <Lock
                  size={32}
                  className="text-white"
                />
              </div>

              <h2 className="mt-6 text-3xl font-bold text-white">
                Login Required
              </h2>

              <p className="mt-4 text-center text-zinc-400">
                Sign in using your RGUKT account
                to access this feature.
              </p>

              <div className="mt-8 flex w-full gap-4">

                <button
                  onClick={onClose}
                  className="flex-1 rounded-xl border border-white/10 py-3 text-white"
                >
                  Cancel
                </button>

                <button
                  onClick={onLogin}
                  className="flex-1 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3 font-semibold text-white"
                >
                  Login
                </button>

              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}