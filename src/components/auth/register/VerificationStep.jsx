import { Mail, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";

export default function VerificationStep({
  formData,
  setFormData,
}) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const updateOTP = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const otp = formData.otp.padEnd(6, " ").split("");

    otp[index] = value;

    setFormData({
      ...formData,
      otp: otp.join("").trim(),
    });

    if (value && index < 5) {
      document.getElementById(
        `otp-${index + 1}`
      )?.focus();
    }
  };

  return (
    <div>

      <div className="mb-8 flex justify-center">
        <Mail size={65} className="text-cyan-400" />
      </div>

      <h2 className="text-center text-3xl font-bold text-white">
        Verify Email
      </h2>

      <p className="mt-3 text-center text-zinc-400">
        Enter the 6-digit verification code sent to

        <br />

        <span className="font-semibold text-cyan-300">
          {formData.email}
        </span>
      </p>

      <div className="mt-10 flex justify-center gap-3">

        {Array.from({ length: 6 }).map((_, index) => (

          <input
            key={index}
            id={`otp-${index}`}
            maxLength={1}
            value={formData.otp[index] || ""}
            onChange={(e) =>
              updateOTP(index, e.target.value)
            }
            className="h-14 w-14 rounded-xl border border-white/10 bg-[#111827] text-center text-xl text-white outline-none focus:border-cyan-400"
          />

        ))}

      </div>

      <div className="mt-10 text-center">

        {timer > 0 ? (

          <p className="text-zinc-400">
            Resend OTP in {timer}s
          </p>

        ) : (

          <button
            onClick={() => setTimer(30)}
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200"
          >
            <RotateCcw size={16} />

            Resend OTP
          </button>

        )}

      </div>

    </div>
  );
}