"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function BirthdayConfetti() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    setIsMobile(window.innerWidth < 768);

    const duration = 3000;
    const end = Date.now() + duration;

    const colors = [
      "#ffd166",
      "#ffcad4",
      "#ffffff",
      "#ffc6ff",
    ];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: isMobile ? 7 : 12,
        angle: 60,
        spread: isMobile ? 55 : 70,
        startVelocity: isMobile ? 32 : 42,
        gravity: 0.9,
        scalar: isMobile ? 0.9 : 1.1,
        ticks: 260,
        origin: { x: 0, y: 0.6 },
        colors,
      });

      confetti({
        particleCount: isMobile ? 7 : 12,
        angle: 120,
        spread: isMobile ? 55 : 70,
        startVelocity: isMobile ? 32 : 42,
        gravity: 0.9,
        scalar: isMobile ? 0.9 : 1.1,
        ticks: 260,
        origin: { x: 1, y: 0.6 },
        colors,
      });

      setTimeout(frame, 180);
    };

    frame();

  }, [isMobile]);

  return null;
}