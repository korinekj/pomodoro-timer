function BreakLength(props) {
  return (
    <div className="length-control">
      <div id="break-label">Break Label</div>
      <button id="break-decrement">dec break</button>
      <span id="break-length">{props.break}</span>
      <button id="break-increment">inc break</button>
    </div>
  );
}

export default BreakLength;
