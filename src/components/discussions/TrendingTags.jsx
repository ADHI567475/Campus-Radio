const tags = [
  "#Placements",
  "#Hackathon",
  "#Memes",
  "#Hostel",
  "#TechFest",
  "#Exams",
];

export default function TrendingTags() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

      <h2 className="mb-4 text-xl font-bold text-white">
        Trending
      </h2>

      <div className="flex flex-wrap gap-3">

        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-violet-600/20 px-4 py-2 text-violet-300"
          >
            {tag}
          </span>
        ))}

      </div>

    </div>
  );
}