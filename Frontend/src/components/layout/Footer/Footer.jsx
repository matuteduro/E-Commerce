import React from 'react'
import playStore from "../../../images/playstore.png"
import appStore from "../../../images/appstore.png"
import "./Footer.css"

const Footer = () => {
  return (
   <footer id="footer">
    <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download our App for Android and iOS</p>
        <img src={playStore} alt="playstore"/>
        <img src={appStore} alt="appstore"/>
    </div>

    <div className="midFooter">
        <h1>DURODEV.</h1>
        <p>High Quality is our first priority</p>
        <p>Copyright 2022 &copy; Durodev</p>
    </div>

    <div className="rightFooter">
        <h4>Follow Me</h4>
        <a href="https://www.linkedin.com/in/matiasduro/">Linkedin</a>

    </div>
    </footer>


  )
}

export default Footer