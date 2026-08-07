import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, UserCircle2 } from "lucide-react";

export default function NicknameStep({
  formData,
  setFormData,
}) {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!formData.nickname) {
      setStatus("");
      return;
    }

    const timer = setTimeout(() => {
      // Mock check (replace with backend API later)

      const takenNames = [
        "admin",
        "campusradio",
        "ece",
        "rgukt",
        "student",
      ];

      if (
        takenNames.includes(
          formData.nickname.toLowerCase()
        )
      ) {
        setStatus("taken");
      } else {
        setStatus("available");
      }
    }, 600);

    return () => clearTimeout(timer);

  }, [formData.nickname]);

  return (
    <div>

      <div className="mb-8 flex justify-center">

        <UserCircle2
          size={70}
          className="text-cyan-400"
        />

      </div>

      <h2 className="text-center text-3xl font-bold text-white">
        Choose a Nickname
      </h2>

      <p className="mx-auto mt-3 max-w-md text-center text-zinc-400">
        Your nickname is what everyone on Campus Radio
        will see.

        <br />

        <span className="text-cyan-300 font-medium">
          Do not use your real name.
        </span>
      </p>

      <input
        value={formData.nickname}
        onChange={(e) =>
          setFormData({
            ...formData,
            nickname: e.target.value,
          })
        }
        placeholder="Enter a unique nickname..."
        className="mt-10 w-full rounded-2xl border border-white/10 bg-[#111827] p-4 text-white outline-none transition focus:border-cyan-400"
      />

      {status === "available" && (
        <div className="mt-5 flex items-center gap-2 text-green-400">

          <CheckCircle2 size={20} />

          Available

        </div>
      )}

      {status === "taken" && (
        <div className="mt-5 flex items-center gap-2 text-red-400">

          <XCircle size={20} />

          Nickname already exists.

        </div>
      )}

      <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">

        <h3 className="font-semibold text-cyan-300">
          💡 Tip
        </h3>

        <p className="mt-2 text-sm leading-6 text-zinc-300">
          Choose something creative and memorable.
          Avoid using your actual name, roll number,
          phone number or any personal information.
        </p>

      </div>

    </div>
  );
}