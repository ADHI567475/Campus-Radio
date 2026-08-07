import { useState } from "react";

export default function CreatePost({ onCreatePost }) {
  const [post, setPost] = useState("");
  const [category, setCategory] = useState("#General");

  const handleSubmit = () => {
    if (!post.trim()) return;

    onCreatePost({
      author: "You",
      category,
      content: post,
    });

    setPost("");
    setCategory("#General");
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h2 className="mb-5 text-xl font-bold text-white">
        Create Discussion
      </h2>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-4 w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white outline-none"
      >
        <option className="bg-[#080B14]">#General</option>
        <option className="bg-[#080B14]">#Placements</option>
        <option className="bg-[#080B14]">#Hackathon</option>
        <option className="bg-[#080B14]">#Hostel</option>
        <option className="bg-[#080B14]">#Academics</option>
      </select>

      <textarea
        rows={4}
        value={post}
        onChange={(e) => setPost(e.target.value)}
        placeholder="Share something with the campus..."
        className="w-full rounded-xl border border-white/10 bg-white/10 p-4 text-white outline-none placeholder:text-zinc-500"
      />

      <div className="mt-2 flex justify-between">
        <span className="text-sm text-zinc-500">
          {post.length}/300
        </span>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!post.trim()}
        className="mt-4 rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Post Discussion
      </button>
    </div>
  );
}