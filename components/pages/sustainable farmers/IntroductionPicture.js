import React from 'react'
import classes from "./IntroductionPicture.module.scss";

function IntroductionPicture() {
  return (
    <div className={classes.container}>
    <img className={classes.image} src="images/healthmap/introduction.png" />
</div>
  )
}

export default IntroductionPicture