import { createContext, useContext, useState } from "react";

const NewsContext = createContext();

const initialNews = [
  {
    id: 1,
    title: "AI Workshop Registration Open",
    category: "Academics",
    description:
      "ECE Department has opened registrations for the AI & Embedded Systems Workshop.",
    author: "Campus Desk",
    approved: true,
    date: "2 hours ago",
    image: "https://picsum.photos/900/500?random=11",
  },
  {
    id: 2,
    title: "Open Mic Night This Friday",
    category: "Events",
    description:
      "Music Club invites everyone to perform singing, poetry and stand-up comedy.",
    author: "Campus Desk",
    approved: true,
    date: "Today",
    image: "https://picsum.photos/900/500?random=22",
  },
];

export function NewsProvider({ children }) {
  const [news, setNews] = useState(initialNews);

  // Student submits news
  const addSubmission = (item) => {
    setNews((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...item,
        approved: false,
        date: "Just now",
        image:
          item.image ||
          `https://picsum.photos/900/500?random=${Math.floor(
            Math.random() * 1000
          )}`,
      },
    ]);
  };

  // Admin approves news
  const approveNews = (id) => {
    setNews((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              approved: true,
            }
          : item
      )
    );
  };

  // Admin rejects news
  const rejectNews = (id) => {
    setNews((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <NewsContext.Provider
      value={{
        news,
        addSubmission,
        approveNews,
        rejectNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  return useContext(NewsContext);
}