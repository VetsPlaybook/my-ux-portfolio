import React from "react";
import classes from "./CaseStudies.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

function CaseStudyTitle() {
  return (
    <div className={classes.container} id='case-studies'>
      <div className={classes.verticalLine} />

      <div className={classes.caseStudy1} >
        <div className={classes.pageTitle}>
          <h3>Recent work</h3>
          <h1>UX Case Studies</h1>
          <h4>
            Seeing is believing. Explore how I have taken initial ideas and
            turned them into reality
          </h4>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyTitle;
