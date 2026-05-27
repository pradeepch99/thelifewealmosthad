"use client";

import Scene from "./Scene";
import OverlayText from "./OverlayText";
import BirthdayConfetti from "./BirthdayConfetti";

export default function IntroScene({
  phase,
  setPhase,
}) {

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">

      {phase === "birthdayRain" && (
        <BirthdayConfetti />
      )}

      <Scene phase={phase} />

      <OverlayText
        phase={phase}
        setPhase={setPhase}
      />

    </main>
  );
}