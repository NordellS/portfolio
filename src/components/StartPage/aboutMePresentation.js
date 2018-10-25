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
            Hi! I’m Sara, a Frontend Developer with years of experience from the
            media industry and a big interest for design and new technologies.
            I have worked in different positions in tv production, tv-format sales
            and as project manager for two mobile applications (quiz games). I truly enjoy working
            together with others to create the best possible product for the user.
            As a developer I love to create products that make peoples life’s easier,
            funnier or changed in a new direction.
          </p>
          <div className="contactInfo">
            <p><a href="mailto:sara@nordell.me">sara@nordell.me</a></p>
            <p>+46 (0)70 237 44 63</p>
          </div>
          <ToGithubButton />
        </div>
      </div>
    )
  }

}

export default AboutMePresentation
