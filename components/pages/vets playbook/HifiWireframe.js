import React from "react";
import classes from "./HifiWireframe.module.scss";

function HifiWireframe() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h3>
          <span className={classes.color}>
            Design Phase - High Fidelity Wireframe
          </span>
        </h3>
        <h1>Prototype of the web app</h1>
      </div>
      <div className={classes.descriptionContainer}>
        <p>
          With all the requirements gathered,{" "}
          <span className={classes.bold}>
            its time to make a working prototype.{" "}
          </span>{" "}
          Below is the layout for the prototype created. Prototypes are
          typically made with{" "}
          <span className={classes.bold}>Adobe XD, Figma, or Sketch.</span>
        </p>
      </div>
    </div>
  );
}

export default HifiWireframe;
