import React from "react";
import classes from "./Gif.module.scss";

function Gif() {
  return (
    <div className={classes.container}>
      <img src="images/healthMapMockup.gif" />
    </div>
  );
}

export default Gif;
