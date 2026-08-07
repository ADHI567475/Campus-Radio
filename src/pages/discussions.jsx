import { useMemo, useState } from "react";

import CreatePost from "../components/discussions/CreatePost";
import DiscussionCard from "../components/discussions/DiscussionCard";
import TrendingTags from "../components/discussions/TrendingTags";

import { useDiscussion } from "../context/DiscussionContext";

export default function Discussions() {
  const {
    posts,
    addPost,
    likePost,
    deletePost,
    addComment,
  } = useDiscussion();

  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        post.content.toLowerCase().includes(search.toLowerCase()) ||
        post.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [posts, search]);

  const createPost = (newPost) => {
    addPost(newPost);
  };

  return (
    <div className="min-h-screen bg-[#080B14] px-6 pt-32 pb-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
        {/* Left */}
        <div className="space-y-8 lg:col-span-2">
          <CreatePost onCreatePost={createPost} />

          <input
            type="text"
            placeholder="Search discussions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white placeholder:text-zinc-500 focus:border-violet-500 focus:outline-none"
          />

          {filteredPosts.map((post) => (
            <DiscussionCard
              key={post.id}
              {...post}
              commentsCount={
                Array.isArray(post.comments)
                  ? post.comments.length
                  : post.comments
              }
              onLike={() => likePost(post.id)}
              onDelete={() => deletePost(post.id)}
              onComment={(text) => addComment(post.id, text)}
            />
          ))}
        </div>

        {/* Right */}
        <div className="space-y-8">
          <TrendingTags />
        </div>
      </div>
    </div>
  );
}