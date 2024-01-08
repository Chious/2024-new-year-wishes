"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function SwipeCounterText2() {
  const [step, setStep] = useState(1);
  const [width, setWidth] = useState(0);

  const ref = useRef<HTMLDivElement>(null!);

  const x = useMotionValue(0);

  function onDragEnd() {
    if (x.get() > width) {
      setStep(step + 1);
    } else if (x.get() < 0) {
      setStep(step - 1);
    }
  }

  useEffect(() => {
    setWidth(ref.current!.offsetWidth);
  }, []);

  return (
    <motion.div
      drag="x"
      dragConstraints={{ right: 0, left: -width * 2 }}
      onDragEnd={onDragEnd}
      style={{ x, background: "gray" }}
    >
      {step === 1 && <h1>This is Component 1</h1>}
      {step === 2 && <h1>This is Component 2</h1>}
      {step === 3 && <h1>This is Component 3</h1>}
    </motion.div>
  );
}
