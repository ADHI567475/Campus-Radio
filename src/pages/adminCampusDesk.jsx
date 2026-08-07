import SectionHeader from "../components/ui/SectionHeader";
import { Check, X, Eye } from "lucide-react";
import { useNews } from "../context/NewsContext";

export default function AdminCampusDesk() {
  const {
    news,
    approveNews,
    rejectNews,
  } = useNews();

  const pendingNews = news.filter(
    (item) => !item.approved
  );

  return (
    <div className="min-h-screen bg-[#080B14] px-6 pt-32 pb-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          badge="🛡 ADMIN"
          title="Campus Desk"
          highlight="Approval"
          description="Review every submission before it reaches Campus News."
        />

        {pendingNews.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <h2 className="text-2xl font-bold text-white">
              🎉 No Pending Submissions
            </h2>

            <p className="mt-3 text-zinc-400">
              Everything has been reviewed.
            </p>
          </div>
        ) : (
          <div className="mt-12 space-y-6">
            {pendingNews.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:border-cyan-400"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                      {item.category}
                    </span>

                    <h2 className="mt-4 text-2xl font-bold text-white">
                      {item.title}
                    </h2>

                    <p className="mt-4 leading-7 text-zinc-300">
                      {item.description}
                    </p>

                    <p className="mt-4 text-sm text-zinc-500">
                      Submitted by {item.author}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      className="rounded-xl bg-white/10 p-3 transition hover:bg-white/20"
                      title="Preview"
                    >
                      <Eye />
                    </button>

                    <button
                      onClick={() => approveNews(item.id)}
                      className="rounded-xl bg-green-600 p-3 transition hover:bg-green-500"
                      title="Approve"
                    >
                      <Check />
                    </button>

                    <button
                      onClick={() => rejectNews(item.id)}
                      className="rounded-xl bg-red-600 p-3 transition hover:bg-red-500"
                      title="Reject"
                    >
                      <X />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}