import React from "react";
import classes from "./CustomerInterviews.module.scss";

function CustomerInterviews() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h3>
          <span className={classes.color}>
            Planning phase - Customer Interviews
          </span>
        </h3>
        <h1>Finding the right customers to interview</h1>
      </div>
      <div className={classes.descriptionContainer}>
        <p>
          In order to develop a solution for the contributor user group, we must
          start by identifying the right users.
          <span className={classes.bold}>
            This phase included a 202 respondent survey, and face-to-face
            interviews with current and former donors.
          </span>{" "}
          Below is a sample of what users spoke about during the interviews
        </p>
      </div>
    </div>
  );
}

export default CustomerInterviews;
