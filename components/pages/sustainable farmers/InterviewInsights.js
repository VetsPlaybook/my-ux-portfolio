import React from "react";
import classes from "./InterviewInsights.module.scss";

function InterviewInsights() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h3>
          <span className={classes.color}>
            Planning phase - Interview Insights
          </span>
        </h3>
        <h1>Customer pains, gains, and behavior</h1>
      </div>
      <div className={classes.descriptionContainer}>
        <p>
          Understanding customer behavior is very important in designing a
          solution for a specific user group. In this study, we wanted to
          understand the pains, gains, and motivations users experienced when
          deciding to donate towards a charitable cause, and what other
          non-profits these donors gave to.<span className={classes.bold}> Below is a brief look at the insights we obtained.</span>
        </p>
      </div>
    </div>
  );
}

export default InterviewInsights;
