import { React, useState, useEffect } from "react";
import classes from "./Navbar.module.scss";
import Link from "@components/customLink/Link";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import Footer from "../footer/Footer";

function NavBar(props) {
  const [open, cycleOpen] = useCycle(false, true);
  const [primaryColor, setprimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [buttonColor, setButtonColor] = useState("");
  const [hamburgerButtonColor, setHamburgerButtonColor] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.pathname == "/") {
      setprimaryColor(classes.black);
      setSecondaryColor(classes.green);
      setButtonColor(classes.homeButton);
      setHamburgerButtonColor(classes.homeButtonHamburger);
    }

    if (router.pathname == "/vetsplaybook") {
      setprimaryColor(classes.white);
      setSecondaryColor(classes.blue);
      setButtonColor(classes.vetsPlaybookButton);
      setHamburgerButtonColor(classes.vetsPlaybookButtonHamburger);
    }

    if (router.pathname == "/healthmap") {
      setprimaryColor(classes.white);
      setSecondaryColor(classes.orange);
      setButtonColor(classes.healthMapButton);
      setHamburgerButtonColor(classes.healthMapButtonHamburger);
    }

    if (router.pathname == "/sustainablefarmers") {
      setprimaryColor(classes.white);
      setSecondaryColor(classes.yellow);
      setButtonColor(classes.sustainableFarmersButton);
      setHamburgerButtonColor(classes.sustainableFarmersButtonHamburger);
    }
  });

  return (
    <>
      <nav className={classes.mainNavBar}>
        <Link href="/">       
            <div className={classes.logo}>
              <h4>
                <span className={primaryColor}>Joseph</span>{" "}
                <span className={secondaryColor}>Morris</span>
              </h4>
            </div>  
        </Link>
        <ul className={classes.navItems}>
          <Link href="/">
            <h4 className={classes.navItem}>Home</h4>
          </Link>
          <Link href="/#case-studies">
            <h4 className={classes.navItem}>Case Studies</h4>
          </Link>
          <a target="_blank" href="https://calendly.com/joseph-morris-ux/30min">
            <button className={buttonColor}>Hire me!</button>
          </a>
          <div className={classes.hamburgerButton} onClick={cycleOpen}>
            <img src="images/hambuger-icon.png" className={classes.image}/>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div
                className={classes.hamburgerMenuBackground}
                initial={{
                  width: 0,
                  height: "55vh",
                  backgroundColor: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
                animate={{
                  width: "26rem",
                  backgroundColor: "white",
                  height: "55vh",
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
                exit={{
                  width: 0,
                  transition: { delay: 0.1, duration: 0.3 },
                }}
              >
                <div className={classes.closeButton} onClick={cycleOpen}>
                  X
                </div>
                <motion.div
                  className={classes.hamburgerOptionHolder}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                    transition: { delay: 0.1, duration: 0.2 },
                  }}
                >
                  <div className={classes.hamburgerOption} onClick={cycleOpen}>
                    Home
                  </div>

                  <Link href="/#case-studies">
                    <a>
                      <div
                        className={classes.hamburgerOption}
                        onClick={cycleOpen}
                      >
                        Case Studies
                      </div>
                    </a>
                  </Link>

                  <a
                    target="_blank"
                    href="https://calendly.com/joseph-morris-ux/30min"
                  >
                    <button
                      className={hamburgerButtonColor}
                      onClick={cycleOpen}
                    >
                      Hire me!
                    </button>
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </ul>
      </nav>
      {props.children}
      <Footer />
    </>
  );
}

export default NavBar;
