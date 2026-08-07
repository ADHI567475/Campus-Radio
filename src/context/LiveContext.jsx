import { createContext, useContext, useState } from "react";

const LiveContext = createContext();

export function LiveProvider({ children }) {
  const [isLive, setIsLive] = useState(false);

  const [currentShow, setCurrentShow] = useState({
    title: "Campus Playlist",
    rj: "",
    listeners: 0,
  });

  const startLive = (title, rj) => {
    setCurrentShow({
      title,
      rj,
      listeners: 1,
    });

    setIsLive(true);
  };

  const stopLive = () => {
    setCurrentShow({
      title: "Campus Playlist",
      rj: "",
      listeners: 0,
    });

    setIsLive(false);
  };

  return (
    <LiveContext.Provider
      value={{
        isLive,
        currentShow,
        startLive,
        stopLive,
      }}
    >
      {children}
    </LiveContext.Provider>
  );
}

export function useLive() {
  return useContext(LiveContext);
}