import React from 'react'
import classes from "./IntroductionPicture.module.scss";

function IntroductionPicture() {
  return (
    <div className={classes.container}>
    <img className={classes.image} src="images/healthmap/introduction.webp" />
</div>
  )
}

export default IntroductionPicture