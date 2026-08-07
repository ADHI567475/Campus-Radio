import {
  Users,
  MessageCircle,
  Clock3,
  TrendingUp,
} from "lucide-react";

export default function ListenerPanel() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="text-2xl font-bold text-white">
        Live Statistics
      </h2>

      <div className="mt-8 space-y-6">

        <div className="flex justify-between">

          <div className="flex items-center gap-3">
            <Users className="text-cyan-400" />
            <span className="text-white">
              Listeners
            </span>
          </div>

          <span className="font-bold text-white">
            126
          </span>

        </div>

        <div className="flex justify-between">

          <div className="flex items-center gap-3">
            <MessageCircle className="text-violet-400" />
            <span className="text-white">
              Messages
            </span>
          </div>

          <span className="font-bold text-white">
            42
          </span>

        </div>

        <div className="flex justify-between">

          <div className="flex items-center gap-3">
            <TrendingUp className="text-green-400" />
            <span className="text-white">
              Peak Listeners
            </span>
          </div>

          <span className="font-bold text-white">
            318
          </span>

        </div>

        <div className="flex justify-between">

          <div className="flex items-center gap-3">
            <Clock3 className="text-orange-400" />
            <span className="text-white">
              Duration
            </span>
          </div>

          <span className="font-bold text-white">
            00:12:42
          </span>

        </div>

      </div>

    </div>
  );
}