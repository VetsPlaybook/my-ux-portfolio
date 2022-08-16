import React from 'react'
import classes from "./LessonsLearnedPicture.module.scss";

function LessonsLearnedPicture() {
  return (
    <div className={classes.container}>
        <img className={classes.image} src="images/vetsplaybook/lessonsLearned1.webp" />
        <img className={classes.image2} src="images/vetsplaybook/lessonsLearned2.webp" />
    </div>
  )
}

export default LessonsLearnedPicture