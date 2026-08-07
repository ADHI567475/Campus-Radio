import { CheckCircle2 } from "lucide-react";

export default function LoginSuccess() {
  return (
    <div className="rounded-2xl bg-green-500/10 p-5 text-center">

      <CheckCircle2
        className="mx-auto text-green-400"
        size={48}
      />

      <h2 className="mt-4 text-xl font-bold text-white">
        Login Successful
      </h2>

      <p className="mt-2 text-zinc-400">
        Redirecting...
      </p>

    </div>
  );
}