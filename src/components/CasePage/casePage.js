import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"

import CaseDetails from "./caseDetails"
import NavigationBackButton from "../Buttons/navigationBackButton"

const casesJson = require("../casesJson.json")

class CasePage extends React.Component {

  render() {
    const project = casesJson.cases[this.props.match.params.id - 1]

    return (
      <div>
        <div className="pageContainer">
          <NavigationBackButton />
          <div className="CaseDetailsContainer">
            {
              <CaseDetails
                headline={project.headline}
                image={project.image}
                about={project.about}
                id={project.id} />
            }
          </div>
          <section>
            <h3>Tech Specs</h3>
            <div className="skillsContainer">
              <div className="textBox">
                <h4>Code</h4>
                {project.code
                  .map(item =>
                    <li>{item}</li>)}
              </div>
              <div className="textBox">
                <h4>Toolbox</h4>
                {project.toolbox
                  .map(item =>
                    <li>{item}</li>)}
              </div>
              <div className="textBox">
                <h4>More</h4>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }

}

export default CasePage
