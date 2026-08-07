import { createContext, useContext, useEffect, useRef, useState } from "react";
import campusRadio from "../assets/audio/campus-radio.mp3";

const AudioPlayerContext = createContext();

const playlist = [
  {
    id: 1,
    title: "Campus Radio Theme",
    artist: "Pulse FM",
    src: campusRadio,
    cover: "https://picsum.photos/300?random=1",
    liked: false,
  },
  {
    id: 2,
    title: "Late Night Chill",
    artist: "Campus Radio",
    src: campusRadio,
    cover: "https://picsum.photos/300?random=2",
    liked: false,
  },
  {
    id: 3,
    title: "Morning Energy",
    artist: "Pulse FM",
    src: campusRadio,
    cover: "https://picsum.photos/300?random=3",
    liked: false,
  },
];

export function AudioPlayerProvider({ children }) {
  const audioRef = useRef(new Audio());

  const [songs, setSongs] = useState(playlist);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const currentSong = songs[currentIndex];

  useEffect(() => {
    const audio = audioRef.current;

    audio.src = currentSong.src;
    audio.volume = volume;

    const updateTime = () => setCurrentTime(audio.currentTime);

    const loaded = () => {
      setDuration(audio.duration || 0);
    };

    const ended = () => {
      nextSong();
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", loaded);
    audio.addEventListener("ended", ended);

    if (playing) {
      audio.play().catch(() => {});
    }

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", loaded);
      audio.removeEventListener("ended", ended);
    };
  }, [currentIndex]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (playing) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  const togglePlay = () => {
    setPlaying((prev) => !prev);
  };

  const seek = (time) => {
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const nextSong = () => {
    setCurrentIndex((prev) => (prev + 1) % songs.length);
    setCurrentTime(0);
  };

  const previousSong = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? songs.length - 1 : prev - 1
    );
    setCurrentTime(0);
  };

  const toggleLike = () => {
    setSongs((prev) =>
      prev.map((song, index) =>
        index === currentIndex
          ? { ...song, liked: !song.liked }
          : song
      )
    );
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        songs,
        currentSong,
        currentIndex,
        playing,
        togglePlay,
        nextSong,
        previousSong,
        toggleLike,
        currentTime,
        duration,
        seek,
        formatTime,
        volume,
        setVolume,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioPlayerContext);
}