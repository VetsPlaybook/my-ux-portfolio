import React from "react";
import classes from "./Introduction.module.scss";

function Introduction() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h3>
          <span className={classes.color}>About the project</span>
        </h3>
        <h1>Quickly perform GIS data analysis from anywhere</h1>
        <p>
          Gaining quick access to meaningful health related GIS data is a top
          concern for executives and researchers in health departments around
          the nation. In this case study, my team was tasked with{" "}
          <span className={classes.bold}>
            enhancing the usability of HealthMap's GIS tool so that the company
            could expand its market share in the highly competitive GIS market.
          </span>{" "}
          The main challenge in this project is that the our team needed to
          research how users were using the software, how users viewed
          competition, find out what features and data were missing from the
          application, and then design an effective solution that would benefit
          both the company and the end users. In the end, our team submitted a
          redesigned application that was mobile friendly and in line with
          stakeholder expectations.
          <br />
          <br />
          <span className={classes.colorBold}>
          You can see a redacted version of the full study upon request.
          </span>
          <br />
          <br />
          Like many consulting engagements,{" "}
          <span className={classes.bold}>
            this project was created under a non-disclosure agreement with Fox
            Management Consulting. Thus the name of the ultimate client has been
            renamed to HealthMap
          </span>{" "}
          in order to keep the identity of the client a secret in accordance
          with the non-disclosure agreement.
        </p>
      </div>
      <div className={classes.roleContainer}>
        <div className={classes.role}>
          <h4>Role</h4>
          <p>UI/UX Designer</p>
        </div>
        <div className={classes.client}>
          <h4>Client</h4>
          <p>Fox Management Consulting</p>
        </div>
        <div className={classes.typeOfBusiness}>
          <h4>Type of Business</h4>
          <p>B2B</p>
        </div>
        <div className={classes.date}>
          <h4>Date</h4>
          <p>2020</p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
