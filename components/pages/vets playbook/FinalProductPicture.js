import React from 'react'
import classes from "./FinalProductPicture.module.scss";


function FinalProductPicture() {
  return (
    <div className={classes.container}>
        <img className={classes.image} src="images/vetsplaybook/finalProduct.webp" />
    </div>
  )
}

export default FinalProductPicture