import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function ForgotPasswordView({ back }) {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    alert("Password reset functionality will be connected to the backend.");
  };

  return (
    <div>

      <h2 className="mb-3 text-center text-3xl font-bold text-white">
        Forgot Password
      </h2>

      <p className="mb-8 text-center text-zinc-400">
        Enter your RGUKT email to receive a verification code.
      </p>

      <input
        type="email"
        placeholder="student@rguktn.ac.in"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-6 w-full rounded-xl border border-white/10 bg-[#111827] p-4 text-white outline-none focus:border-cyan-400"
      />

      <button
        onClick={handleReset}
        className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold text-white"
      >
        Send Verification Code
      </button>

      <button
        onClick={back}
        className="mt-5 flex items-center gap-2 text-cyan-300 hover:text-cyan-200"
      >
        <ArrowLeft size={18} />
        Back to Login
      </button>

    </div>
  );
}