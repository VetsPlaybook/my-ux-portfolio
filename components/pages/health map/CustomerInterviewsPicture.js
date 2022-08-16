import React from "react";
import classes from "./CustomerInterviewsPicture.module.scss";

function CustomerInterviewsPicture() {
  return (
    <div className={classes.container}>
        <img className={classes.image} src="images/healthmap/customerInterviews1.webp" />
        <img className={classes.image2} src="images/healthmap/customerInterviews2.webp" />
    </div>
      
    
  );
}

export default CustomerInterviewsPicture;
