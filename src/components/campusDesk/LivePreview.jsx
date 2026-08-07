import { CalendarDays, MapPin, User } from "lucide-react";

export default function LivePreview({ form, tags }) {
  return (
    <div className="sticky top-32 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-cyan-300">
        📰 Live Preview
      </p>

      {/* Image */}
      {form.image ? (
        <img
          src={form.image}
          alt="Preview"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
          className="h-56 w-full rounded-2xl object-cover"
        />
      ) : (
        <div className="flex h-56 items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#111827] text-zinc-500">
          Image Preview
        </div>
      )}

      {/* Category */}
      <div className="mt-5">
        <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-300">
          {form.category}
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-5 text-2xl font-bold text-white">
        {form.title || "Your headline appears here..."}
      </h2>

      {/* Description */}
      <p className="mt-4 leading-7 text-zinc-400">
        {form.description ||
          "Start typing your description to see a live preview of your article."}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-violet-500/15 px-3 py-1 text-xs text-violet-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 border-t border-white/10 pt-5 space-y-3">

        <div className="flex items-center gap-2 text-zinc-400">
          <User size={16} />
          {form.anonymous ? "Anonymous" : "Student"}
        </div>

        <div className="flex items-center gap-2 text-zinc-400">
          <MapPin size={16} />
          {form.location || "Campus"}
        </div>

        <div className="flex items-center gap-2 text-zinc-400">
          <CalendarDays size={16} />
          Just now
        </div>

      </div>

    </div>
  );
}