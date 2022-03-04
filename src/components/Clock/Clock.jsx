import React, { useState, useEffect } from "react";
import * as S from "./styles";

export default function Clock() {
  const [time, setTime] = useState({
    stringDay: "",

    hour: "0",
    pth: ":",
    mins: "0",
    ptm: ":",
    secs: "0",
  });

  const zeros = (num) => {
    //para que ponga un zero delante para aquellos numeros inferiores a 10
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  };
  const tickTack = () => {
    const day = new Date();
    const weekDays = day.getDay();
    console.log(weekDays);

    switch (weekDays) {
      case 1:
        time.stringDay = "Mon";
        break;
      case 2:
        time.stringDay = "Tue";

        break;
      case 3:
        time.stringDay = "Wed";
        break;
      case 4:
        time.stringDay = "Thu";
        break;
      case 5:
        time.stringDay = "Fri";
        break;
      case 6:
        time.stringDay = "Sat";
        break;
      case 7:
        time.stringDay = "Sun";
        break;

      default:
        console.log("Not day found");
    }

    const hour = day.getHours();

    const mins = day.getMinutes();

    const secs = day.getSeconds();

    setTime({
      stringDay: time.stringDay,
      hour: zeros(hour),
      pth: ":",
      mins: zeros(mins),
      ptm: ":",
      secs: zeros(secs),
    });
  };

  useEffect(() => {
    const runningClock = setInterval(() => tickTack(), 1000);
    return function clean() {
      clearInterval(runningClock);
    };
  });
  return (
    <S.currentTime>
      <S.variables>
        <p>{time.stringDay}</p>
        <S.subVariables>
          <p>Day</p>
        </S.subVariables>
      </S.variables>
      <S.variables>
        <p>{time.hour}</p>
        <S.subVariables>
          <p>hour</p>
        </S.subVariables>
      </S.variables>
      <S.variables>
        <p>{time.pth}</p>
      </S.variables>
      <S.variables>
        <p>{time.mins}</p>
        <S.subVariables>
          <p>mins</p>
        </S.subVariables>
      </S.variables>
      <S.variables>
        <p>{time.ptm}</p>
      </S.variables>
      <S.variables>
        <p>{time.secs}</p>
        <S.subVariables>
          <p>secs</p>
        </S.subVariables>
      </S.variables>
    </S.currentTime>
  );
}
