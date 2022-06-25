import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownLong,
  faArrowUpLong,
} from "@fortawesome/free-solid-svg-icons";

function SessionLength(props) {
  return (
    <div className="length-control">
      <div id="session-label">Session Length</div>

      <button id="session-decrement" onClick={props.setSession.dec}>
        <FontAwesomeIcon icon={faArrowDownLong} className="arrow" />
      </button>
      <span id="session-length">{props.session}</span>
      <button id="session-increment" onClick={props.setSession.inc}>
        <FontAwesomeIcon icon={faArrowUpLong} className="arrow" />
      </button>
    </div>
  );
}

export default SessionLength;
