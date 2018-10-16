import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class NavigationBackButton extends React.Component {

  render() {
    return (
      <Link to="/portfolio">
        <button className="navigationButtonTop-small"> &larr; Back </button>
      </Link>
    )
  }

}

export default NavigationBackButton
