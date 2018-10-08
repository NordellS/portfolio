import React from "react"
import ReactDOM from "react-dom"

class CasePreviewBox extends React.Component {
  render() {
        return (
          <div className="CasePreviewBox">
            <div className="CasePreviewText">{this.props.description} </div>
            <img src={this.props.image} className="caseImage" alt="case-image" />
          </div>
        )
  }

}

export default CasePreviewBox
