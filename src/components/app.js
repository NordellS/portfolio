import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Startpage from "./startpage"

import PersonPresentation from "./personPresentation"
import SkillsPresentation from "./skillsPresentation"
import StudiesPresentation from "./studiesPresentation"
import TechPresentation from "./techPresentation"

import CasePage from "./casePage"
import CaseTechSpecs from "./caseTechSpecs"
import CaseInfo from "./caseInfo"

import WiewCodeButton from "./Buttons/wiewCodeButton"
import SeeLiveButton from "./Buttons/seeLiveButton"
import ToLinkedInButton from "./Buttons/toLinkedInButton"
import ToGithubButton from "./Buttons/toGithubButton"


class App extends React.Component {

  render() {
    return (

      <Startpage />
      // <Router>
      //   <div>
      //     <ul>
      //       <li><Link to="/blog">Blog posts</Link></li>
      //       <li><Link to="/about">About page</Link></li>
      //     </ul>
      //     <Route path="/blog/" component={BlogPosts} />
      //     <Route path="/blog/hi" exact="true" component={BlogPosts} />
      //     <Route path="/about" component={AboutPage} />
      //   </div>
      // </Router>
    )
  }

}

export default App
