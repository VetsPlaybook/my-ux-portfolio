import React from "react";
import classes from "./LofiWireframe.module.scss";

function LofiWireframe() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h3>
          <span className={classes.color}>Design phase - Lo-fi Wireframes</span>
        </h3>
        <h1>Wireframing the solution</h1>
      </div>
      <div className={classes.descriptionContainer}>
        <p>
        During the interviews, the team uncovered that the largest reasons that donors contributed to a cause were that the organization made them <span className={classes.bold}>feel that they are a part of a mission, they don't have time but want to contribute, they want to take action into their own hands, and personal health.</span>
          <br />
          <br />          
          So our solution was to <span className={classes.bold}>redesign all content the donor would have with the company to better fit the needs of these individual contributors. However, for brevity, I will focus on the redesign of the donor page.</span> 
          
        </p>
      </div>
    </div>
  );
}

export default LofiWireframe;
