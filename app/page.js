"use client";

import { useEffect, useState } from "react";

import IntroScene from "./components/intro/IntroScene";
import StoryContainer from "./components/story/StoryContainer";

// DEFAULT FALLBACK
const DEFAULT_BIRTHDAY_MODE = true;

export default function Home() {

  const [phase, setPhase] = useState("loading");

  useEffect(() => {

    // ENV OVERRIDE
    const envValue =
      process.env.NEXT_PUBLIC_ENABLE_BIRTHDAY_MODE;

    const ENABLE_BIRTHDAY_MODE =
      envValue !== undefined
        ? envValue === "true"
        : DEFAULT_BIRTHDAY_MODE;

    if (ENABLE_BIRTHDAY_MODE) {

      setPhase("birthdayRain");

      const fadeTimer = setTimeout(() => {
        setPhase("heartReveal");
      }, 5000);

      return () => {
        clearTimeout(fadeTimer);
      };

    } else {

      setPhase("story");

    }

  }, []);

  // STORY MODE
  if (phase === "story") {
    return <StoryContainer />;
  }

  // INTRO MODE
  return (
    <IntroScene
      phase={phase}
      setPhase={setPhase}
    />
  );
}