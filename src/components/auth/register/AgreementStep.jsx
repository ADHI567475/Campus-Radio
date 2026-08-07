import { ShieldCheck, FileText, UserCheck } from "lucide-react";

export default function AgreementStep({
  formData,
  setFormData,
}) {
  return (
    <div>

      <div className="mb-8 flex justify-center">
        <ShieldCheck
          size={65}
          className="text-green-400"
        />
      </div>

      <h2 className="text-center text-3xl font-bold text-white">
        Almost Ready!
      </h2>

      <p className="mt-3 text-center text-zinc-400">
        Please review your information before joining Campus Radio.
      </p>

      {/* Profile Preview */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-[#111827] p-6">

        <h3 className="mb-5 text-xl font-bold text-cyan-300">
          Your Campus Identity
        </h3>

        <div className="space-y-3 text-zinc-300">

          <p>
            <span className="font-semibold text-white">
              Nickname:
            </span>{" "}
            {formData.nickname}
          </p>

          <p>
            <span className="font-semibold text-white">
              Email:
            </span>{" "}
            {formData.email}
          </p>

          <p>
            <span className="font-semibold text-white">
              Gender:
            </span>{" "}
            {formData.gender}
          </p>

          <p>
            <span className="font-semibold text-white">
              Interests:
            </span>{" "}
            {formData.interests.join(", ")}
          </p>

        </div>

      </div>

      {/* Community Agreement */}

      <div className="mt-8 space-y-5">

        <label className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#111827] p-5">

          <input
            type="checkbox"
            checked={formData.agreement}
            onChange={(e)=>
              setFormData({
                ...formData,
                agreement:e.target.checked,
              })
            }
            className="mt-1"
          />

          <div>

            <div className="flex items-center gap-2">

              <FileText
                size={18}
                className="text-cyan-300"
              />

              <h4 className="font-semibold text-white">
                Community Guidelines
              </h4>

            </div>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              I will communicate respectfully, avoid abusive language,
              and not post content that harms or targets others. I understand
              that violating these rules may result in disciplinary action.
            </p>

          </div>

        </label>

        <div className="rounded-2xl border border-white/10 bg-[#111827] p-5">

          <div className="flex items-center gap-3">

            <UserCheck
              className="text-green-400"
            />

            <h4 className="font-semibold text-white">
              Privacy Assurance
            </h4>

          </div>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Your real identity will never be shown publicly.
            Administrators can access your account details only
            when investigating serious violations of platform rules.
          </p>

        </div>

      </div>

    </div>
  );
}