import React, { useState } from "react";

function AppContainer(props) {
  const initialBreakLength = 5;
  const initialSessionLength = 25;

  const [breakLength, setBreakLength] = useState(initialBreakLength);
  const [sessionLength, setSessionLength] = useState(initialSessionLength);
  const [countdown, setCountdown] = useState(`25:00`);
  const [running, setRunning] = useState(false);
  const [timerLabel, setTimerLabel] = useState("Session");
  const [timerId, setTimerId] = useState(undefined);
  const [runTimes, setRunTimes] = useState(0);

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
    setBreakLength(initialBreakLength);
    setSessionLength(initialSessionLength);
    setCountdown(initialSessionLength + ":00");
    setTimerLabel("Session");
    clearInterval(timerId);
    setTimerId(undefined);
    setRunning(false);
  };

  /**
   * FUNKCE ZAČÁTEK ODPOČET
   */

  function startTimer() {
    let timeInSeconds;

    timeInSeconds =
      parseInt(countdown.substring(0, 2) * 60) +
      parseInt(countdown.substring(3));

    // timeInSeconds = sessionLength * 60;
    // console.log(timeInSeconds);

    console.log("TIMER START");
    setRunning(!running);
    setTimerLabel("Session");

    console.log(runTimes);

    //NEFUNGUJE JELIKOŽ RUNTIMES JE FURT NULA...TAKŽE FURT ODEČÍTÁ A PAK TO O SEKUNDU NEFUNGUJE
    if (runTimes === 0) {
      timeInSeconds--;
    }

    //Session
    const timerId = setInterval(() => {
      console.log(timeInSeconds, timerId);
      const minutes =
        Math.floor(timeInSeconds / 60) < 10
          ? "0" + Math.floor(timeInSeconds / 60)
          : Math.floor(timeInSeconds / 60);
      const seconds =
        timeInSeconds % 60 < 10
          ? "0" + (timeInSeconds % 60)
          : timeInSeconds % 60;
      setCountdown(`${minutes}:${seconds}`);

      timeInSeconds--;

      //BREAK
      if (timeInSeconds < 0) {
        clearInterval(timerId);

        setTimerLabel("Break");
        console.log(timerLabel);

        let breakTimeInSeconds = breakLength * 60;

        const timerIdBreak = setInterval(() => {
          console.log(breakTimeInSeconds, timerIdBreak);
          const minutes =
            Math.floor(breakTimeInSeconds / 60) < 10
              ? "0" + Math.floor(breakTimeInSeconds / 60)
              : Math.floor(breakTimeInSeconds / 60);
          const seconds =
            breakTimeInSeconds % 60 < 10
              ? "0" + (breakTimeInSeconds % 60)
              : breakTimeInSeconds % 60;
          setCountdown(`${minutes}:${seconds}`);

          breakTimeInSeconds--;

          if (breakTimeInSeconds < 0) {
            clearInterval(timerIdBreak);

            //ZDE DODĚLAT ABY TO KURVA UPDATNULO
            //setRunTimes(runTimes + 1);

            setTimeout(startTimer, 1000);
          }
        }, 1000);
        setTimerId(timerIdBreak);
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
