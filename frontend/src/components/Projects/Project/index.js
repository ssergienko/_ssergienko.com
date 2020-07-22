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
        <>
        {currentProject && 
          <div className="project">
            <ul>
              <li><span className="row-title">Role:</span>{currentProject.role}</li>
              {currentProject.company &&
              <li><span className="row-title">Company:</span>{currentProject.company}</li>}
              <li><span className="row-title">Product:</span>{currentProject.projectDescription}</li>
              <li><span className="row-title">Location:</span>{currentProject.location}</li>
            </ul>
            <p>{currentProject.description}</p>
            <p className="slides">
              {currentProject.images.map((image) => <img src={image.image} key={image.id} />)}
            </p>
          </div>    
        }
      </>
    );
  }
}


export default withRouter(Project);