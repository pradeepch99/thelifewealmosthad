"use client";

import { Text } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function FloatingTexts() {

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

  return (
    <group>

      {/* Main Birthday Text */}
      <Text
        position={[0, isMobile ? 0.15 : 0.2, 0]}
        fontSize={isMobile ? 0.28 : 0.7}
        maxWidth={isMobile ? 2.2 : 8}
        lineHeight={1.1}
        letterSpacing={-0.02}
        lineHeight={1}
        textAlign="center"
        color="#fff1f7"
        anchorX="center"
        anchorY="middle"
        fillOpacity={0.96}
      >
        Happy Birthday
      </Text>

    </group>
  );
}