import { User } from "lucide-react";

export default function LoginButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(124,58,237,0.25)]"
    >
      <User
        size={18}
        className="transition-transform duration-300 group-hover:scale-110"
      />

      <span>Join Pulse FM</span>
    </button>
  );
}