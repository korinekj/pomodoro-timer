import { useState } from "react";

function SessionTimer(props) {
  const minutes = props.session;

  // PŘEVOD NA MM:SS FORMÁT
  const MMSS = new Date(minutes * 60 * 1000).toString().substring(19, 24);

  const [length, setLength] = useState(props.session);

  return (
    <div className="timer">
      <div id="timer-label">Session</div>
      <div id="time-left">{MMSS}</div>
      {/* ZDE TO ZPOMALUJE TO TESTOVÁNÍ (FCC RUN TESTS) */}
    </div>
  );
}

export default SessionTimer;
