import React from "react";
import classes from "./UserTesting.module.scss";

function UserTesting() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h3>
          <span className={classes.color}>
          Testing Phase - User Testing
          </span>
        </h3>
        <h1>Testing the web app with users & feedback</h1>
      </div>
      <div className={classes.descriptionContainer}>
        <p>
        <span className={classes.bold}>We were only able to build this service and web app with repeated testing and adjustments to the user's experience.</span> Below are the tests that we did in order to craft an experience that users enjoy. <span className={classes.bold}>These include some of the successes, failures, and adaptations we had to make to create a product that users would enjoy.</span>
        </p>
      </div>
    </div>
  );
}

export default UserTesting;
