import React from 'react'
import classes from "./LofiWireframePicture.module.scss";

function LofiWireframePicture() {
  return (
    <div className={classes.container}>
        <img className={classes.image} src="images/vetsplaybook/lofiWireframe1.webp" />
        <img className={classes.image2} src="images/vetsplaybook/lofiWireframe2.webp" />
    </div>
  )
}

export default LofiWireframePicture