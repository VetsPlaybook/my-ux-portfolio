import React from "react";
import classes from "./CaseStudy1.module.scss";
import { motion } from "framer-motion";

function CaseStudy1() {
  return (
    <div className={classes.container}>
      <div className={classes.caseStudyLogoBackground}>
        <img className={classes.caseStudyImage} />
      </div>

      <div className={classes.caseStudyDescription}>
        <h2>Vets Playbook - Veteran Employment</h2>
        <div className={classes.caseStudyTag}>Responsive Web App</div>
        <div className={classes.caseStudyTag}>B2C</div>
        <div className={classes.caseStudyTag}>Military</div>
        <p>
          Finding adequate employment is the number one issue for military
          members exiting the armed forces. This service was created to increase
          the likelihood of a successful career transition from military service
          to the civilian job market. See how I helped bring this online service
          to life.
        </p>
        <button className={classes.button}>Read More</button>
      </div>
    </div>
  );
}

export default CaseStudy1;
