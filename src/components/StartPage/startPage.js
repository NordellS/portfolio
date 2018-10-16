import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"

import AboutMePresentation from "./aboutMePresentation"
import SkillsPresentation from "./skillsPresentation"
import StudiesPresentation from "./studiesPresentation"
import TechPresentation from "./techPresentation"
import CasePreviewBox from "./casePreviewBox"

const casesJson = require("../casesJson.json")

class StartPage extends React.Component {

  render() {
    return (
      <div>
        <div className="pageContainer">
          <AboutMePresentation />
          <TechPresentation />

          <div className="CasePreviewBoxContainer">
            {casesJson.cases.map(caseItem =>
              <CasePreviewBox
                headline={caseItem.headline}
                image={caseItem.image}
                id={caseItem.id} />)
            }
          </div>

          <SkillsPresentation />
          <StudiesPresentation />
        </div>
      </div>
    )
  }

}

export default StartPage
