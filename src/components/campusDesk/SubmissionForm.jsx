import { Image } from "lucide-react";
import TagInput from "./TagInput";

const locations = [
  "Academic Block",
  "Library",
  "Auditorium",
  "Sports Ground",
  "Hostel",
  "Cafeteria",
  "Other",
];

export default function SubmissionForm({
  form,
  setForm,
  categories,
  tags,
  setTags,
  handleSubmit,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      {/* Title */}

      <label className="mb-2 block text-white">
        Title
      </label>

      <input
        required
        value={form.title}
        onChange={(e) =>
          setForm({
            ...form,
            title: e.target.value,
          })
        }
        placeholder="Enter a title..."
        className="mb-6 w-full rounded-xl border border-white/10 bg-[#111827] p-4 text-white outline-none focus:border-cyan-400"
      />

      {/* Category */}

      <label className="mb-2 block text-white">
        Category
      </label>

      <select
        value={form.category}
        onChange={(e) =>
          setForm({
            ...form,
            category: e.target.value,
          })
        }
        className="mb-6 w-full rounded-xl border border-white/10 bg-[#111827] p-4 text-white"
      >
        {categories.map((cat) => (
          <option
            key={cat}
            value={cat}
          >
            {cat}
          </option>
        ))}
      </select>

      {/* Description */}

      <label className="mb-2 block text-white">
        Description
      </label>

      <textarea
        rows={7}
        required
        maxLength={1200}
        value={form.description}
        onChange={(e) =>
          setForm({
            ...form,
            description: e.target.value,
          })
        }
        className="w-full rounded-xl border border-white/10 bg-[#111827] p-4 text-white outline-none focus:border-cyan-400"
      />

      <div className="mt-2 text-right text-sm text-zinc-500">
        {form.description.length}/1200
      </div>

      {/* Image */}

      <label className="mb-2 mt-6 flex items-center gap-2 text-white">
        <Image size={18} />
        Image URL
      </label>

      <input
        value={form.image}
        placeholder="https://..."
        onChange={(e) =>
          setForm({
            ...form,
            image: e.target.value,
          })
        }
        className="w-full rounded-xl border border-white/10 bg-[#111827] p-4 text-white"
      />

      {/* Location */}

      <label className="mb-2 mt-6 block text-white">
        Location
      </label>

      <select
        value={form.location}
        onChange={(e) =>
          setForm({
            ...form,
            location: e.target.value,
          })
        }
        className="w-full rounded-xl border border-white/10 bg-[#111827] p-4 text-white"
      >
        {locations.map((location) => (
          <option
            key={location}
            value={location}
          >
            {location}
          </option>
        ))}
      </select>

      <div className="mt-6">
        <TagInput
          tags={tags}
          setTags={setTags}
        />
      </div>

      <label className="mt-6 flex items-center gap-3 text-white">
        <input
          type="checkbox"
          checked={form.anonymous}
          onChange={(e) =>
            setForm({
              ...form,
              anonymous: e.target.checked,
            })
          }
        />

        Submit anonymously
      </label>

      <div className="mt-8 flex gap-4">

        <button
          type="button"
          className="rounded-full border border-white/10 px-7 py-4 text-white transition hover:border-cyan-400"
        >
          Save Draft
        </button>

        <button
          type="submit"
          className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
        >
          Submit for Review
        </button>

      </div>
    </form>
  );
}