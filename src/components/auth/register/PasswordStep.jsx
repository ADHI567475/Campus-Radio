import { Lock, CheckCircle2 } from "lucide-react";
import { getPasswordStrength } from "../../../utils/validators";

export default function PasswordStep({
  formData,
  setFormData,
}) {
  const strength = getPasswordStrength(formData.password);

  return (
    <div>

      <div className="mb-8 flex justify-center">

        <Lock
          size={65}
          className="text-violet-400"
        />

      </div>

      <h2 className="text-center text-3xl font-bold text-white">
        Create a Password
      </h2>

      <p className="mx-auto mt-3 max-w-md text-center text-zinc-400">
        Your password protects your Campus
        Radio account.
      </p>

      <input
        type="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={(e)=>
          setFormData({
            ...formData,
            password:e.target.value,
          })
        }
        className="mt-10 w-full rounded-2xl border border-white/10 bg-[#111827] p-4 text-white outline-none focus:border-violet-400"
      />

      <div className="mt-8">

        <div className="h-3 overflow-hidden rounded-full bg-white/10">

          <div
            className={`h-full transition-all duration-300 ${strength.color}`}
            style={{
              width:`${strength.score}%`,
            }}
          />

        </div>

        <p className="mt-3 text-center font-semibold text-cyan-300">
          {strength.label}
        </p>

      </div>

      <div className="mt-8 space-y-3">

        <Requirement
          ok={formData.password.length>=8}
          text="Minimum 8 Characters"
        />

        <Requirement
          ok={/[A-Z]/.test(formData.password)}
          text="One Uppercase Letter"
        />

        <Requirement
          ok={/[a-z]/.test(formData.password)}
          text="One Lowercase Letter"
        />

        <Requirement
          ok={/[0-9]/.test(formData.password)}
          text="One Number"
        />

        <Requirement
          ok={/[!@#$%^&*]/.test(formData.password)}
          text="One Special Character"
        />

      </div>

    </div>
  );
}

function Requirement({
  ok,
  text,
}) {
  return (
    <div
      className={`flex items-center gap-3 ${
        ok
          ? "text-green-400"
          : "text-zinc-500"
      }`}
    >

      <CheckCircle2 size={18}/>

      {text}

    </div>
  );
}