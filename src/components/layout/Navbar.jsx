import { useState } from "react";
import { User } from "lucide-react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Radio,
  Moon,
  Music2,
  Users,
  GraduationCap,
} from "lucide-react";

import Container from "../ui/Container";
import GlowButton from "../ui/GlowButton";

import NotificationBell from "../navbar/NotificationBell";
import LoginButton from "../navbar/LoginButton";
import LoginModal from "../navbar/LoginModal";

const navItems = ["Home", "Live", "Polls", "Events"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 pt-5">
      <Container>
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 shadow-[0_0_40px_rgba(124,58,237,0.15)] backdrop-blur-2xl"
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 shadow-lg">
              <Radio className="h-5 w-5 text-white" />

              <motion.span
                className="absolute inset-0 rounded-full border border-cyan-400"
                animate={{
                  scale: [1, 1.35],
                  opacity: [0.45, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-[15px] font-extrabold tracking-[0.22em] text-white">
                CAMPUS RADIO
              </h1>

              <div className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-zinc-400">
                <Music2 size={11} className="text-violet-400" />
                <span>Music</span>

                <span className="mx-1 text-white/25">•</span>

                <Users size={11} className="text-cyan-400" />
                <span>Community</span>

                <span className="mx-1 text-white/25">•</span>

                <GraduationCap
                  size={11}
                  className="text-violet-400"
                />
                <span>Campus</span>
              </div>

              <div className="mt-2 flex items-end gap-[3px]">
                {[8, 14, 10, 18, 12, 15].map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-[3px] rounded-full bg-gradient-to-t from-violet-500 via-fuchsia-400 to-cyan-400"
                    style={{
                      height: h,
                      transformOrigin: "bottom",
                    }}
                    animate={{
                      scaleY: [1, 1.12, 1],
                    }}
                    transition={{
                      duration: 4.5,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ scale: 1.02 }}
                className={`relative rounded-full px-4 py-2 text-[15px] font-medium tracking-wide transition ${
                  index === 0
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item}

                {index === 0 && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10"
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden items-center gap-3 md:flex">
        

            <NotificationBell />

            <button className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
              <Moon className="h-4 w-4 text-white" />
            </button>

           <button
  onClick={() => setLoginOpen(true)}
  className="rounded-full border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:border-violet-400/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(124,58,237,0.25)]"
>
  <User className="h-5 w-5 text-white" />
</button>

            {/* <GlowButton>
              Listen Now
            </GlowButton> */}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </motion.nav>
                {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="mt-3 rounded-3xl border border-white/10 bg-[#0b1020]/80 p-6 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/80 transition hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}

              <div className="my-2 h-px bg-white/10" />

              {/* LIVE Badge */}
              <div className="flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
                </span>

                <span className="text-xs font-semibold text-red-300">
                  LIVE
                </span>
              </div>

              {/* Notifications */}
              <NotificationBell />

              {/* Theme Button */}
              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-white transition hover:bg-white/10">
                <Moon size={18} />
                Theme
              </button>

              {/* Login */}
              <LoginButton />

              {/* Listen Button */}
              <GlowButton className="w-full">
                Listen Now
              </GlowButton>
            </div>
          </motion.div>
        )}
      </Container>
      <LoginModal
  open={loginOpen}
  onClose={() => setLoginOpen(false)}
/>
    </header>
  );
}