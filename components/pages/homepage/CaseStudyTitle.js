import React from "react";
import classes from "./CaseStudyTitle.module.scss";
import { motion } from "framer-motion";

function CaseStudyTitle() {
  return (
    <div className={classes.container}>
      <div className={classes.verticalLine} />
      
      <div className={classes.caseStudy1}>
        <div className={classes.pageTitle}>
          <h3>Recent work</h3>
          <h1>UX Case Studies</h1>
          <h4>
            Seeing is believing. Explore how I have taken initial ideas and
            turned them into reality
          </h4>
        </div>

        <div className={classes.caseStudyLogoBackground}>
          <img className={classes.caseStudyImage} />
        </div>

        <div className={classes.caseStudyDescription}>
          <h2>Vets Playbook - Veteran Employment</h2>
          <div className={classes.caseStudyTagHolder}>
            <button className={classes.caseStudyTag}>Responsive Web App</button>
            <button className={classes.caseStudyTag}>B2C</button>
            <button className={classes.caseStudyTag}>Military</button>
          </div>
          <p>
            Finding adequate employment is the number one issue for military
            members exiting the armed forces. This service was created to
            increase the likelihood of a successful career transition from
            military service to the civilian job market. See how I helped bring
            this online service to life.
          </p>
          <button className={classes.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyTitle;
