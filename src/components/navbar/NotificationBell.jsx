import { useState } from "react";
import { Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NotificationDropdown from "./NotificationDropdown";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);

  const unread = 5;

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="group relative rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(124,58,237,0.25)]"
      >

        <motion.div
          whileHover={{ rotate: 12 }}
          whileTap={{ scale: 0.9 }}
        >
          <Bell
            size={20}
            className="text-white"
          />
        </motion.div>

        <AnimatePresence>

          {unread > 0 && (

            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white"
            >
              {unread}
            </motion.span>

          )}

        </AnimatePresence>

      </button>

      <AnimatePresence>

        {open && (
          <NotificationDropdown
            onClose={() => setOpen(false)}
          />
        )}

      </AnimatePresence>

    </div>
  );
}