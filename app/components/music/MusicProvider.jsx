"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

const MusicContext = createContext();

export function useMusic() {
  return useContext(MusicContext);
}

export default function MusicProvider({
  children,
}) {

  const audioRef = useRef(null);

  const [currentTrack, setCurrentTrack] =
    useState("");

  const playTrack = async (src) => {

    if (!audioRef.current) return;

    const audio = audioRef.current;

    // already playing same track
    if (audio.src.includes(src)) return;

    try {

      audio.pause();

      audio.src = src;

      audio.volume = 0.45;

      audio.currentTime = 0;

      await audio.play();

      setCurrentTrack(src);

    } catch (err) {

      console.log(err);

    }
  };

  return (

    <MusicContext.Provider
      value={{
        playTrack,
        currentTrack,
      }}
    >

      {children}

      <audio
        ref={audioRef}
        loop
        preload="auto"
      />

    </MusicContext.Provider>
  );
}