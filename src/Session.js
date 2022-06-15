function SessionTimer(props) {
  // PŘEVOD z minut NA MM:SS FORMÁT
  // const MMSS = new Date(props.countdown * 60 * 1000)
  //   .toString()
  //   .substring(19, 24);

  return (
    <div className="timer">
      <div id="timer-label">Session</div>
      <div id="time-left">{props.countdown}</div>
      {/* ZDE TO ZPOMALUJE TO TESTOVÁNÍ (FCC RUN TESTS) */}
    </div>
  );
}

export default SessionTimer;
