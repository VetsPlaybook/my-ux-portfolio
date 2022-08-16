import React from "react";
import classes from "./HifiWireframe.module.scss";

function HifiWireframe() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h3>
          <span className={classes.color}>
            Design Phase - High Fidelity Prototype
          </span>
        </h3>
        <h1>Prototype of the redesign</h1>
      </div>
      <div className={classes.descriptionContainer}>
        <p>
          For the final design, our team created a mobile-friendly tab that
          would enable users to easily navigate the application's menus, and
          keep track of each layer that is selected.{" "}
          <span className={classes.bold}>
            Below is a modified prototype to preserve the anonymity of the
            client in this consulting project.
          </span>
        </p>
      </div>
    </div>
  );
}

export default HifiWireframe;
