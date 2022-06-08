function SessionTimer(props) {
  const minutes = props.session;
  console.log(typeof minutes);
  const seconds = props.session * 60;

  return (
    <div className="timer">
      <div id="timer-label">Session</div>
      <div id="time-left">{minutes}</div>
      {/* ZDE TO ZPOMALUJE TO TESTOVÁNÍ (FCC RUN TESTS) */}
    </div>
  );
}

export default SessionTimer;
