import React from 'react'
import classes from "./PersonaPicture.module.scss";

function PersonaPicture() {
  return (
    <div className={classes.container}>
        <img className={classes.image} src="images/vetsplaybook/persona1.png" />
        <img className={classes.image2} src="images/vetsplaybook/persona1Mobile.png" />
    </div>
  )
}

export default PersonaPicture