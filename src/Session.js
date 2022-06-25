import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

function SessionTimer(props) {
  // PŘEVOD z minut NA MM:SS FORMÁT
  // const MMSS = new Date(props.countdown * 60 * 1000)
  //   .toString()
  //   .substring(19, 24);

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
