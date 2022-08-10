import React from "react";
import classes from "./Services.module.scss";

function Services() {
  return (
    <div className={classes.container}>
      <div className={classes.verticalLine}/>
      <div className={classes.pageTitleAndButtons}>
        <div className={classes.pageTitle}>
          <h3>How I work</h3>
          <h1>Design Process</h1>
          <h4>
            Achieving your business goals starts with excellent user experience
          </h4>
        </div>
        <div className={classes.buttons}>
          <button className={classes.button1}>Start a project</button>
          <button className={classes.button2}>See examples</button>
        </div>
      </div>
      <div className={classes.designProcess1and2}>
        <div className={classes.planning}>
          <h2>1. Planning</h2>
          <p>
            <span className={classes.color}>Plan first.</span> Designing the right experience starts with asking the
            right questions, and ensuring we both have the same goal in mind.
            This stage includes a 1-on-1 interview about the project,
            establishing the right requirements, and ensuring that we are
            targeting the right users.
          </p>
        </div>

        <div className={classes.design}>
          <h2>2. Design</h2>
          <p>
          <span className={classes.color}>Design second. </span> During this phase you will see your app or website
            come to life as we move from the initial wireframes and transition
            to the final design mockup. In the end, you will receive a high
            quality prototype of your app or website that simulates the final
            result.
          </p>
        </div>
      </div>
      <div className={classes.designProcess3and4}>
        <div className={classes.development}>
          <h2>3. Development</h2>
          <p>
          <span className={classes.color}>Develop third. </span> Lets turn your prototype into a fully functional
            website or app. In this phase I will either work closely with your
            app development team, or personally develop a pixel perfect website
            based on the final mockup.
          </p>
        </div>

        <div className={classes.interviewAndTesting}>
          <h2>4. Interviews & Testing</h2>
          <p>
          <span className={classes.color}>Don't forget to test.</span> User interviews and user testing ensure that
            we are building the right user experience. During every phase, I am
            more than happy to do user testing with your customers to ensure the
            best possible solutions for their needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
