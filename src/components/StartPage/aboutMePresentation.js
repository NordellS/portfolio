import React from "react"

import ToGithubButton from "../Buttons/toGithubButton"

class AboutMePresentation extends React.Component {

  render() {
    return (
      <div className="aboutContainer">
        <div className="aboutContainerImage">
          <img src="./images/me.png" alt="Sara Nordell" />
        </div>
        <div className="aboutContainerText">
          <h2>Sara Nordell</h2>
          <h1>Frontend Developer</h1>
          <p>
          Hi! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras pellentesque finibus lacus, et tempus libero dapibus vel.
          Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
          </p>
          <div className="contactInfo">
            <p>sara@nordell.me</p>
            <p>+46 (0)70 237 44 63</p>
          </div>
          <ToGithubButton />
        </div>
      </div>
    )
  }

}

export default AboutMePresentation
