function SessionLength(props) {
  return (
    <div className="length-control">
      <div id="session-label">Session Length</div>

      <button id="session-decrement" onClick={props.setSession.dec}>
        dec session
      </button>
      <span id="session-length">{props.session}</span>
      <button id="session-increment" onClick={props.setSession.inc}>
        inc session
      </button>
    </div>
  );
}

export default SessionLength;
