import { useState, useCallback, useEffect } from "react";
import classes from "./Title.module.scss";
import { motion } from "framer-motion";

//layoutId="image"
//className={classes.logo}
//initial={{ x: -770, y: -210,}}
//animate={{ x: -0, y: 0, transition: { duration: 0.8 } }}

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};
function Title() {
  const isLgDesktop = useMediaQuery(2500);
  const isMdDesktop = useMediaQuery(2000);
  const isDesktop = useMediaQuery(1650);
  const isTablet = useMediaQuery(1366);
  const isSmTablet = useMediaQuery(1000);
  const isPhone = useMediaQuery(660);

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
          animate={{
            opacity: "100%",
            y: 0,
            transition: { duration: 0.8, delay: 0.8 },
          }}
        >
          <h1>Vets Playbook</h1>
        </motion.div>
        <motion.div
          className={classes.subTitle}
          initial={{ opacity: "0%", y: 50 }}
          animate={{
            opacity: "100%",
            y: 0,
            transition: { duration: 0.8, delay: 0.8 },
          }}
        >
          <p>An employment service for military veterans</p>
        </motion.div>

        {isLgDesktop && (
          <motion.img
            src="images/vetsPlaybookLogo.png"
            layoutId="image"
            className={classes.logo}
            initial={{ x: -770, y: -210 }}
            animate={{ x: -0, y: 0, transition: { duration: 0.8 } }}
          />
        )}

        {isMdDesktop && (
          <motion.img
            src="images/vetsPlaybookLogo.png"
            layoutId="image"
            className={classes.logo}
            initial={{ x: -600, y: -210 }}
            animate={{ x: -0, y: 0, transition: { duration: 0.8 } }}
          />
        )}

        {isDesktop && (
          <motion.img
            src="images/vetsPlaybookLogo.png"
            layoutId="image"
            className={classes.logo}
            initial={{ x: -500, y: -210 }}
            animate={{ x: -0, y: 0, transition: { duration: 0.8 } }}
          />
        )}

        {isTablet && (
          <motion.img
            src="images/vetsPlaybookLogo.png"
            layoutId="image"
            className={classes.logo}
            initial={{ x: -400, y: -210 }}
            animate={{ x: -0, y: 0, transition: { duration: 0.8 } }}
          />
        )}

        {isSmTablet && (
          <motion.img
            src="images/vetsPlaybookLogo.png"
            layoutId="image"
            className={classes.logo}
            initial={{ x: -200, y: -150 }}
            animate={{ x: -0, y: 0, transition: { duration: 0.8 } }}
          />
        )}

        {isPhone && (
          <motion.img
            src="images/vetsPlaybookLogo.png"
            layoutId="image"
            className={classes.logo}
            initial={{ x: -30, y: -200 }}
            animate={{ x: -0, y: 0, transition: { duration: 0.8 } }}
          />
        )}
      </div>
    </motion.div>
  );
}

export default Title;
