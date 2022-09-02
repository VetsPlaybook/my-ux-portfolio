import React from "react";
import classes from "./Introduction.module.scss";

function Introduction() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h3>
          <span className={classes.color}>About the project</span>
        </h3>
        <h1>Encouraging individuals to donate to a non-profit</h1>
        <p>
          Maintaining a steady stream of donations is a problem that most
          non-profits have faced at one time or another. Sustainable Farmers is
          a community based non-profit that has historically achieved its
          financial objectives through a membership program it has with its
          farmer-members. However, the company wanted to expand its donor base
          and increase its revenue by allowing individual contributors to donate
          to the non-profit organization.{" "}
          <span className={classes.bold}>
            {" "}
            So in this study, my team was tasked with redesigning the donation
            process to appeal towards individual contributors rather than
            farmer-members. This includes e-mail, website, and donation
            material. However, for brevity, I will focus on the website portion
            of the project.
          </span>{" "}
          The main challenge in this project is that the our team needed to
          research how contributors thought about donations, how they viewed
          Sustainable Farmers, find out what motivated them to donate, and then
          design an effective solution that would benefit the business and
          appeal to contributors. In the end, our team submitted a redesigned
          donation process that was in line with stakeholder expectations However, this case study will focus on the redesign of the company's donation page.
          <br />
          <br />
          <span className={classes.colorBold}>
            <a href="https://drive.google.com/uc?export=download&id=18v6JCeUUWQQjkee1SGyJUfTu8krA2SNi">You can see a redacted version of the full 67 page study here.</a>
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
          <p>UX Designer & Researcher</p>
        </div>
        <div className={classes.client}>
          <h4>Client</h4>
          <p>Fox Management Consulting</p>
        </div>
        <div className={classes.typeOfBusiness}>
          <h4>Type of Business</h4>
          <p>B2C</p>
        </div>
        <div className={classes.date}>
          <h4>Date</h4>
          <p>2019</p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
