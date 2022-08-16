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
          Upon leaving military service, veterans blend into the civilian
          population which presents a unique challenge in finding them in order
          to conduct an interview. In addition, we needed to find veterans that
          were specifically suffering from employment related issues. To
          overcome these issues, I worked with data scientist{" "}
          <span className={classes.colorBold}>Emily Kang</span> in order to
          create a national survey{" "}
          <span className={classes.bold}>(1284 respondents)</span>, and
          conducted{" "}
          <span className={classes.bold}>80 face-to-face interviews</span> with
          those veterans who were suffering from employment related problems.{" "}
          <span className={classes.bold}>
            Our goal was to use both machine learning and user interviews to
            accurately pinpoint which veterans were likely to have employment
            issues when leaving the military.
          </span>
        </p>
      </div>
    </div>
  );
}

export default CustomerInterviews;
