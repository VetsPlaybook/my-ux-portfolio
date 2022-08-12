import React from "react";
import classes from "./HealthMap.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

function HealthMap() {
  return (
    <div className={classes.container}>
      <div className={classes.verticalLine} />

      <div className={classes.caseStudy1}>
        <Link href="/healthmap" scroll={false}>
          <motion.div
            className={classes.caseStudyLogoBackground}
            layoutId="imageBackground2"
          >
            <motion.img
              src="images/healthMapLogo.png"
              className={classes.caseStudyLogo}
              layoutId="image2"
            />
          </motion.div>
        </Link>

        <div className={classes.caseStudyDescription}>
          <h2>HealthMap - Intuitive GIS Data </h2>
          <div className={classes.caseStudyTagHolder}>
            <button className={classes.caseStudyTag}>Mobile App</button>
            <button className={classes.caseStudyTag}>B2B</button>
            <button className={classes.caseStudyTag}>Healthcare</button>
            <button className={classes.caseStudyTag}>Insurance</button>
            <button className={classes.caseStudyTag}>Pharmacueticals</button>
            <button className={classes.caseStudyTag}>GIS</button>
          </div>
          <p>
            The social determinants of health are the economic, social,
            environmental, educational, and health related conditions that help
            determine how healthy a community is. However, gathering,
            organizing, and visualizing this data is a challenge. See how I
            helped increase the usability of this web application for both new
            and experienced users.
          </p>
          <Link href="/healthmap">
            <button className={classes.button}>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HealthMap;
