import { useState } from "react";
import GlassCard from "../ui/GlassCard";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  MessageCircle,
  Flame,
  Clock,
  ArrowRight,
} from "lucide-react";

const stats = [
  { number: "1842", label: "Posts Today" },
  { number: "421", label: "Students Active" },
  { number: "58", label: "Trending Topics" },
];

const initialPosts = [
  {
    id: 1,
    category: "📚 Academics",
    time: "2h ago",
    content:
      "Can someone share yesterday's DSP notes? I missed the class due to a lab.",
    likes: 24,
    comments: 12,
    trending: false,
    liked: false,
  },
  {
    id: 2,
    category: "💻 Coding",
    time: "1h ago",
    content:
      "Who's joining tomorrow's coding contest? Looking for two teammates.",
    likes: 43,
    comments: 18,
    trending: true,
    liked: false,
  },
  {
    id: 3,
    category: "🎤 Campus Life",
    time: "45m ago",
    content:
      "We should organize an Open Mic this weekend. Anyone interested?",
    likes: 61,
    comments: 26,
    trending: false,
    liked: false,
  },
  {
    id: 4,
    category: "🪪 Lost & Found",
    time: "20m ago",
    content:
      "Lost my ID card near the library. Please DM if you find it.",
    likes: 17,
    comments: 9,
    trending: false,
    liked: false,
  },
];

export default function ThoughtsSection() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(initialPosts);

  const toggleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <GlassCard
              key={item.label}
              className="rounded-3xl p-8 text-center"
            >
              <h2 className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-4xl font-bold text-transparent">
                {item.number}
              </h2>

              <p className="mt-2 text-zinc-400">
                {item.label}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Header */}
        <div className="mt-20">
          <SectionHeader
            badge="💬 CAMPUS WALL"
            title="Campus"
            highlight="Conversations"
            description="Real thoughts. Real students. Real community."
          />
        </div>

        {/* Posts */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {posts.map((post, index) => (

            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              onClick={() => navigate("/discussions")}
              className="cursor-pointer"
            >

              <GlassCard className="group rounded-3xl p-7 transition-all duration-300">

                {/* Header */}
                <div className="flex items-start justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 font-bold text-white">
                      A
                    </div>

                    <div>

                      <p className="font-semibold text-white">
                        Anonymous
                      </p>

                      <div className="mt-1 flex items-center gap-2 text-xs text-zinc-400">
                        <Clock size={14} />
                        {post.time}
                      </div>

                    </div>

                  </div>

                  {post.trending && (
                    <div className="flex items-center gap-1 rounded-full bg-orange-500/10 px-3 py-1 text-xs text-orange-300">
                      <Flame size={14} />
                      Trending
                    </div>
                  )}

                </div>

                {/* Category */}
                <div className="mt-6">

                  <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-cyan-300">
                    {post.category}
                  </span>

                </div>

                {/* Content */}
                <p className="mt-6 text-lg leading-8 text-zinc-200">
                  {post.content}
                </p>

                {/* Footer */}
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

                  <div className="flex gap-6">

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(post.id);
                      }}
                      className={`flex items-center gap-2 transition ${
                        post.liked
                          ? "text-red-500"
                          : "text-zinc-400 hover:text-red-400"
                      }`}
                    >
                      <Heart
                        size={18}
                        fill={post.liked ? "currentColor" : "none"}
                      />
                      {post.likes}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/discussions");
                      }}
                      className="flex items-center gap-2 text-zinc-400 transition hover:text-cyan-400"
                    >
                      <MessageCircle size={18} />
                      {post.comments}
                    </button>

                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/discussions");
                    }}
                    className="flex items-center gap-2 text-cyan-300 transition-all duration-300 hover:text-cyan-200 group-hover:gap-3"
                  >
                    Read Discussion
                    <ArrowRight size={18} />
                  </button>

                </div>

              </GlassCard>

            </motion.div>

          ))}

        </div>

        {/* View All */}
        <div className="mt-16 flex justify-center">

          <button
            onClick={() => navigate("/discussions")}
            className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.35)]"
          >
            View All Discussions
          </button>

        </div>

      </div>
    </section>
  );
}