import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";

function AppContainer(props) {
  const initialBreakLength = 5;
  const initialSessionLength = 25;

  const [breakLength, setBreakLength] = useState(initialBreakLength);
  const [sessionLength, setSessionLength] = useState(initialSessionLength);
  let [countdown, setCountdown] = useState(`25:00`);
  let [running, setRunning] = useState(false);
  let [timerLabel, setTimerLabel] = useState("Session");
  const [timerId, setTimerId] = useState(undefined);

  /**
   * 4 Funkce na přidávání a ubírání délky trvání přestávky a sezení
   */
  function incBreak() {
    if (breakLength < 60 && running === false) {
      setBreakLength(breakLength + 1);
    }
  }

  function decBreak() {
    if (breakLength > 1 && running === false) {
      setBreakLength(breakLength - 1);
    }
  }

  const incSession = () => {
    if (sessionLength < 60 && running === false) {
      const newSessionLength = sessionLength + 1;
      const newCountDownLength =
        sessionLength + 1 < 10 ? "0" + (sessionLength + 1) : sessionLength + 1;
      setSessionLength(newSessionLength);
      setCountdown(newCountDownLength + ":00");
    }
  };

  const decSession = () => {
    if (sessionLength > 1 && running === false) {
      const newSessionLength = sessionLength - 1;
      const newCountDownLength =
        sessionLength - 1 < 10 ? "0" + (sessionLength - 1) : sessionLength - 1;
      setSessionLength(newSessionLength);
      setCountdown(newCountDownLength + ":00");
    }
  };

  /**
   * FUNKCE na resetování do původního stavu (délka přestávky a sezení)
   */
  const resetToDefaultState = () => {
    const resetSessionLength = 25;
    setBreakLength(initialBreakLength);
    setSessionLength(resetSessionLength);
    setCountdown(resetSessionLength + ":00");
    clearInterval(timerId);
    setTimerId(undefined);
    setRunning(false);
  };

  /**
   * FUNKCE ZAČÁTEK ODPOČET
   */
  function startTimer() {
    console.log("TIMER START");
    setRunning(!running);
    console.log(sessionLength);
    console.log(countdown.substring(0, 2));

    let timeInSeconds =
      parseInt(countdown.substring(0, 2) * 60) +
      parseInt(countdown.substring(3));
    console.log(timeInSeconds);

    let timerId = setInterval(() => {
      let minutes =
        Math.floor(timeInSeconds / 60) < 10
          ? "0" + Math.floor(timeInSeconds / 60)
          : Math.floor(timeInSeconds / 60);
      let seconds =
        timeInSeconds % 60 < 10
          ? "0" + (timeInSeconds % 60)
          : timeInSeconds % 60;
      setCountdown(`${minutes}:${seconds}`);
      timeInSeconds--;

      console.log(timeInSeconds, timerId);

      if (timeInSeconds < 0) {
        clearInterval(timerId);
      }
    }, 1000);

    setTimerId(timerId);
  }

  /**
   * FUNKCE PAUSE ODPOČET
   */
  function pauseTimer() {
    console.log("TIMER PAUSED");
    setRunning(!running);

    clearInterval(timerId);
  }

  //kód který mi zajistí, že všechny Children AppContaineru budou mít přístup ke stavu! //
  const updateChildrenWithProps = React.Children.map(
    props.children,
    (child) => {
      return React.cloneElement(child, {
        break: breakLength,
        session: sessionLength,
        countdown: countdown,
        setBreak: {
          inc: incBreak,
          dec: decBreak,
        },
        setSession: {
          inc: incSession,
          dec: decSession,
        },
        reset: resetToDefaultState,
        start: running === false ? startTimer : pauseTimer,
        timerLabel: timerLabel,
      });
    }
  );
  return <div className="app">{updateChildrenWithProps}</div>;
}

export default AppContainer;
