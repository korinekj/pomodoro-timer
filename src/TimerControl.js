import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";

function TimerControl(props) {
  return (
    <div className="timer-control">
      <button id="start_stop" onClick={props.start}>
        <FontAwesomeIcon icon={faPlay} />
        <FontAwesomeIcon icon={faPause} />
      </button>
      <button id="reset" onClick={props.reset}>
        <FontAwesomeIcon icon={faArrowsRotate} />
      </button>
    </div>
  );
}

export default TimerControl;
