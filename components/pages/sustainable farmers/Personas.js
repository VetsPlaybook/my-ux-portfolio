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
          notice significant similarities in veterans who reported employment
          problems. These members tended to fall between the ages of 22 - 30,
          were enlisted, made less than $35,000, and typically left their first
          civilian job with 1 year.{" "}
          <span className={classes.bold}>
            These same members also reported that their biggest frustrations
            were with resume writing, interview preparation, not having guidance
            with the job hunting process, and only started to look for help
            after encountering employment difficulties.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Personas;
