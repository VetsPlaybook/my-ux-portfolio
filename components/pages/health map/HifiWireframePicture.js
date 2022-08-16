import React from 'react'
import classes from "./HifiWireframePicture.module.scss";


function HifiWireframePicture() {
  return (
    <div className={classes.container}>
        <img className={classes.image} src="images/healthmap/healthMapMockup.gif" />
    </div>
  )
}

export default HifiWireframePicture