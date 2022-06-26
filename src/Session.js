import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

function SessionTimer(props) {
  // PŘEVOD z minut NA MM:SS FORMÁT
  // const MMSS = new Date(props.countdown * 60 * 1000)
  //   .toString()
  //   .substring(19, 24);

  /**
   * Pokud se časovač dostane pod 1 minutu, zbývající čas se bude zobrazovat červenou barvou
   */

  //
  // if (props.countdown === "00:59") {
  // }
  // if (props.countdown === "00:00") {
  //   document.getElementById("time-left").classList.remove("red-timer");
  // }

  switch (props.countdown) {
    case "00:59":
      document.getElementById("time-left").classList.add("red-timer");
      break;
    case "00:00":
      document.getElementById("time-left").classList.remove("red-timer");
      break;
  }

  return (
    <div className="timer">
      <FontAwesomeIcon icon={faStopwatch} />
      <audio
        id="beep"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
      <div id="timer-label">{props.timerLabel}</div>
      <div id="time-left">{props.countdown}</div>
      {/* ZDE TO ZPOMALUJE TO TESTOVÁNÍ (FCC RUN TESTS) */}
    </div>
  );
}

export default SessionTimer;
