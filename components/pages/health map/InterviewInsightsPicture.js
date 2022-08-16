import React from 'react'
import classes from "./InterviewInsightsPicture.module.scss";

function InterviewInsightsPicture() {
  return (
    <div className={classes.container}>
        <img className={classes.image} src="images/healthmap/interviewInsights1.webp" />
        <img className={classes.image2} src="images/healthmap/interviewInsights2.webp" />
    </div>
  )
}

export default InterviewInsightsPicture