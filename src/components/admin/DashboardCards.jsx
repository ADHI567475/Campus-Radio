import {
  Radio,
  Users,
  Bell,
  Newspaper,
} from "lucide-react";

const cards = [
  {
    title: "Broadcast",
    value: "LIVE",
    icon: Radio,
    color: "text-red-400",
  },
  {
    title: "Listeners",
    value: "128",
    icon: Users,
    color: "text-cyan-400",
  },
  {
    title: "Pending News",
    value: "07",
    icon: Newspaper,
    color: "text-yellow-400",
  },
  {
    title: "Notifications",
    value: "03",
    icon: Bell,
    color: "text-violet-400",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-zinc-400">
                  {card.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  {card.value}
                </h2>

              </div>

              <Icon
                className={card.color}
                size={32}
              />

            </div>
          </div>
        );
      })}

    </div>
  );
}