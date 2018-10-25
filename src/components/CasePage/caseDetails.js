import React from "react"
import SeeLiveButton from "../Buttons/seeLiveButton"
import ToGithubButton from "../Buttons/toGithubButton"

class CaseDetails extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="caseDetailsContainer">
        <div className="caseDetails">
          <div className="imageContainer">
            <img src={this.props.image} className="caseImage" alt="portfolio case" />
          </div>
          <h1>{this.props.headline}</h1>
          <p>{this.props.about}</p>
        </div>
        <ToGithubButton />
      </div>

    )
  }

}

export default CaseDetails
