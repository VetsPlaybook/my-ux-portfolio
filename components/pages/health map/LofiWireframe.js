import React from "react";
import classes from "./LofiWireframe.module.scss";

function LofiWireframe() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h3>
          <span className={classes.color}>
            Design phase - Lo-fi Wireframes
          </span>
        </h3>
        <h1>Wireframing the solution</h1>
      </div>
      <div className={classes.descriptionContainer}>
        <p>
          During the interviews, the team uncovered that the largest impediments
          to usability on the HealthMap platform were the unattractiveness of
          the user interface as compared with competitors, the GIS tool was not
          mobile friendly, and users were overlaying different maps on different
          software platforms in order to conduct better analysis.
          <br />
          <br />
          <span className={classes.bold}>
            So our solution was to redesign the mobile user interface to be more
            appealing, and to re-work the layering system to alleviate the pain
            of having to manually overlay data from other software.{" "}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LofiWireframe;
