"use strict";

import { useState } from "react";
import "./style.css";
import { useEffect } from "react";

// - zmienić z rem na px
// - dodać RWD
// - dodać z-index
// - dodać border color

export function Clock() {
  const [secondDegree, setSecondDegree] = useState(90);
  const [minuteDegree, setMinuteDegree] = useState(90);
  const [hourDegree, setHourDegree] = useState(90);

  useEffect(() => {
    const intervalID = setInterval(() => {
      const now = new Date();
      const nowSecond = now.getSeconds();
      const nowMinute = now.getMinutes();
      const nowHour = now.getHours();

      setSecondDegree(nowSecond * 6 + 90);
      setMinuteDegree(nowMinute * 6 + nowSecond * 0.1 + 90);
      setHourDegree(nowHour * 30 + nowMinute * (0.1 / 12) + 90);
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="clock-page">
      <div className="clock-frame">
        <div
          className="clock-hand hour"
          style={{ transform: `rotate(${hourDegree}deg)` }}
        ></div>
        <div
          className="clock-hand minute"
          style={{ transform: `rotate(${minuteDegree}deg)` }}
        ></div>
        <div
          className="clock-hand second"
          style={{ transform: `rotate(${secondDegree}deg)` }}
        ></div>
      </div>
    </div>
  );
}
