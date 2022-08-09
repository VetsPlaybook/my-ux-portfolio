import React from "react";
import classes from "./Homepage.module.scss";

function Homepage() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.verticalLine} />
        <div className={classes.introTitle}>
          <h3>Hello, I am</h3>
          <h1>Joseph Morris</h1>
          <h4>Professional UI/UX & Web Developer</h4>
          <p>Lets work together to create the right user experience for your customers and stakeholders</p>
          <div className={classes.buttonContainer}>
          <button className={classes.button1}>View my work</button>
          <button className={classes.button2}>Work with me!</button>
          </div>
        </div>
        <img src="images/selfPortrait.png" className={classes.image} />
        <img src="images/selfPortrait2.png" className={classes.image2} />
        
      </div>
    </>
  );
}

export default Homepage;
