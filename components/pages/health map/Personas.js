import React from "react";
import classes from "./Personas.module.scss";

function Personas() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h3>
          <span className={classes.color}>
            Planning phase - Customer Personas
          </span>
        </h3>
        <h1>Who are our customers?</h1>
      </div>
      <div className={classes.descriptionContainer}>
        <p>
          During the interview and survey phase of our research, we started to
          notice that users fell into one of two groups:{" "}
          <span className={classes.bold}>
            Managers and executives that were responsible for creating
            presentations, conducting quick analysis, and making decisions based
            on that analysis. And researchers who were responsible for in-depth
            analysis.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Personas;
