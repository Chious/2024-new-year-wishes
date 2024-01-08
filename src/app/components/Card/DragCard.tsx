"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import style from "./DragCard.module.css";
import Card from "./Card";

export const DragCard = () => {
  const constraintsRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <h1>Find Something Special!</h1>
        <motion.div className={style.container} ref={constraintsRef}>
          <motion.div
            className={style.item}
            initial={{ x: 190, y: 10 }}
            dragConstraints={constraintsRef}
            drag
            style={{
              background: "blue",
              width: "200px",
              height: "150px",
            }}
          />
          <button onClick={handleOpen}>You Found Me!</button>
        </motion.div>
      </div>

      <Card open={open} setOpen={setOpen} />
    </>
  );
};
