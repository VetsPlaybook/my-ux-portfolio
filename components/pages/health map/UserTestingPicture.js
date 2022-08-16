import React from 'react'
import classes from "./UserTestingPicture.module.scss";

function UserTestingPicture() {
  return (
    <div className={classes.container}>
        <img className={classes.image} src="images/healthmap/userTesting1.webp" />
        <img className={classes.image2} src="images/healthmap/userTesting2.webp" />
    </div>
  )
}

export default UserTestingPicture