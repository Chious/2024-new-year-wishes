import { Box } from "@mui/material";
import classNames from "classnames";
import style from "./BackgroundText.module.css";

export default function BackgroundText() {
  const texts = [
    "ChatGPT",
    "世足賽",
    "五倍券",
    "iphone 15",
    "颱風假",
    "房貸補貼",
    "梅西",
    "水庫水情",
    "黑暗榮耀",
    "Lalaport",
  ];

  const textElements = texts.map((text, index) => {
    const positionClass = style[`text-position-${index + 1}`];

    const textClass = classNames({
      [style.text]: true,
      [positionClass]: true,
    });

    return (
      <h1 className={textClass} key={index}>
        {text}
      </h1>
    );
  });

  return <Box>{textElements}</Box>;
}
