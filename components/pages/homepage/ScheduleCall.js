import React from "react";
import classes from "./ScheduleCall.module.scss";

function ScheduleCall() {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Schedule a call with me today!</h1>
      </div>
      <div className={classes.buttonContainer}>
        <a target="_blank" href="https://calendly.com/joseph-morris-ux/30min">
          <button className={classes.button1}>Schedule a call</button>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/joseph-morris-mba-b2443587/"
        >
          <button className={classes.button2}>View LinkedIn</button>
        </a>
      </div>
    </div>
  );
}

export default ScheduleCall;
