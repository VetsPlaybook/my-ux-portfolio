import React from "react";
import classes from "./DesignSystem.module.scss";

function DesignSystem() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h3>
          <span className={classes.color}>Design Phase - Design System</span>
        </h3>
        <h1>Creating the design system</h1>
      </div>
      <div className={classes.descriptionContainer}>
        <p>
          Again, we turned to the data for insights on the choice of color and
          text.{" "}
          <span className={classes.bold}>
            Because veterans had associated the business casual style with
            professionalism, we chose to use the color blue as it is
            traditionally associated with stability, trust, and professionalism.
          </span>{" "}
          Our font choice followed a similar line of thinking.
        </p>
      </div>
    </div>
  );
}

export default DesignSystem;
