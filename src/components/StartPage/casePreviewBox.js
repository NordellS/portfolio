import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"

class CasePreviewBox extends React.Component {
  render() {
    return (
      <div className="CasePreviewBox">
        <Link to={`/case/${this.props.id}`}>
          <div className="CasePreviewTextContainer">
            <h4>{this.props.headline}</h4>
          </div>
          <img src={this.props.image} className="caseImage" alt="portfolio case" />
        </Link>
      </div>
    )
  }

}

export default CasePreviewBox
