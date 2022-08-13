import React from "react";
import classes from "./VetsPlaybook.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

function VetsPlaybook() {
  return (
    <div className={classes.container}>
      <div className={classes.verticalLine} />

      <div className={classes.caseStudy1}>
        <Link href="/vetsplaybook">
          <motion.div
            className={classes.caseStudyLogoBackground}
            layoutId="imageBackground"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src="images/vetsPlaybookLogo.png"
              className={classes.caseStudyLogo}
              layoutId="image"
            />
          </motion.div>
        </Link>

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
          <Link href="/vetsplaybook">
            <button className={classes.button}>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VetsPlaybook;
