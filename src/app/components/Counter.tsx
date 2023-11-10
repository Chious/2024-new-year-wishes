import { useState, useEffect } from "react";

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

      const Days = Math.floor(duration / 86400);
      calc -= Days * 86400;

      const Hours = Math.floor(duration / 3600);
      calc -= Hours * 3600;

      const Minutes = Math.floor(duration / 60);
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

  return (
    <>
      <h2>{`Until 2024...`}</h2>
      <div className="timer">
        <div className="time">
          <p style={{ color: "hsl(345, 95%, 68%)" }}>{time.Day}</p>
          <h3>DAYS</h3>
        </div>
        <div className="time">
          <p style={{ color: "hsl(345, 95%, 68%)" }}>{time.Hour}</p>
          <h3>HOURS</h3>
        </div>
        <div className="time">
          <p style={{ color: "hsl(345, 95%, 68%)" }}>{time.Minute}</p>
          <h3>MINUTES</h3>
        </div>
        <div className="time">
          <p style={{ color: "hsl(345, 95%, 68%)" }}>{time.Second}</p>
          <h3>SECONDS</h3>
        </div>
      </div>
    </>
  );
}
