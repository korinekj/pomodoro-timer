import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";

function AppContainer(props) {
  const initialBreakLength = 5;
  const initialSessionLength = 25;

  const [breakLength, setBreakLength] = useState(initialBreakLength);
  const [sessionLength, setSessionLength] = useState(initialSessionLength);
  let [countdown, setCountdown] = useState(sessionLength + ":00");
  let [paused, setPause] = useState(false);

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
    setCountdown(resetSessionLength);
  };

  /**
   * FUNKCE ZAČÁTEK ODPOČET
   */
  const startTimer = () => {
    let time = sessionLength * 60;
    let timer;

    if (paused === false) {
      timer = setInterval(startCountdown, 1000);

      function startCountdown() {
        setPause(!paused);
        console.log("COUNTING");
        time--;
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        setCountdown(`${minutes}:${seconds}`);

        if (seconds === 50) {
          clearInterval(timer);
        }
      }
    }
  };

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
        start: startTimer,
      });
    }
  );
  return <div className="app">{updateChildrenWithProps}</div>;
}

export default AppContainer;
