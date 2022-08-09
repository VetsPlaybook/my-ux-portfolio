import React from "react";
import classes from "./Homepage.module.scss";
import { motion } from "framer-motion";

function Homepage() {
  return (
    <>
      <motion.div
        className={classes.container}
        initial={{
          left: "1280px",
        }}
        animate={{
          left: "0px",
        }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.div
          className={classes.verticalLine}
          initial={{
            opacity: "0%",
          }}
          animate={{
            opacity: "100%",
          }}
          transition={{ delay: 1.5, duration: 0.8 }}
        />
        <motion.div
          className={classes.introTitle}
          initial={{
            opacity: "0%",
            position: "relative",
            right: "200px",
          }}
          animate={{
            position: "relative",
            right: "0px",
            opacity: "100%",
          }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <h3>Hello, I am</h3>
          <h1>Joseph Morris</h1>
          <h4>Professional UI/UX & Web Developer</h4>
          <p>
            Lets work together to create the right user experience for your
            customers and stakeholders
          </p>
          <div className={classes.buttonContainer}>
            <button className={classes.button1}>View my work</button>
            <button className={classes.button2}>Work with me!</button>
          </div>
        </motion.div>
        <motion.div
          className={classes.square1}
          initial={{
            rotate: "0deg",
            scale: 0.9,
          }}
          animate={{
            scale: 1,
            rotate: ["0deg", "90deg"],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              delay: 4,
            },
          }}
        />
        <motion.div
          className={classes.square2}
          initial={{
            rotate: "0deg",
            scale: 0.9,
          }}
          animate={{
            scale: 1,
            rotate: ["180deg", "0deg"],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              delay: 4,
            },
          }}
        />
        <motion.div
          className={classes.square3}
          initial={{
            rotate: "0deg",
            scale: 0.9,
          }}
          animate={{
            scale: 1,
            rotate: ["0deg", "90deg"],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              delay: 4,
            },
          }}
        />
        <motion.div
          className={classes.square4}
          initial={{
            rotate: "0deg",
            scale: 0.9,
          }}
          animate={{
            scale: 1,
            rotate: ["180deg", "0deg"],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              delay: 4,
            },
          }}
        />
        <motion.div
          className={classes.square5}
          initial={{
            rotate: "0deg",
            scale: 0.9,
          }}
          animate={{
            scale: 1,
            rotate: ["0deg", "90deg"],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              delay: 4,
            },
          }}
        />
        <motion.div
          className={classes.square6}
          initial={{
            rotate: "0deg",
            scale: 0.9,
          }}
          animate={{
            scale: 1,
            rotate: ["180deg", "0deg"],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              delay: 4,
            },
          }}
        />
        <motion.div
          className={classes.square7}
          initial={{
            rotate: "0deg",
            scale: 0.9,
          }}
          animate={{
            scale: 1,
            rotate: ["90deg", "0deg"],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              delay: 4,
            },
          }}
        />
        <motion.div
          className={classes.square8}
          initial={{
            rotate: "0deg",
            scale: 0.9,
          }}
          animate={{
            scale: 1,
            rotate: ["0deg", "180deg"],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              delay: 4,
            },
          }}
        />
        <motion.div
          className={classes.square9}
          initial={{
            rotate: "0deg",
            scale: 0.9,
          }}
          animate={{
            scale: 1,
            rotate: ["90deg", "0deg"],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              delay: 4,
            },
          }}
        />
        <motion.div
          className={classes.square10}
          initial={{
            rotate: "0deg",
            scale: 0.9,
          }}
          animate={{
            scale: 1,
            rotate: ["0deg", "180deg"],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              delay: 4,
            },
          }}
        />
        <motion.div
          className={classes.square11}
          initial={{
            rotate: "0deg",
            scale: 0.9,
          }}
          animate={{
            scale: 1,
            rotate: ["90deg", "0deg"],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              delay: 4,
            },
          }}
        />
        <motion.div
          className={classes.square12}
          initial={{
            rotate: "0deg",
            scale: 0.9,
          }}
          animate={{
            scale: 1,
            rotate: ["0deg", "180deg"],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              delay: 4,
            },
          }}
        />
        <motion.img
          src="images/selfPortrait3.png"
          className={classes.image}
          initial={{
            position: "relative",
            left: "1500px",
          }}
          animate={{
            position: "relative",
            left: "0px",
          }}
          transition={{ delay: 1.4, duration: 0.8 }}
        />
        <img src="images/selfPortrait2.png" className={classes.image2} />
        <img src="images/selfPortrait.png" className={classes.image3} />
      </motion.div>
    </>
  );
}

export default Homepage;
