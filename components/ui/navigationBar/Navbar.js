import React from "react";
import classes from "./Navbar.module.scss";
import Link from "@components/customLink/Link";

function NavBar(props) {
  return (
    <>
      <nav className={classes.mainNavBar}>
        <Link href="/">
          <a>
            <div className={classes.logo}>
              <h4>Joseph Morris</h4>
            </div>
          </a>
        </Link>
        <ul className={classes.navItems}>
          <h4 className={classes.navItem}>Home</h4>
          <h4 className={classes.navItem}>Design Process</h4>
          <h4 className={classes.navItem}>Case Studies</h4>
          <button className={classes.button}>Hire me!</button>
        </ul>
      </nav>
      {props.children}
    </>
  );
}

export default NavBar;
