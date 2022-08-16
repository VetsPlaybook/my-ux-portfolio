import React from 'react'
import classes from "./PersonaPicture.module.scss";

function PersonaPicture() {
  return (
    <div className={classes.container}>
        <img className={classes.image} src="images/healthmap/persona1.webp" />
        <img className={classes.image2} src="images/healthmap/persona2.webp" />
    </div>
  )
}

export default PersonaPicture