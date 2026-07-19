import { AnimatePresence, motion } from "framer-motion";
import { X, Radio } from "lucide-react";

export default function LoginModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 30, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative w-[430px] rounded-3xl border border-white/10 bg-[#101424] p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full p-2 hover:bg-white/10"
            >
              <X className="text-white" size={18} />
            </button>

            <div className="mb-8 flex flex-col items-center">
              <div className="mb-4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 p-4">
                <Radio className="text-white" />
              </div>

              <h2 className="text-3xl font-bold text-white">
               CAMPUS RADIO
              </h2>

              <p className="mt-2 text-center text-zinc-400">
                Join our campus radio community.
              </p>
            </div>

            <div className="space-y-4">
              <button className="w-full rounded-xl bg-white py-3 font-semibold text-black transition hover:scale-[1.02]">
                Continue with Google
              </button>

              <button className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-500">
                Continue with RGUKT Email
              </button>

              {/* <button
                onClick={onClose}
                className="w-full rounded-xl border border-white/10 py-3 text-white hover:bg-white/5"
              >
                Continue as Guest
              </button> */}
            </div>

            <div className="mt-8 rounded-2xl bg-white/5 p-5">
              {/* <h3 className="mb-3 font-semibold text-white">
                Join NOW !
              </h3> */}

              {/* <ul className="space-y-2 text-sm text-zinc-400">
                <li>🎵 Request Songs</li>
                <li>💬 Live Chat</li>
                <li>🗳 Vote in Polls</li>
                <li>🔔 Receive Notifications</li>
              </ul> */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}