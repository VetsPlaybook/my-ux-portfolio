import React from 'react'
import classes from "./UserTestingPicture.module.scss";

function UserTestingPicture() {
  return (
    <div className={classes.container}>
        <img className={classes.image} src="images/vetsplaybook/userTesting1.webp" />
        <img className={classes.image2} src="images/vetsplaybook/userTesting2.webp" />
    </div>
  )
}

export default UserTestingPicture