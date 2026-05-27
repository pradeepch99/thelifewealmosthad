"use client";

import { useEffect, useState } from "react";

import IntroScene from "./components/intro/IntroScene";
import StoryContainer from "./components/story/StoryContainer";

const FORCE_BIRTHDAY_MODE = true;

const BIRTH_MONTH = 4;
const BIRTH_DAY = 26;

export default function Home() {

  const [phase, setPhase] = useState("loading");

  useEffect(() => {

    const today = new Date();

    const isBirthday =
      FORCE_BIRTHDAY_MODE ||
      (
        today.getMonth() === BIRTH_MONTH &&
        today.getDate() === BIRTH_DAY
      );

    if (isBirthday) {

      setPhase("birthdayRain");

      const fadeTimer = setTimeout(() => {
        setPhase("heartReveal");
      }, 5000);

      return () => {
        clearTimeout(fadeTimer);
      };

    } else {
      setPhase("locked");
    }

  }, []);

  // STORY MODE
  if (phase === "story") {
    return <StoryContainer />;
  }

  // LOCKED MODE
  if (phase === "locked") {
    return (
      <main className="flex h-screen items-center justify-center bg-black text-center text-white">

        <div>

          <h1 className="mb-6 text-5xl font-light tracking-[0.3em]">
            the life we almost had
          </h1>

          <p className="text-pink-200/60">
            Some memories return only once a year.
          </p>

        </div>

      </main>
    );
  }

  // INTRO MODE
  return (
    <IntroScene
      phase={phase}
      setPhase={setPhase}
    />
  );
}