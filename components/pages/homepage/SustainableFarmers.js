import React from "react";
import classes from "./SustainableFarmers.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

function SustainableFarmers() {
  return (
    <div className={classes.container}>
      <div className={classes.verticalLine} />

      <div className={classes.caseStudy1}>
        <Link href="/sustainablefarmers" scroll={false}>
          <motion.div
            className={classes.caseStudyLogoBackground}
            layoutId="imageBackground3"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src="images/sustainableFarmersLogo.png"
              className={classes.caseStudyLogo}
              layoutId="image3"
            />
          </motion.div>
        </Link>

        <div className={classes.caseStudyDescription}>
          <h2>Sustainable Farmers - Increasing Donations</h2>
          <div className={classes.caseStudyTagHolder}>
            <button className={classes.caseStudyTag}>Responsive Web App</button>
            <button className={classes.caseStudyTag}>B2C</button>
            <button className={classes.caseStudyTag}>Non-profit</button>
            <button className={classes.caseStudyTag}>Aggriculture</button>
          </div>
          <p>
            Many non-profit businesses rely on contributions from both members
            and non-members in order to continue performing their mission.
            However, receiving donations are largely based on the experience the
            donor receives when interacting with the business. See how I helped
            improve the user experience of this website in order to increase the
            total amount that donors would be willing to contribute towards the
            company's mission.
          </p>
          <Link href="/sustainablefarmers">
            <button className={classes.button}>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SustainableFarmers;
