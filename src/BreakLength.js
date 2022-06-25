import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownLong,
  faArrowUpLong,
} from "@fortawesome/free-solid-svg-icons";

function BreakLength(props) {
  return (
    <div className="length-control">
      <div id="break-label">Break Length</div>

      <button id="break-decrement" onClick={props.setBreak.dec}>
        <FontAwesomeIcon icon={faArrowDownLong} className="arrow" />
      </button>
      <span id="break-length">{props.break}</span>
      <button id="break-increment" onClick={props.setBreak.inc}>
        <FontAwesomeIcon icon={faArrowUpLong} className="arrow" />
      </button>
    </div>
  );
}

export default BreakLength;
