import { motion } from "framer-motion";
import { Radio, Music2, ArrowRight } from "lucide-react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black/20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            🚀 Join the Community
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white">
            Ready to Become
            <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              The Next Voice?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Whether you love music, storytelling, podcasts, or organizing
            campus events, Pulse FM is your place to shine.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <button
              onClick={() => navigate("/campus-desk")}
              className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(124,58,237,0.35)]"
            >
              📰 Campus Desk
            </button>

            <button
              onClick={() => navigate("/live")}
              className="flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-white transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              Listen Live
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-20 border-t border-white/10"></div>

        {/* Footer Grid */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Radio className="text-cyan-300" />

              <div>
                <h3 className="text-xl font-bold text-white">
                  CAMPUS RADIO
                </h3>

                <p className="text-sm text-zinc-400">
                  Music • Community • Campus
                </p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-zinc-400">
              Bringing students together through music, ideas,
              discussions and unforgettable campus experiences.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-white">
              Explore
            </h4>

            <div className="mt-5 space-y-3">

              <button
                onClick={() => navigate("/live")}
                className="block text-zinc-400 transition duration-300 hover:translate-x-2 hover:text-cyan-300"
              >
                Live Radio
              </button>

              <button
                onClick={() => navigate("/campus-news")}
                className="block text-zinc-400 transition duration-300 hover:translate-x-2 hover:text-cyan-300"
              >
                Explore Campus
              </button>

              <button
                onClick={() => navigate("/discussions")}
                className="block text-zinc-400 transition duration-300 hover:translate-x-2 hover:text-cyan-300"
              >
                Pulse Wall
              </button>

              <button
                onClick={() => navigate("/polls")}
                className="block text-zinc-400 transition duration-300 hover:translate-x-2 hover:text-cyan-300"
              >
                Polls
              </button>

              <button
                onClick={() => navigate("/events")}
                className="block text-zinc-400 transition duration-300 hover:translate-x-2 hover:text-cyan-300"
              >
                Events
              </button>

            </div>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-white">
              Community
            </h4>

            <div className="mt-5 space-y-3">

              <button
                onClick={() => navigate("/campus-desk")}
                className="block text-zinc-400 transition duration-300 hover:translate-x-2 hover:text-cyan-300"
              >
                Campus Desk
              </button>

              <button
                onClick={() => navigate("/events")}
                className="block text-zinc-400 transition duration-300 hover:translate-x-2 hover:text-cyan-300"
              >
                Open Mic
              </button>

              <button
                onClick={() => navigate("/events")}
                className="block text-zinc-400 transition duration-300 hover:translate-x-2 hover:text-cyan-300"
              >
                Podcasts
              </button>

              <button
                onClick={() => navigate("/profile")}
                className="block text-zinc-400 transition duration-300 hover:translate-x-2 hover:text-cyan-300"
              >
                Support
              </button>

            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white">
              Connect
            </h4>

            <div className="mt-5 flex gap-4">

              <button
                onClick={() =>
                  window.open("https://instagram.com", "_blank")
                }
                className="rounded-full bg-white/5 p-3 text-zinc-300 transition duration-300 hover:scale-110 hover:bg-violet-500 hover:text-white"
              >
                <FaInstagram size={20} />
              </button>

              <button
                onClick={() =>
                  window.open("https://linkedin.com", "_blank")
                }
                className="rounded-full bg-white/5 p-3 text-zinc-300 transition duration-300 hover:scale-110 hover:bg-violet-500 hover:text-white"
              >
                <FaLinkedin size={20} />
              </button>

              <button
                onClick={() =>
                  (window.location.href =
                    "mailto:campusradio@example.com")
                }
                className="rounded-full bg-white/5 p-3 text-zinc-300 transition duration-300 hover:scale-110 hover:bg-violet-500 hover:text-white"
              >
                <FaEnvelope size={20} />
              </button>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">

          <p>
            © 2026 CAMPUS RADIO. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <Music2 size={16} />
            <span>Made for Students.</span>
          </div>

        </div>
      </div>
    </footer>
  );
}