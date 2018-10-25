import React from "react"

class SkillsPresentation extends React.Component {

  render() {
    return (
      <section>
        <h3>Skills</h3>
        <div className="skillsContainer">
          <div className="textBox">
            <h4>Code</h4>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript ES6</li>
            <li>React</li>
            <li>SASS</li>
            <li>BEM methodology</li>
            <li>GitHub</li>
            <li>Node.js</li>
          </div>
          <div className="textBox">
            <h4>Toolbox</h4>
            <li>Atom</li>
            <li>Adobe Photoshop</li>
            <li>Microsoft Office Programs</li>
            <li>G Suite</li>
            <li>Keynote</li>
            <li>Slack</li>
          </div>
          <div className="textBox">
            <h4>More</h4>
            <li>Project lead</li>
            <li>Concept development</li>
            <li>Agile methodology</li>
          </div>
          <div className="textBox">
            <h4>Upcoming</h4>
            <li>Anime JS</li>
            <li>Redux</li>
          </div>
        </div>
      </section>
    )
  }

}

export default SkillsPresentation
