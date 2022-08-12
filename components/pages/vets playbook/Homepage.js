import React from "react";
import classes from "./Homepage.module.scss";
import { motion } from "framer-motion";
//transition={{duration: 10}}

function Homepage() {
  return (
    <motion.div
    className={classes.container}
    layoutId="imageBackground"
    transition={{ duration: 0.8 }}
  >
    <div className={classes.allInformation}>
      <motion.div
        className={classes.title}
        initial={{ opacity: "0%", y: 50 }}
        animate={{ opacity: "100%", y: 0, transition: { duration: 0.8, delay: .8 } }}
      >
        <h1>Vets Playbook</h1>
      </motion.div>
      <motion.div
        className={classes.subTitle}
        initial={{ opacity: "0%", y: 50 }}
        animate={{ opacity: "100%", y: 0, transition: { duration: 0.8, delay: .8 } }}
      >
        <p>An employment service for military veterans</p>
      </motion.div>

      <motion.img
        src="images/vetsPlaybookLogo.png"
        layoutId="image"
        className={classes.logo}
        initial={{ x: -770, y: -210 }}
        animate={{ x: -0, y: 0, transition: { duration: 0.8 } }}
      />
    </div>
  </motion.div>
  );
}

export default Homepage;
