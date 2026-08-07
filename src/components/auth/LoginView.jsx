import { useState } from "react";
import { Eye, EyeOff, LogIn, AlertCircle } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function LoginView({
  openRegister,
  openForgot,
}) {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleLogin = async () => {
    setError("");

    try {
      setLoading(true);

      await login(email, password);

    } catch (err) {

      setError(
        err.message ||
        "Login failed."
      );

    }

    setLoading(false);
  };

  return (
    <div>

      {/* Email */}

      <label className="mb-2 block text-white">
        College Email
      </label>

      <input
        type="email"
        placeholder="student@rguktn.ac.in"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="mb-5 w-full rounded-xl border border-white/10 bg-[#111827] p-4 text-white outline-none focus:border-cyan-400"
      />

      {/* Password */}

      <label className="mb-2 block text-white">
        Password
      </label>

      <div className="relative">

        <input
          type={
            showPassword
              ? "text"
              : "password"
          }
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-[#111827] p-4 pr-12 text-white outline-none focus:border-violet-400"
        />

        <button
          type="button"
          onClick={()=>
            setShowPassword(!showPassword)
          }
          className="absolute right-4 top-4 text-zinc-400"
        >
          {showPassword
            ? <EyeOff size={20}/>
            : <Eye size={20}/>
          }
        </button>

      </div>

      {/* Error */}

      {error && (

        <div className="mt-5 flex items-center gap-2 rounded-xl bg-red-500/10 p-4 text-red-400">

          <AlertCircle size={18}/>

          {error}

        </div>

      )}

      {/* Forgot */}

      <div className="mt-4 text-right">

        <button
          onClick={openForgot}
          className="text-sm text-cyan-300 hover:text-cyan-200"
        >
          Forgot Password?
        </button>

      </div>

      {/* Login */}

      <button
        onClick={handleLogin}
        disabled={loading}
        className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold text-white transition hover:scale-[1.02] disabled:opacity-60"
      >

        <LogIn size={20}/>

        {loading
          ? "Logging In..."
          : "Login"}

      </button>

      {/* Divider */}

      <div className="my-8 flex items-center gap-4">

        <div className="h-px flex-1 bg-white/10"/>

        <span className="text-zinc-500">
          OR
        </span>

        <div className="h-px flex-1 bg-white/10"/>

      </div>

      {/* Register */}

      <button
        onClick={openRegister}
        className="w-full rounded-xl border border-white/10 py-4 text-white transition hover:border-cyan-400 hover:bg-white/5"
      >
        Join Campus Radio
      </button>

    </div>
  );
}