import { useState } from "react";
import { X } from "lucide-react";

export default function TagInput({ tags, setTags }) {
  const [value, setValue] = useState("");

  const addTag = () => {
    const tag = value.trim();

    if (!tag) return;
    if (tags.includes(tag)) return;

    setTags([...tags, tag]);
    setValue("");
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div>
      <label className="mb-2 block text-white">
        Tags
      </label>

      <div className="rounded-xl border border-white/10 bg-[#111827] p-3">
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-2 rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-300"
            >
              #{tag}

              <button
                type="button"
                onClick={() => removeTag(tag)}
              >
                <X size={14} />
              </button>
            </span>
          ))}
        </div>

        <input
          value={value}
          placeholder="Press Enter to add tags..."
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTag();
            }
          }}
          className="w-full bg-transparent text-white outline-none"
        />
      </div>
    </div>
  );
}