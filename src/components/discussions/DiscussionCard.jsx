import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Trash2,
  Send,
} from "lucide-react";

export default function DiscussionCard({
  author,
  category,
  content,
  likes,
  comments = [],
  commentsCount,
  onLike,
  onDelete,
  onComment,
}) {
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");

  const addNewComment = () => {
    if (!comment.trim()) return;

    onComment(comment);
    setComment("");
  };

  const sharePost = async () => {
    const text = `${content}\n\nShared from Pulse FM`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Pulse FM Discussion",
          text,
        });
      } catch {}
    } else {
      await navigator.clipboard.writeText(text);
      alert("Post copied to clipboard!");
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-white">{author}</h3>
          <p className="text-sm text-violet-400">{category}</p>
        </div>

        <span className="text-xs text-white/50">
          2 min ago
        </span>
      </div>

      {/* Content */}
      <p className="leading-relaxed text-white/80">
        {content}
      </p>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap items-center gap-6">
        <button
          onClick={onLike}
          className="flex items-center gap-2 text-white/70 transition hover:text-red-400"
        >
          <Heart size={18} />
          {likes}
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 text-white/70 transition hover:text-cyan-400"
        >
          <MessageCircle size={18} />
          {commentsCount}
        </button>

        <button
          onClick={sharePost}
          className="flex items-center gap-2 text-white/70 transition hover:text-violet-400"
        >
          <Share2 size={18} />
          Share
        </button>

        <button
          onClick={onDelete}
          className="ml-auto flex items-center gap-2 text-white/50 transition hover:text-red-500"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* Comments */}
      {showComments && (
        <div className="mt-6 border-t border-white/10 pt-5">
          <div className="space-y-3">
            {comments.length === 0 ? (
              <p className="text-sm text-zinc-500">
                No comments yet.
              </p>
            ) : (
              comments.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl bg-white/5 p-3 text-sm text-white"
                >
                  {item.text}
                </div>
              ))
            )}
          </div>

          <div className="mt-4 flex gap-3">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-violet-500 focus:outline-none"
            />

            <button
              onClick={addNewComment}
              className="rounded-xl bg-violet-600 px-4 transition hover:bg-violet-500"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}