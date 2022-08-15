import React from 'react'
import classes from "./LofiWireframePicture.module.scss";

function LofiWireframePicture() {
  return (
    <div className={classes.container}>
        <img className={classes.image} src="images/vetsplaybook/lofiWireframe1.png" />
        <img className={classes.image2} src="images/vetsplaybook/lofiWireframe2.png" />
    </div>
  )
}

export default LofiWireframePicture