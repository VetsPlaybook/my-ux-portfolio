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
          solution for a specific user group. We wanted to understand the pains
          that veterans felt when applying for jobs, how they overcame those
          challenges, if those solutions worked, and what they are currently
          doing to overcome their employment problems.{" "}
          <span className={classes.bold}>
            Below is a brief look at the insights we gained from interviewing 80
            veterans with employment issues.
          </span>
        </p>
      </div>
    </div>
  );
}

export default InterviewInsights;
