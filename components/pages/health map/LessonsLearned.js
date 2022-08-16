import React from "react";
import classes from "./LessonsLearned.module.scss";

function LessonsLearned() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h3>
          <span className={classes.color}>Lessons Learned</span>
        </h3>
        <h1>What lessons were learned during this process?</h1>
      </div>
      <div className={classes.descriptionContainer}>
        <p>
          Building unique and valuable user experiences is never straight
          forward because of the often different and sometimes competing needs
          of the business, stakeholders, and customers. However,{" "}
          <span className={classes.bold}>
            each project allows me to reflect and better my building approach
            for the next project.
          </span>{" "}
          Below are a few lessons learned from this project.
        </p>
      </div>
    </div>
  );
}

export default LessonsLearned;
