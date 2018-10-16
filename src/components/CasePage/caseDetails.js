import React from "react"
import SeeLiveButton from "../Buttons/seeLiveButton"

class CaseDetails extends React.Component {

  render() {
    return (
      <div className="caseDetailsContainer">
        <div className="caseDetails">
          <img src={this.props.image} className="caseImage" alt="portfolio case" />
          <h1>{this.props.headline}</h1>
          <p>{this.props.about}</p>
        </div>
        <SeeLiveButton />
      </div>

    )
  }

}

export default CaseDetails
