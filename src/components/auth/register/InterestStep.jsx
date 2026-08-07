import { Sparkles } from "lucide-react";

const interests = [
  { icon: "🎵", name: "Music" },
  { icon: "💻", name: "Coding" },
  { icon: "⚡", name: "Electronics" },
  { icon: "🤖", name: "Robotics" },
  { icon: "🎮", name: "Gaming" },
  { icon: "📷", name: "Photography" },
  { icon: "🎬", name: "Movies" },
  { icon: "🏏", name: "Sports" },
  { icon: "📚", name: "Literature" },
  { icon: "🎨", name: "Art" },
  { icon: "💃", name: "Dance" },
  { icon: "🎤", name: "Singing" },
  { icon: "🎭", name: "Drama" },
  { icon: "💼", name: "Entrepreneurship" },
  { icon: "📖", name: "Reading" },
  { icon: "✈️", name: "Travel" },
];

export default function InterestStep({
  formData,
  setFormData,
}) {
  const toggleInterest = (interest) => {
    const exists = formData.interests.includes(interest);

    if (exists) {
      setFormData({
        ...formData,
        interests: formData.interests.filter(
          (i) => i !== interest
        ),
      });
    } else {
      if (formData.interests.length >= 6) return;

      setFormData({
        ...formData,
        interests: [
          ...formData.interests,
          interest,
        ],
      });
    }
  };

  return (
    <div>

      <div className="mb-8 flex justify-center">
        <Sparkles
          size={65}
          className="text-cyan-400"
        />
      </div>

      <h2 className="text-center text-3xl font-bold text-white">
        Select Your Interests
      </h2>

      <p className="mt-3 text-center text-zinc-400">
        Choose at least
        <span className="font-bold text-cyan-300">
          {" "}3{" "}
        </span>
        interests.

        <br />

        Maximum
        <span className="font-bold text-violet-300">
          {" "}6{" "}
        </span>
        interests.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">

        {interests.map((interest) => {

          const selected =
            formData.interests.includes(
              interest.name
            );

          return (
            <button
              key={interest.name}
              onClick={() =>
                toggleInterest(interest.name)
              }
              className={`rounded-full border px-5 py-3 transition-all duration-300 ${
                selected
                  ? "border-cyan-400 bg-cyan-500/20 text-cyan-300 scale-105"
                  : "border-white/10 bg-[#111827] text-white hover:border-cyan-400"
              }`}
            >
              <span className="mr-2">
                {interest.icon}
              </span>

              {interest.name}
            </button>
          );

        })}

      </div>

      <div className="mt-10 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5">

        <h3 className="font-semibold text-violet-300">
          Selected
        </h3>

        <p className="mt-2 text-zinc-300">

          {formData.interests.length}

          {" "}of 6 selected

        </p>

      </div>

    </div>
  );
}