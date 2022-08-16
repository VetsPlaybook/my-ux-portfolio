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
          understand the pains that users felt when using HealthMap to conduct
          research, and what solutions their companies used as alternatives to
          HealthMap's GIS tool.{" "}
          <span className={classes.bold}>
            Below is a brief look at the insights we gained from interviewing 10
            current and former users of HealthMap's GIS tool.
          </span>
        </p>
      </div>
    </div>
  );
}

export default InterviewInsights;
