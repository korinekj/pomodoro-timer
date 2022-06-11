import { useState } from "react";

function TimerControl(props) {
  return (
    <div className="timer-control">
      <button id="start_stop" onClick={props.start}>
        Start_Pause
      </button>
      <button id="reset" onClick={props.reset}>
        Reset
      </button>
    </div>
  );
}

export default TimerControl;
