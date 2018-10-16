import React from "react"
import { HashRouter as Router, Route } from "react-router-dom"

import StartPage from "./StartPage/startPage"
import CasePage from "./CasePage/casePage"
import Footer from "./Footer/footer"

class App extends React.Component {

constructor(props) {
    super(props)
    this.state = {
      page: "StartPage"
    }
  }

    goToStart = () => {
      this.setState({ page: "StartPage" })
    }

    goToCase = () => {
      this.setState({ page: "CasePage" })
    }

    render() {
      return (
        <div>
          <Router>
            <div>
              <Route path="/" exact="true" component={StartPage} />
              <Route path="/portfolio" exact="true" component={StartPage} />
              <Route path="/case/:id" exact="true" component={CasePage} />
            </div>
          </Router>
          <Footer />
        </div>
      )
    }
}

export default App
