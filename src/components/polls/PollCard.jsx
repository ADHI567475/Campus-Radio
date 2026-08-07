import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function PollCard({
  question,
  options = [],
  initialVotes = [],
}) {
  const defaultVotes = Array(options.length).fill(0);

  const [votes, setVotes] = useState(
    initialVotes.length === options.length
      ? initialVotes
      : defaultVotes
  );

  const [selectedOption, setSelectedOption] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const totalVotes = votes.reduce((sum, vote) => sum + vote, 0);

  const handleVote = () => {
    if (selectedOption === null || hasVoted) return;

    const updatedVotes = [...votes];
    updatedVotes[selectedOption] += 1;

    setVotes(updatedVotes);
    setHasVoted(true);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <h2 className="text-2xl font-bold text-white">{question}</h2>

      <p className="mt-2 text-zinc-400">{totalVotes} votes</p>

      <div className="mt-8 space-y-4">
        {options.map((option, index) => {
          const percentage =
            totalVotes === 0 ? 0 : (votes[index] / totalVotes) * 100;

          return (
            <div key={index}>
              {!hasVoted ? (
                <button
                  onClick={() => setSelectedOption(index)}
                  className={`flex w-full items-center justify-between rounded-2xl border p-4 transition ${
                    selectedOption === index
                      ? "border-violet-500 bg-violet-500/20"
                      : "border-white/10 bg-white/5 hover:border-violet-500"
                  }`}
                >
                  <span className="text-white">{option}</span>

                  <div
                    className={`h-5 w-5 rounded-full border-2 transition ${
                      selectedOption === index
                        ? "border-violet-500 bg-violet-500"
                        : "border-zinc-500"
                    }`}
                  />
                </button>
              ) : (
                <>
                  <div className="mb-2 flex justify-between">
                    <span className="text-white">{option}</span>

                    {selectedOption === index && (
                      <CheckCircle2 size={18} className="text-green-400" />
                    )}
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.8 }}
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                    />
                  </div>

                  <p className="mt-2 text-right text-sm text-zinc-400">
                    {percentage.toFixed(0)}%
                  </p>
                </>
              )}
            </div>
          );
        })}
      </div>

      {!hasVoted ? (
        <button
          onClick={handleVote}
          disabled={selectedOption === null}
          className="mt-8 w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Vote
        </button>
      ) : (
        <p className="mt-8 text-center font-medium text-green-400">
          ✅ Thank you for voting! You can only vote once.
        </p>
      )}
    </div>
  );
}