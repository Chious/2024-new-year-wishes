"use client";

import Counter from "./components/Counter/Counter";
import { DragCard } from "./components/Card/DragCard";
import { Box } from "@mui/material";
import { AppProvider } from "./contexts/AppContext";

export default function Home() {
  return (
    <AppProvider>
      <Box>
        <DragCard />
      </Box>
    </AppProvider>
  );
}
