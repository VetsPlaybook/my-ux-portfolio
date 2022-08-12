import React from "react";
import classes from "./Homepage.module.scss";
import { motion } from "framer-motion";

function Homepage() {
  return (
    <motion.div
      className={classes.container}
      layoutId="imageBackground3"
      transition={{ duration: 0.8 }}
    >
      <div className={classes.allInformation}>
        <motion.div
          className={classes.title}
          initial={{ opacity: "0%", y: 50 }}
          animate={{ opacity: "100%", y: 0, transition: { duration: 0.8, delay: .8 } }}
        >
          <h1>Sustainable Farmers</h1>
        </motion.div>
        <motion.div
          className={classes.subTitle}
          initial={{ opacity: "0%", y: 50 }}
          animate={{ opacity: "100%", y: 0, transition: { duration: 0.8, delay: .8 } }}
        >
          <p>A non-profit for sustainable aggriculture</p>
        </motion.div>

        <motion.img
          src="images/sustainableFarmersLogo.png"
          layoutId="image3"
          className={classes.logo}
          initial={{ x: -770, y: -210 }}
          animate={{ x: -0, y: 0, transition: { duration: 0.8 } }}
        />
      </div>
    </motion.div>
  );
}

export default Homepage;
