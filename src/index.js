import React from "react"
import ReactDOM from "react-dom"

import App from "./components/app"

import Startpage from "./components/startpage"
import PersonPresentation from "./components/personPresentation"
import TechPresentation from "./components/techPresentation"
import CasePreviewBox from "./components/casePreviewBox"
import SkillsPresentation from "./components/skillsPresentation"
import StudiesPresentation from "./components/studiesPresentation"

import CasePage from "./components/casePage"
import CaseTechSpecs from "./components/caseTechSpecs"
import CaseInfo from "./components/caseInfo"

import WiewCodeButton from "./components/Buttons/wiewCodeButton"
import SeeLiveButton from "./components/Buttons/seeLiveButton"
import ToLinkedInButton from "./components/Buttons/toLinkedInButton"
import ToGithubButton from "./components/Buttons/toGithubButton"

import "./components/Buttons/buttons.css"
import "./index.css"

ReactDOM.render(<App />, document.getElementById("root"))
