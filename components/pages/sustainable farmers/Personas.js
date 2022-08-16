import React from "react";
import classes from "./Personas.module.scss";

function Personas() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h3>
          <span className={classes.color}>
            Planning phase - Customer Personas
          </span>
        </h3>
        <h1>Who are our customers?</h1>
      </div>
      <div className={classes.descriptionContainer}>
        <p>
          During the interview and survey phase of our research, we started to
          notice that users fell into one of four groups:{" "}
          <span className={classes.bold}>
            Farmers who were concerned with sustaibable practices, consumers who consciously made sustainable purchases, health conscious people, and sustainability activists.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Personas;
