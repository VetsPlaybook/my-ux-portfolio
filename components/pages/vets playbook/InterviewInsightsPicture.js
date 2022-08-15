import React from 'react'
import classes from "./InterviewInsightsPicture.module.scss";

function InterviewInsightsPicture() {
  return (
    <div className={classes.container}>
        <img className={classes.image} src="images/vetsplaybook/interviewInsights.png" />
        <img className={classes.image2} src="images/vetsplaybook/interviewInsights2.png" />
    </div>
  )
}

export default InterviewInsightsPicture