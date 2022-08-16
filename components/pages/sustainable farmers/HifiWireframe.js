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
        Our team redesigned the donation page to better appeal to individual donors as research indicated that the non-profit's webpage is the most common place users visit in order to make a donation. This design was also tailored to conform to the client's original website design.<span className={classes.bold}> Below is a modified prototype to preserve the anonymity of the
            client in this consulting project.
          
            
          </span>
        </p>
      </div>
    </div>
  );
}

export default HifiWireframe;
