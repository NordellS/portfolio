import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import CaseTechSpecs from "./caseTechSpecs"
import CaseInfo from "./caseInfo"

class CasePage extends React.Component {

  render() {

    return (
      <div className="casePageContainer">

        <CaseTechSpecs/>
        <CaseInfo/>

      </div>
    )
  }

}

export default CasePage
