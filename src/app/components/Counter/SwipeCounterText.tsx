import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SwipeCounterText() {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current!.offsetWidth);
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      drag="x"
      dragConstraints={{
        right: 0,
        left: -width * 2,
      }}
      initial={{ x: 0 }}
      style={{ background: "gray" }}
    >
      <h1>This is component 1</h1>
      <h1>This is component 2</h1>
      <h1>This is component 3</h1>
    </motion.div>
  );
}
