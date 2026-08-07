import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Radio } from "lucide-react";

import LoginForm from "./auth/LoginForm";
import GoogleButton from "./auth/GoogleButton";
import ForgotPassword from "./auth/ForgotPassword";
import LoginSuccess from "./auth/LoginSuccess";

export default function LoginModal({ open, onClose }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (credentials) => {
    console.log(credentials);

    // Backend integration later
    // await login(credentials)

    setLoggedIn(true);

    setTimeout(() => {
      setLoggedIn(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 25, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 25, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#101424] p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full p-2 transition hover:bg-white/10"
            >
              <X
                className="text-white"
                size={18}
              />
            </button>

            <div className="mb-8 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500">
                <Radio className="text-white" />
              </div>

              <h2 className="text-3xl font-bold text-white">
                Welcome Back
              </h2>

              <p className="mt-2 text-zinc-400">
                Sign in to continue to Campus Radio.
              </p>
            </div>

            {loggedIn ? (
              <LoginSuccess />
            ) : (
              <>
                <LoginForm onLogin={handleLogin} />

                <div className="my-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/10" />

                  <span className="text-sm text-zinc-500">
                    OR
                  </span>

                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <GoogleButton />

                <div className="mt-5 flex justify-between text-sm">
                  <ForgotPassword />

                  <button className="text-violet-300 transition hover:text-violet-200">
                    Create Account
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}