import React from "react";
import classes from "./LofiWireframe.module.scss";

function LofiWireframe() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h3>
          <span className={classes.color}>
            Design phase - Style & Wireframes
          </span>
        </h3>
        <h1>Choosing the style for this web app</h1>
      </div>
      <div className={classes.descriptionContainer}>
        <p>
          Our approach towards the style of our web app was heavily influenced
          by the data we collected from customers.{" "}
          <span className={classes.bold}>
            While many veteran specific businesses use military imagery to
            attract veterans, our data showed that veterans tended to avoid
            those businesses and referred to them as being "not up to date and
            poorly designed". In addition, our data showed that this user group
            closely associated the business casual style of dress with
            professionalism.{" "}
          </span>
          Because of these data points, we use very little military imagery to
          better appeal to this group, and included a focus on 1-on-1
          coaching/service in the business offering.
        </p>
      </div>
    </div>
  );
}

export default LofiWireframe;
