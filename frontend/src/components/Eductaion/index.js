import React, { Component } from "react";
import './styles.scss';

class Eductaion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educations: [],
      loaded: false,
      placeholder: "Loading"
    };
  }
  componentDidMount() {
    fetch("/api/education")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(educations => {
        this.setState(() => {
          return {
            educations: educations,
            loaded: true
          };
        });
      });
  }

  render() {
    console.log('educations: ', this.state.educations);
    return (
      <div className="education">
        <h6>Saint-Petersburg State University of Aerospace Instrumentation in Russia</h6>
        <p>Master Degree in Software</p>
        <p>
          <a href="https://s3.amazonaws.com/ssergienko.com/images/Sergienko+(Diploma).pdf" target="_blank">Diploma</a>
          &nbsp;/&nbsp;
          <a href="https://s3.amazonaws.com/ssergienko.com/images/Sergienko+(Transcript).pdf" target="_blank">Transcript</a>
        </p>
        <hr />
        <h6>Communication Strategies for a Virtual Age by University of Toronto on Coursera</h6>
        <p><a href="https://s3.amazonaws.com/ssergienko.com/images/Coursera+EXFRERDAJPCC.pdf" target="_blank">Certificate</a></p>
        <hr />
        <h6>IELTS 6.5</h6>
        <p><a href="https://s3.amazonaws.com/ssergienko.com/images/IELTS_2019.pdf" target="_blank">Certificate</a></p>
      </div>
    );
  }
}

export default Eductaion;