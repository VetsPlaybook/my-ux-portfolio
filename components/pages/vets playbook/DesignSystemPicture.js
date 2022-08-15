import React from 'react'
import classes from "./DesignSystemPicture.module.scss";


function DesignSystemPicture() {
  return (
    <div className={classes.container}>
        <img className={classes.image} src="images/vetsplaybook/designSystem1.webp" />
        <img className={classes.image2} src="images/vetsplaybook/designSystem2.webp" />
    </div>
  )
}

export default DesignSystemPicture