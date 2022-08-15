import React from 'react'
import classes from "./IntroductionVideo.module.scss";

function IntroductionVideo() {
  return (
    <div className={classes.container}>
        <iframe
            className={classes.introVideo}
            src="https://rt.cincopa.com/iframe.aspx?fid=AUHA_w-n7McR"
            frameBorder="0"
            allow="fullscreen"
          ></iframe>
    </div>
  )
}

export default IntroductionVideo