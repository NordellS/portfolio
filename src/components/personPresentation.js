import React from "react"
import ToGithubButton from "./Buttons/toGithubButton"

class PersonPresentation extends React.Component {

  render() {

    return (
      <div className="aboutContainer">
        <div className="aboutContainerImage">
          <img src="./images/userImage.png" alt="Image of Sara Nordell" />
        </div>
        <div className="aboutContainerText">
          <h2>Sara Nordell</h2>
          <h1>Frontend Developer</h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque finibus lacus, et tempus libero dapibus vel.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
          <ToGithubButton />
        </div>
      </div>
    )
  }

}

export default PersonPresentation
