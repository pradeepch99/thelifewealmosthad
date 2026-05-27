"use client";

import { motion, AnimatePresence } from "framer-motion";

import Heart from "./Heart";

export default function OverlayText({
  phase,
  setPhase,
}) {

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      <AnimatePresence mode="wait">

        {phase === "heartReveal" && (
          <motion.div
            key="heartReveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >

            <Heart setPhase={setPhase} />

          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}