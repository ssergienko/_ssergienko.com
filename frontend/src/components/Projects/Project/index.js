import React, { Component } from "react";
import './styles.scss';
import { withRouter } from "react-router";


class Project extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let currentProject = this.props.projects.find((project) => project.id === +this.props.match.params.id);
    return (
      <div className="project">
        {currentProject && 
          <>
            <h6>{currentProject.role}</h6>
            <p>{currentProject.description}</p>
          </>
        }
      </div>
    );
  }
}


export default withRouter(Project);