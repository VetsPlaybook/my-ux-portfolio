import React from 'react'
import classes from "./UserTestingPicture.module.scss";

function UserTestingPicture() {
  return (
    <div className={classes.container}>
        <img className={classes.image} src="images/sustainablefarmers/userTesting1.webp" />
        <img className={classes.image2} src="images/sustainablefarmers/userTesting2.webp" />
    </div>
  )
}

export default UserTestingPicture