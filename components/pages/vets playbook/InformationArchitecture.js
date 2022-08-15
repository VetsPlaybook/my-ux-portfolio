import React from "react";
import classes from "./InformationArchitecture.module.scss";

function InformationArchitecture() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h3>
          <span className={classes.color}>
            Design Phase - Information Architecture
          </span>
        </h3>
        <h1>The layout of the web app</h1>
      </div>
      <div className={classes.descriptionContainer}>
        <p>
          While there was significant similarities between customers, there was
          a major difference in the amount of help that a veteran would want
          from a service such as this.{" "}
          <span className={classes.bold}>
            Some veterans just wanted to learn how to write resumes and prepare
            for interviews. Other veterans wanted a bit more hand holding
            throughout the process. This had major implications for the
            development of our web app as it meant we would need to detect and
            show different screens depending on the user's access.
          </span>{" "}
          Below is how we designed our app to accommodate the user's needs.
        </p>
      </div>
    </div>
  );
}

export default InformationArchitecture;
