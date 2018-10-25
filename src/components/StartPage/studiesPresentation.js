import React from "react"

class StudiesPresentation extends React.Component {

  render() {
    return (
      <section>
        <h3>Studies</h3>
        <div className="studiesContainer">
          <div className="textBox">
            <h4>Frontend Developer</h4>
            <p>
            Full-time 12 w boot camp / intensive program. Covering everything from
            the basics of programming to how to structure and build bigger web projects.
            Focus on JavaScript. Total 480 coding hours, 50+ individual tasks (in HTML,
            CSS, JavaScript, JSX, React, Node.js) and 6 sprints with demos together with
            companies like Volumental, Bonnier, Comprend and Svenska Spel.
              <br />
            Stockholm, September - November 2018
            </p>
          </div>
          <div className="textBox">
            <h4>Media and communication</h4>
            <p>
            At Stockholm University (JMK, Department of Media Studies,
            Section for Journalism, Media and Communication) 2009-2012.
            </p>
          </div>
        </div>
      </section>

    )
  }

}

export default StudiesPresentation
