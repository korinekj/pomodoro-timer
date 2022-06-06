function SessionLength(props) {
  return (
    <div className="length-control">
      <div id="session-label">Session Label</div>
      <button id="session-decrement">dec session</button>
      <span id="session-length">{props.session}</span>
      <button id="session-increment">inc session</button>
    </div>
  );
}

export default SessionLength;
