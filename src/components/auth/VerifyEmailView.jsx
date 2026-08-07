import { Mail } from "lucide-react";

export default function VerifyEmailView() {
  return (
    <div className="py-10 text-center">

      <Mail
        size={70}
        className="mx-auto text-cyan-400"
      />

      <h2 className="mt-6 text-3xl font-bold text-white">
        Verify Your Email
      </h2>

      <p className="mt-3 text-zinc-400">
        A verification link has been sent to your
        RGUKT email address.
      </p>

      <div className="mt-8 rounded-2xl bg-cyan-500/10 p-5">
        <p className="text-cyan-300">
          Please verify your email to continue.
        </p>
      </div>

    </div>
  );
}