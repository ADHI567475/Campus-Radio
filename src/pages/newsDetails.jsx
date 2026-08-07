import { useParams, useNavigate } from "react-router-dom";
import { useNews } from "../context/NewsContext";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function NewsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { news } = useNews();

  const article = news.find((item) => item.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-[#080B14] flex items-center justify-center text-white">
        News not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080B14] px-6 pt-32 pb-16">
      <div className="mx-auto max-w-5xl">

        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-cyan-300 hover:text-cyan-200"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* Banner */}
        <div className="h-80 rounded-3xl bg-gradient-to-r from-violet-600 to-cyan-500" />

        {/* Category */}
        <span className="mt-8 inline-block rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300">
          {article.category}
        </span>

        {/* Title */}
        <h1 className="mt-6 text-5xl font-bold text-white">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="mt-6 flex gap-8 text-zinc-400">
          <div className="flex items-center gap-2">
            <User size={18} />
            {article.author}
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={18} />
            {article.date}
          </div>
        </div>

        {/* Article */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 leading-8 text-zinc-300">
          {article.description}

          <br />
          <br />

          This page will later display the complete article, images,
          attachments, related news, and comments.
        </div>
      </div>
    </div>
  );
}