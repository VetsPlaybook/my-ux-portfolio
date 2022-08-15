import React from "react";
import classes from "./Introduction.module.scss";

function Introduction() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h3><span className={classes.color}>About the project</span></h3>
        <h1>Helping veterans find employment after military service</h1>
        <p>
          Finding meaningful employment is the number one concern for veterans
          leaving the armed forces. So for this project, I worked with USA
          military veterans in order to <span className={classes.bold}>develop a service and web application
          that would help them land better civilian employment opportunities.</span>
          The main challenge in this project is that the research, design, and
          development had to be done from scratch, and with only a 2-man team;
          myself and a data scientist named <span className={classes.colorBold}>Emily Kang</span>. This required that we
          both personally find military veterans who were suffering from
          employment problems, interview them, and stay in contact with them
          throughout the design process. In the end, we were able to create a
          fully functional web application specifically developed to address the
          needs of our nations heroes. Please read on to see how this was
          accomplished.
        </p>
      </div>
      <div className={classes.roleContainer}>
        <div className={classes.role}>
          <h4>Role</h4>
          <p>UI/UX Designer</p>
          <p>Customer Interviews</p>
          <p>Web Developer</p>
          <p>Co-Videographer</p>
        </div>
        <div className={classes.client}>
          <h4>Client</h4>
          <p>Self-Initiated</p>
        </div>
        <div className={classes.typeOfBusiness}>
          <h4>Type of Business</h4>
          <p>B2C</p>
          <p>Start Up Company</p>
        </div>
        <div className={classes.date}>
          <h4>Date</h4>
          <p>2018 - Present</p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
