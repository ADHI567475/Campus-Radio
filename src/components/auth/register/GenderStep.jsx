import { ShieldAlert, Mars, Venus } from "lucide-react";

export default function GenderStep({
  formData,
  setFormData,
}) {
  const selectGender = (gender) => {
    setFormData({
      ...formData,
      gender,
    });
  };

  return (
    <div>

      <h2 className="text-center text-3xl font-bold text-white">
        Tell us about yourself
      </h2>

      <p className="mt-3 text-center text-zinc-400">
        This information helps personalize
        your Campus Radio experience.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-5">

        <button
          onClick={() => selectGender("Male")}
          className={`rounded-3xl border p-8 transition-all duration-300 ${
            formData.gender === "Male"
              ? "border-cyan-400 bg-cyan-500/10"
              : "border-white/10 bg-[#111827]"
          }`}
        >
          <Mars
            size={60}
            className="mx-auto text-cyan-400"
          />

          <h3 className="mt-5 text-xl font-bold text-white">
            Male
          </h3>

        </button>

        <button
          onClick={() => selectGender("Female")}
          className={`rounded-3xl border p-8 transition-all duration-300 ${
            formData.gender === "Female"
              ? "border-pink-400 bg-pink-500/10"
              : "border-white/10 bg-[#111827]"
          }`}
        >
          <Venus
            size={60}
            className="mx-auto text-pink-400"
          />

          <h3 className="mt-5 text-xl font-bold text-white">
            Female
          </h3>

        </button>

      </div>

      {formData.gender === "Female" && (

        <div className="mt-8 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-5">

          <div className="flex items-start gap-4">

            <ShieldAlert className="text-yellow-400" />

            <div>

              <h4 className="font-semibold text-yellow-300">
                Safety Reminder
              </h4>

              <p className="mt-2 text-sm leading-6 text-zinc-300">

                Please do not share personal
                information such as your phone
                number, address or social media
                accounts with unknown users.

                Campus Radio encourages anonymous
                and respectful interactions.

              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}