import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function LoginForm({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({
      email,
      password,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm text-zinc-300">
          College Email
        </label>

        <div className="flex items-center rounded-xl border border-white/10 bg-[#111827] px-4">
          <Mail
            size={18}
            className="text-zinc-400"
          />

          <input
            required
            type="email"
            placeholder="student@rguktn.ac.in"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-transparent p-4 text-white outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm text-zinc-300">
          Password
        </label>

        <div className="flex items-center rounded-xl border border-white/10 bg-[#111827] px-4">
          <Lock
            size={18}
            className="text-zinc-400"
          />

          <input
            required
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full bg-transparent p-4 text-white outline-none"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >
            {showPassword ? (
              <EyeOff className="text-zinc-400" />
            ) : (
              <Eye className="text-zinc-400" />
            )}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold text-white transition hover:scale-[1.02]"
      >
        Login
      </button>
    </form>
  );
}