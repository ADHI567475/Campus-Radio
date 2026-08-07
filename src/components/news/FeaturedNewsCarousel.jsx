import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function FeaturedNewsCarousel({ news }) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!news.length) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % news.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [news]);

  if (!news.length) return null;

  const article = news[current];

  return (
    <div className="relative mt-12 overflow-hidden rounded-3xl">

      <AnimatePresence mode="wait">

        <motion.div
          key={article.id}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.45 }}
          onClick={() => navigate(`/campus-news/${article.id}`)}
          className="cursor-pointer"
        >
          <img
            src={article.image}
            alt={article.title}
            className="h-[430px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-10">

            <span className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white">
              BREAKING
            </span>

            <h1 className="mt-6 max-w-3xl text-5xl font-black text-white">
              {article.title}
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-zinc-200">
              {article.description}
            </p>

            <button className="mt-8 rounded-full bg-cyan-500 px-7 py-3 font-semibold text-white hover:bg-cyan-400">
              Read Story →
            </button>

          </div>
        </motion.div>

      </AnimatePresence>

      {/* Left */}

      <button
        onClick={() =>
          setCurrent(
            current === 0 ? news.length - 1 : current - 1
          )
        }
        className="absolute left-5 top-1/2 rounded-full bg-black/40 p-3 backdrop-blur hover:bg-black/60"
      >
        <ChevronLeft />
      </button>

      {/* Right */}

      <button
        onClick={() =>
          setCurrent((current + 1) % news.length)
        }
        className="absolute right-5 top-1/2 rounded-full bg-black/40 p-3 backdrop-blur hover:bg-black/60"
      >
        <ChevronRight />
      </button>

      {/* Indicators */}

      <div className="absolute bottom-6 right-10 flex gap-2">

        {news.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition ${
              current === index
                ? "w-10 bg-cyan-400"
                : "w-3 bg-white/40"
            }`}
          />

        ))}

      </div>

    </div>
  );
}