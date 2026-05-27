"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMusic } from "../music/MusicProvider";

export default function Heart({ setPhase }) {

  const { playTrack } = useMusic();
  
  const handleClick = async () => {
    await playTrack("/music/story.mp3");
    setPhase("story");
  };

  return (
    <motion.div

      initial={{
        opacity: 0,
        scale: 0.7,
      }}

      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}

      whileHover={{
        scale: 1.05,
      }}

      whileTap={{
        scale: 0.92,
      }}

      transition={{
        opacity: {
          duration: 2,
        },

        scale: {
          duration: 2,
        },

        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}

      onClick={handleClick}

      className="
        pointer-events-auto
        absolute
        left-1/2
        top-[42%]
        z-20
        flex
        cursor-pointer
        flex-col
        items-center
        -translate-x-1/2
        -translate-y-1/2
      "
    >

      {/* Heart */}
      <div
        className="
          relative
          flex
          items-center
          justify-center
          w-[220px]
          md:w-[420px]
        "
      >

        {/* Glow */}
        <motion.div
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}

          transition={{
            duration: 3,
            repeat: Infinity,
          }}

          className="
            absolute
            h-[180px]
            w-[180px]
            rounded-full
            bg-red-500/25
            blur-[90px]
            md:h-[300px]
            md:w-[300px]
          "
        />

        {/* Image */}
        <Image
          src="/heart.png"
          alt="Heart"
          width={700}
          height={700}
          priority
          className="
            relative
            z-10
            h-auto
            w-full
            object-contain
            drop-shadow-[0_0_60px_rgba(255,80,120,0.45)]
          "
        />

      </div>

      {/* Text */}
      <p
        className="
          mt-2
          text-center
          text-[9px]
          uppercase
          tracking-[0.55em]
          text-pink-100/60
        "
      >
        click me
      </p>

    </motion.div>
  );
}