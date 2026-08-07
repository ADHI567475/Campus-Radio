import { createContext, useContext, useState } from "react";

const DiscussionContext = createContext();

const initialPosts = [
  {
    id: 1,
    author: "Anonymous",
    category: "📚 Academics",
    time: "2h ago",
    content:
      "Can someone share yesterday's DSP notes? I missed the class due to a lab.",
    likes: 24,
    comments: [
      { id: 1, text: "I'll send them." },
      { id: 2, text: "Check the class group." },
    ],
    trending: false,
  },
  {
    id: 2,
    author: "Anonymous",
    category: "💻 Coding",
    time: "1h ago",
    content:
      "Who's joining tomorrow's coding contest? Looking for two teammates.",
    likes: 43,
    comments: [
      { id: 1, text: "I'm in!" },
      { id: 2, text: "Let's team up." },
      { id: 3, text: "Count me in." },
    ],
    trending: true,
  },
];

export function DiscussionProvider({ children }) {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (post) => {
    setPosts((prev) => [
      {
        id: Date.now(),
        author: "Anonymous",
        time: "Just now",
        likes: 0,
        comments: [],
        trending: false,
        ...post,
      },
      ...prev,
    ]);
  };

  const likePost = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const addComment = (id, text) => {
    if (!text.trim()) return;

    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: Date.now(),
                  text,
                },
              ],
            }
          : post
      )
    );
  };

  return (
    <DiscussionContext.Provider
      value={{
        posts,
        addPost,
        likePost,
        deletePost,
        addComment,
      }}
    >
      {children}
    </DiscussionContext.Provider>
  );
}

export function useDiscussion() {
  return useContext(DiscussionContext);
}