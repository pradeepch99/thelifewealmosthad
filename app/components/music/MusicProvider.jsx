"use client";

import {
  createContext,
  useContext,
  useEffect,
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

  const [currentTrack, setCurrentTrack] = useState("");

  const [started, setStarted] = useState(false);

  const playTrack = async (src) => {

    if (!audioRef.current) return;

    if (currentTrack === src) return;

    const audio = audioRef.current;

    // first play
    if (!audio.src) {

      audio.src = src;

      audio.volume = 0;

      await audio.play();

      // fade in
      const fadeIn = setInterval(() => {

        if (audio.volume < 0.45) {
          audio.volume += 0.02;
        } else {
          clearInterval(fadeIn);
        }

      }, 200);

      setCurrentTrack(src);

      return;
    }

    // fade out
    const fadeOut = setInterval(async () => {

      if (audio.volume > 0.05) {

        audio.volume -= 0.05;

      } else {

        clearInterval(fadeOut);

        audio.pause();

        audio.src = src;

        audio.load();

        audio.volume = 0;

        await audio.play();

        // fade in
        const fadeIn = setInterval(() => {

          if (audio.volume < 0.45) {
            audio.volume += 0.02;
          } else {
            clearInterval(fadeIn);
          }

        }, 200);

      }

    }, 120);

    setCurrentTrack(src);
  };

  useEffect(() => {

    const unlockAudio = () => {

      if (started) return;

      setStarted(true);
    };

    window.addEventListener("click", unlockAudio);

    return () => {
      window.removeEventListener("click", unlockAudio);
    };

  }, [started]);

  return (

    <MusicContext.Provider
      value={{
        playTrack,
        started,
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