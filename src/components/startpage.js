import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import PersonPresentation from "./personPresentation"
import SkillsPresentation from "./skillsPresentation"
import StudiesPresentation from "./studiesPresentation"
import TechPresentation from "./techPresentation"
import CasePreviewBox from "./casePreviewBox"

import CasePage from "./casePage"
import CaseTechSpecs from "./caseTechSpecs"
import CaseInfo from "./caseInfo"

import WiewCodeButton from "./Buttons/wiewCodeButton"
import SeeLiveButton from "./Buttons/seeLiveButton"
import ToLinkedInButton from "./Buttons/toLinkedInButton"
import ToGithubButton from "./Buttons/toGithubButton"

const casesJson = require("./cases.json")

class Startpage extends React.Component {

  render() {
    return (
      <div className="startpageContainer">
        <PersonPresentation/>
        <TechPresentation/>

        <div className="CasePreviewBoxContainer">
          {casesJson.cases.map(caseItem =>
           <CasePreviewBox
           description={caseItem.description} image={caseItem.image} />
          )}
        </div>

        <SkillsPresentation/>
        <StudiesPresentation/>
      </div>
    )
  }

}

export default Startpage
