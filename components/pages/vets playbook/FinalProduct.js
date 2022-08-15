import React from "react";
import classes from "./FinalProduct.module.scss";

function FinalProduct() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h3>
          <span className={classes.color}>
            Development Phase - Building the Product
          </span>
        </h3>
        <h1>What does the final product look like?</h1>
      </div>
      <div className={classes.descriptionContainer}>
        <p>
          <span className={classes.bold}>
            The final product is both desktop and mobile friendly.
          </span>{" "}
          It includes a package for those user's who want to learn on their own,
          as well as a package that offers more in-depth 1-on-1 services to help
          this user group find adequate employment. You may click the button
          below to see the working website.
          <a target="_blank" href="https://www.vetsplaybook.com/">
            <button className={classes.button}>See the website</button>
          </a>
        </p>
      </div>
    </div>
  );
}

export default FinalProduct;
