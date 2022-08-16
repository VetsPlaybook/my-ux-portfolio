import React from 'react'
import classes from "./InterviewInsightsPicture.module.scss";

function InterviewInsightsPicture() {
  return (
    <div className={classes.container}>
        <img className={classes.image} src="images/vetsplaybook/interviewInsights.webp" />
        <img className={classes.image2} src="images/vetsplaybook/interviewInsights2.webp" />
    </div>
  )
}

export default InterviewInsightsPicture