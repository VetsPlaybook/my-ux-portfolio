import React from "react";
import classes from "./Homepage.module.scss";
import { motion } from "framer-motion";

function Homepage() {
  return (
    <motion.div
      className={classes.container}
      layoutId="imageBackground2"
      transition={{ duration: 0.8 }}
    >
      <div className={classes.allInformation}>
        <motion.div
          className={classes.title}
          initial={{ opacity: "0%", y: 50 }}
          animate={{ opacity: "100%", y: 0, transition: { duration: 0.8, delay: .8 } }}
        >
          <h1>Health Map</h1>
        </motion.div>
        <motion.div
          className={classes.subTitle}
          initial={{ opacity: "0%", y: 50 }}
          animate={{ opacity: "100%", y: 0, transition: { duration: 0.8, delay: .8 } }}
        >
          <p>A web app for analyzing a community's health</p>
        </motion.div>

        <motion.img
          src="images/healthMapLogo.png"
          layoutId="image2"
          className={classes.logo}
          initial={{ x: -770, y: -210 }}
          animate={{ x: -0, y: 0, transition: { duration: 0.8 } }}
        />
      </div>
    </motion.div>
  );
}

export default Homepage;
