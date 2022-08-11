import React from "react";
import classes from "./CaseStudies.module.scss";
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

        <motion.img
          src="images/vetsPlaybookLogo.png"
          className={classes.caseStudyLogoBackground}
          whileHover={{ scale: 1.05 }}
        />

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

      <div className={classes.caseStudy2}>
        <motion.img
          src="images/healthMapLogo.png"
          className={classes.caseStudyLogoBackground2}
          whileHover={{ scale: 1.05 }}
        />

        <div className={classes.caseStudyDescription2}>
          <h2>HealthMap - Intuitive GIS Data</h2>
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
          <button className={classes.button}>Read More</button>
        </div>
      </div>

      <div className={classes.caseStudy3}>
        <motion.img
          src="images/sustainableFarmersLogo.png"
          className={classes.caseStudyLogoBackground3}
          whileHover={{ scale: 1.05 }}
        />

        <div className={classes.caseStudyDescription3}>
          <h2>Sustainable Farmers - Increasing Donations</h2>
          <div className={classes.caseStudyTagHolder}>
            <button className={classes.caseStudyTag}>Responsive Web App</button>
            <button className={classes.caseStudyTag}>B2C</button>
            <button className={classes.caseStudyTag}>Non-profit</button>
            <button className={classes.caseStudyTag}>Aggriculture</button>
          </div>
          <p>
            Many non-profit businesses rely on contributions from both members
            and non-members in order to continue performing their mission. See
            how I helped improve the user experience of this website in order to
            increase the total amount that donors would be willing to contribute
            towards the company's mission.
          </p>
          <button className={classes.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyTitle;
