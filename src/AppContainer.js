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
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  }

  function decBreak() {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  }

  const incSession = () => {
    if (sessionLength < 60) {
      const newSessionLength = sessionLength + 1;
      setSessionLength(newSessionLength);
      setCountdown(newSessionLength + ":00");
    }
  };

  const decSession = () => {
    if (sessionLength > 1) {
      const newSessionLength = sessionLength - 1;
      setSessionLength(newSessionLength);
      setCountdown(newSessionLength + ":00");
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
  };

  /**
   * FUNKCE ZAČÁTEK ODPOČET
   */
  function startTimer() {
    console.log("TIMER START");
    setRunning(!running);

    let timeInSeconds = sessionLength * 60;

    let timerId = setInterval(() => {
      let minutes = Math.floor(timeInSeconds / 60);
      let seconds = timeInSeconds % 60;
      setCountdown(`${minutes}:${seconds}`);
      timeInSeconds--;
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
      });
    }
  );
  return <div className="app">{updateChildrenWithProps}</div>;
}

export default AppContainer;
