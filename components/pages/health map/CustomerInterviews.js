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
          In order to develop a solution for the GIS user group, we must start
          by identifying the right users.{" "}
          <span className={classes.bold}>
            Fortunately for our team, we were given 10 current and former users
            with whom we conducted face-to-face interviews.
          </span>{" "}
          Below is a sample of what users spoke about during the interviews.
        </p>
      </div>
    </div>
  );
}

export default CustomerInterviews;
