import PollCard from "../components/polls/PollCard";
import { Flame, Trophy } from "lucide-react";

export default function Polls() {
  return (
    <div className="min-h-screen bg-[#080B14] px-6 pt-32 pb-12">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 text-center">

          <h1 className="text-5xl font-bold text-white">
            Campus Polls
          </h1>

          <p className="mt-4 text-zinc-400">
            Vote on trending campus topics and see live results.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Polls */}
          <div className="space-y-8 lg:col-span-2">

            <PollCard
              question="Should Pulse FM start a weekly podcast?"
              options={["Yes", "No", "Maybe"]}
              initialVotes={[82, 24, 41]}
            />

            <PollCard
              question="Which event should be organized next?"
              options={[
                "Hackathon",
                "Gaming Tournament",
                "Music Night",
                "Tech Talk",
              ]}
              initialVotes={[45, 29, 37, 52]}
            />

            <PollCard
              question="Would you use anonymous discussions?"
              options={[
                "Definitely",
                "Sometimes",
                "No",
              ]}
              initialVotes={[68, 31, 12]}
            />

          </div>

          {/* Sidebar */}
          <div className="space-y-8">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

              <div className="mb-5 flex items-center gap-3">

                <Flame className="text-orange-400" />

                <h2 className="text-xl font-bold text-white">
                  Trending Poll
                </h2>

              </div>

              <p className="text-white">
                Which club should receive additional funding this semester?
              </p>

              <p className="mt-4 text-sm text-zinc-400">
                🔥 1,482 students voted
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

              <div className="mb-5 flex items-center gap-3">

                <Trophy className="text-yellow-400" />

                <h2 className="text-xl font-bold text-white">
                  Previous Winner
                </h2>

              </div>

              <p className="text-white">
                "Extend Library Hours"
              </p>

              <div className="mt-5 h-3 rounded-full bg-white/10">

                <div className="h-full w-[91%] rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />

              </div>

              <p className="mt-3 text-sm text-zinc-400">
                91% approval
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}