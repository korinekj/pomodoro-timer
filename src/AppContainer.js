import React, { useState } from "react";

function AppContainer(props) {
  const initialBreakLength = 5;
  const initialSessionLength = 25;

  const [breakLength, setBreakLength] = useState(initialBreakLength);
  const [sessionLength, setSessionLength] = useState(initialSessionLength);
  let [countdown, setCountdown] = useState(sessionLength);

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
      setCountdown(newSessionLength);
    }
  };

  const decSession = () => {
    if (sessionLength > 1) {
      const newSessionLength = sessionLength - 1;
      setSessionLength(newSessionLength);
      setCountdown(newSessionLength);
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

    const startCountdown = () => {
      time--;
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;

      setCountdown(`${minutes}:${seconds}`);

      if (seconds === 0) {
        clearInterval(timer);
      }
    };

    const timer = window.setInterval(startCountdown, 1000);
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
