import React from 'react'
import classes from "./LessonsLearnedPicture.module.scss";

function LessonsLearnedPicture() {
  return (
    <div className={classes.container}>
        <img className={classes.image} src="images/sustainablefarmers/lessonsLearned1.webp" />
        <img className={classes.image2} src="images/sustainablefarmers/lessonsLearned2.webp" />
    </div>
  )
}

export default LessonsLearnedPicture