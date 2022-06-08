function BreakLength(props) {
  return (
    <div className="length-control">
      <div id="break-label">Break Length</div>

      <button id="break-decrement" onClick={props.setBreak.dec}>
        dec break
      </button>
      <span id="break-length">{props.break}</span>
      <button id="break-increment" onClick={props.setBreak.inc}>
        inc break
      </button>
    </div>
  );
}

export default BreakLength;
