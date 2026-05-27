"use client";

import { motion } from "framer-motion";

export default function SceneIndicator({
  isLast,
}) {

  if (isLast) return null;

  return (

    <motion.div

      animate={{
        opacity: [0.25, 0.55, 0.25],
        y: [0, -4, 0],
      }}

      transition={{
        duration: 2.2,
        repeat: Infinity,
      }}

      className="
        fixed
        bottom-5
        right-5
        z-50
        pointer-events-none
        select-none
      "
    >

      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/5
          text-white/70
          backdrop-blur-md
          shadow-lg
        "
      >

        <span className="text-base font-medium">
          ↑
        </span>

      </div>

    </motion.div>
  );
}