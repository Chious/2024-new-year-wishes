import { Stack } from "@mui/material";
import { useState, useEffect } from "react";
import SwipeCounterText from "./SwipeCounterText";
import SwipeCounterText2 from "./SwipeCounterText2";
import BackgroundText from "../BackgroundText";

export default function Counter() {
  const targetDay = new Date("2024/01/01").getTime();
  const today = new Date().getTime();

  const [duration, setDuration] = useState(
    Math.floor((targetDay - today) / 1000)
  );
  const [time, setTime] = useState({ Day: 1, Hour: 1, Minute: 1, Second: 1 });

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const CalcTime = function () {
      let calc = duration;

      const Days = Math.floor(calc / 86400);
      calc -= Days * 86400;

      const Hours = Math.floor(calc / 3600);
      calc -= Hours * 3600;

      const Minutes = Math.floor(calc / 60);
      calc -= Minutes * 60;

      const Seconds = Math.floor(calc);

      setTime({ Day: Days, Hour: Hours, Minute: Minutes, Second: Seconds });
    };

    timeout = setTimeout(() => {
      setDuration(Math.floor((targetDay - new Date().getTime()) / 1000));
      CalcTime();
      clearTimeout(timeout);
    }, 1000);
  }, [duration, targetDay]);

  //Styles

  const timeSX = {
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "50px",
  };

  return (
    <>
      <Stack
        direction="column"
        spacing={5}
        sx={{
          background: "rgba(127,127,127,1)",
          border: "1px solid none",
          borderRadius: "10px",
          p: 2,
        }}
      >
        <h2>{`關於2024...`}</h2>
        <Stack className="timer" direction="row" spacing={2}>
          <Stack className="time" alignItems="center">
            <Stack sx={timeSX}>
              <p style={{ color: "hsl(345, 95%, 68%)" }}>{time.Day}</p>
            </Stack>
            <h3>DAYS</h3>
          </Stack>
          <Stack className="time" alignItems="center">
            <Stack sx={timeSX}>
              <p style={{ color: "hsl(345, 95%, 68%)" }}>{time.Hour}</p>
            </Stack>
            <h3>HOURS</h3>
          </Stack>
          <Stack className="time" alignItems="center">
            <Stack sx={timeSX}>
              <p style={{ color: "hsl(345, 95%, 68%)" }}>{time.Minute}</p>
            </Stack>

            <h3>MINUTES</h3>
          </Stack>
          <Stack className="time" alignItems="center">
            <Stack sx={timeSX}>
              <p style={{ color: "hsl(345, 95%, 68%)" }}>{time.Second}</p>
            </Stack>

            <h3>SECONDS</h3>
          </Stack>
        </Stack>

        <SwipeCounterText />
      </Stack>
      <BackgroundText />
    </>
  );
}
