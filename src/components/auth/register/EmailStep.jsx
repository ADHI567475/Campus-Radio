import { Mail, CheckCircle2, XCircle } from "lucide-react";
import { isCollegeEmail } from "../../../utils/validators";

export default function EmailStep({
  formData,
  setFormData,
}) {
  const valid =
    formData.email.length > 0 &&
    isCollegeEmail(formData.email);

  return (
    <div>

      <div className="mb-8 flex justify-center">

        <Mail
          size={65}
          className="text-cyan-400"
        />

      </div>

      <h2 className="text-center text-3xl font-bold text-white">
        College Email
      </h2>

      <p className="mx-auto mt-3 max-w-md text-center text-zinc-400">
        Only official RGUKT email addresses
        can register on Campus Radio.
      </p>

      <input
        type="email"
        value={formData.email}
        placeholder="student@rguktn.ac.in"
        onChange={(e)=>
          setFormData({
            ...formData,
            email:e.target.value,
          })
        }
        className="mt-10 w-full rounded-2xl border border-white/10 bg-[#111827] p-4 text-white outline-none transition focus:border-cyan-400"
      />

      {formData.email.length>0 && (

        valid ?

        <div className="mt-5 flex items-center gap-2 text-green-400">

          <CheckCircle2 size={20}/>

          Valid College Email

        </div>

        :

        <div className="mt-5 flex items-center gap-2 text-red-400">

          <XCircle size={20}/>

          Only RGUKT emails are allowed.

        </div>

      )}

      <div className="mt-10 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5">

        <h3 className="font-semibold text-violet-300">

          Why only College Email?

        </h3>

        <p className="mt-3 text-sm leading-6 text-zinc-300">

          Campus Radio is an exclusive
          student community.

          Your email is used only for
          authentication and verification.

          It will never be visible to other users.

        </p>

      </div>

    </div>
  );
}