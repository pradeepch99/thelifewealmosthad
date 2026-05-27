"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StoryScene({
  scene,
}) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };

  }, []);

  const imageSrc = isMobile
    ? `/story/mobile/${scene.image}`
    : `/story/desktop/${scene.image}`;

  const textPosition = isMobile
    ? scene.mobileTextPosition
    : scene.desktopTextPosition;

  const positionClasses = {

    center: `
      items-center
      justify-center
      text-center
    `,

    leftCenter: `
      items-center
      justify-start
      text-left
    `,

    rightCenter: `
      items-center
      justify-end
      text-right
    `,

    bottomLeft: `
      items-end
      justify-start
      text-left
    `,

    bottomRight: `
      items-end
      justify-end
      text-right
    `,

    bottomCenter: `
      items-end
      justify-center
      text-center
    `,

    topCenter: `
      items-start
      justify-center
      text-center
    `,
  };

  return (
    <section
      className="
        relative
        h-[100svh]
        w-full
        snap-start
        overflow-hidden
        bg-black
      "
    >

      {/* Background Image */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.04,
        }}

        whileInView={{
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: 1.8,
        }}

        viewport={{
          once: true,
        }}

        className="absolute inset-0"
      >

        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          className="
            object-contain
            md:object-cover
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/25
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.78)_100%)]
          "
        />

      </motion.div>

      {/* Content */}
      <div
        className={`
          relative
          z-10
          flex
          h-full
          w-full
          px-6
          pb-[max(3rem,env(safe-area-inset-bottom))]
          pt-[max(3rem,env(safe-area-inset-top))]
          md:px-16
          ${positionClasses[textPosition]}
        `}
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1.5,
            delay: 0.2,
          }}

          viewport={{
            once: true,
          }}

          className="
            max-w-[280px]
            md:max-w-[520px]
          "
        >

          <p
            className="
              whitespace-pre-line
              text-[20px]
              font-light
              leading-[1.7]
              tracking-[0.04em]
              text-white
              md:text-5xl
              md:leading-[1.5]
            "
          >
            {scene.text}
          </p>

        </motion.div>

      </div>

    </section>
  );
}