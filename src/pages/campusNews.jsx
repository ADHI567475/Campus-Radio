import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../components/ui/SectionHeader";
import { useNews } from "../context/NewsContext";
import FeaturedNewsCarousel from "../components/news/FeaturedNewsCarousel";

export default function CampusNews() {
  const { news } = useNews();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const approvedNews = news.filter((item) => item.approved);

  const categories = [
    "All",
    ...new Set(approvedNews.map((item) => item.category)),
  ];

  const filteredNews = approvedNews.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const breakingNews =
    approvedNews.length > 0
      ? approvedNews[approvedNews.length - 1]
      : null;

  return (
    <div className="min-h-screen bg-[#080B14] px-6 pt-32 pb-16">
      <div className="mx-auto max-w-7xl">

        <SectionHeader
          badge="📰 CAMPUS NEWS"
          title="Explore"
          highlight="Campus"
          description="Verified announcements approved by Campus Desk."
        />

        {/* Search */}

        <div className="mt-12">
          <input
            type="text"
            placeholder="🔍 Search campus news..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-zinc-500 focus:border-cyan-400 focus:outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 transition ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-white"
                    : "border border-white/10 bg-white/5 text-zinc-300 hover:border-cyan-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Breaking News */}

        {/* {breakingNews && (
          <div
            onClick={() =>
              navigate(`/campus-news/${breakingNews.id}`)
            }
            className="mt-12 cursor-pointer overflow-hidden rounded-3xl border border-red-500/20 bg-red-500/10 transition duration-300 hover:border-red-400 hover:bg-red-500/20 hover:shadow-[0_0_35px_rgba(239,68,68,0.25)]"
          >
            <img
              src={breakingNews.image}
              alt={breakingNews.title}
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-300">
                🔴 Breaking News
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                {breakingNews.title}
              </h2>

              <p className="mt-4 leading-7 text-zinc-300">
                {breakingNews.description}
              </p>
            </div>
          </div>
        )} */}
        <FeaturedNewsCarousel news={approvedNews} />

        {/* News */}

        {filteredNews.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-12 text-center">
            <h2 className="text-3xl font-bold text-white">
              No News Found
            </h2>

            <p className="mt-4 text-zinc-400">
              Try another search or category.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  navigate(`/campus-news/${item.id}`)
                }
                className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="p-7">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                    {item.category}
                  </span>

                  <h2 className="mt-5 text-2xl font-bold text-white transition group-hover:text-cyan-300">
                    {item.title}
                  </h2>

                  <p className="mt-4 line-clamp-4 leading-7 text-zinc-400">
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-sm text-zinc-500">
                      {item.author}
                    </span>

                    <span className="text-sm text-zinc-500">
                      {item.date}
                    </span>
                  </div>

                  <div className="mt-5 font-medium text-cyan-300 transition group-hover:translate-x-1">
                    Read Full Article →
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