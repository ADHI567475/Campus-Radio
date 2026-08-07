import { useState } from "react";
import SectionHeader from "../components/ui/SectionHeader";
import { useNews } from "../context/NewsContext";

import SubmissionForm from "../components/campusDesk/SubmissionForm";
import LivePreview from "../components/campusDesk/LivePreview";
import SuccessCard from "../components/campusDesk/SuccessCard";

const categories = [
  "Campus News",
  "Event Promotion",
  "Club Announcement",
  "Lost & Found",
  "Achievement",
  "Suggestion",
];

export default function CampusDesk() {
  const { addSubmission } = useNews();

  const [submitted, setSubmitted] = useState(false);

  const [tags, setTags] = useState([]);

  const [form, setForm] = useState({
    title: "",
    category: categories[0],
    description: "",
    image: "",
    anonymous: false,
    location: "Academic Block",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addSubmission({
      ...form,
      tags,
      image: form.image,
      author: form.anonymous ? "Anonymous" : "Student",
    });

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    setForm({
      title: "",
      category: categories[0],
      description: "",
      image: "",
      anonymous: false,
      location: "Academic Block",
    });

    setTags([]);
  };

  return (
    <div className="min-h-screen bg-[#080B14] px-6 pb-20 pt-32">
      <div className="mx-auto max-w-7xl">

        <SectionHeader
          badge="📝 CAMPUS DESK"
          title="Share with"
          highlight="Campus"
          description="Share verified news, promote events and help build an informed campus community."
        />

        {submitted && (
          <div className="mt-10">
            <SuccessCard />
          </div>
        )}

        <div className="mt-12 grid gap-10 lg:grid-cols-2">

          <SubmissionForm
            form={form}
            setForm={setForm}
            categories={categories}
            tags={tags}
            setTags={setTags}
            handleSubmit={handleSubmit}
          />

          <LivePreview
            form={form}
            tags={tags}
          />

        </div>

      </div>
    </div>
  );
}