import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

import AuthHeader from "./AuthHeader";

import LoginView from "./LoginView";
import RegisterView from "./RegisterView";
import ForgotPasswordView from "./ForgotPasswordView";
import VerifyEmailView from "./VerifyEmailView";
import SuccessView from "./SuccessView";

export default function AuthModal({
  open,
  onClose,
}) {
  const [mode, setMode] = useState("login");

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
            initial={{
              scale: 0.95,
              y: 20,
            }}
            animate={{
              scale: 1,
              y: 0,
            }}
            exit={{
              scale: 0.95,
              y: 20,
            }}
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#101424] p-8 shadow-2xl"
          >

            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full p-2 hover:bg-white/10"
            >
              <X className="text-white" />
            </button>

            <AuthHeader
              title={
                mode === "login"
                  ? "Welcome Back"
                  : "Create Account"
              }
              subtitle="Secure Student Portal"
            />

            {mode === "login" && (
              <LoginView
    openRegister={() => setMode("register")}
    openForgot={() => setMode("forgot")}
/>
            )}

            {mode === "register" && (
              <RegisterView
                back={() =>
                  setMode("login")
                }
              />
            )}

            {mode === "forgot" && (
              <ForgotPasswordView
                back={() =>
                  setMode("login")
                }
              />
            )}

            {mode === "verify" && (
              <VerifyEmailView />
            )}

            {mode === "success" && (
              <SuccessView />
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}