import React, { Component } from "react";
import './styles.scss';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage-content-wrapper">
        <div className="row">
          <div className="sidebar col-sm-12 col-md-2">
            <img className="avatar" src="https://s3.amazonaws.com/ssergienko.com/images/myself.jpeg" />
          </div>
          <div className="homepage-content col-sm-12 col-md-10">
            <h6 className="subtitle">Technical Product Manager</h6>
            <p>Turn your idea to a real Product. Design Concept, create Prototype/MVP, optimise UX, organize efficient 
              Development Process and Smooth Delivery. Professional Engineering Experience allows me to stay on a same 
              page with engineers. Knowledge of development process helps to set achivable goals and meet deadlines. 
              You will not have to warry about customer Presentations and Demo sessions. Concentrate on your business 
              and let me to take care of your Product.
            </p>
            <div className="tiles-wrapper row">
              <div className="tile col-sm-6 col-md-6">
                <h6 className="subtitle">Career Summary</h6>
                <ul>
                  <li>Web Development since 2007</li>
                  {/* <li>Product Management since the beginning</li> */}
                  <li>strong UI/UX Design capabilities</li>
                  <li>Senior Level of Software Development</li>
                  <li>Successfull projects in the World’s Biggest IT Companies</li>
                </ul>
              </div>
              {/* <div className="tile">
                <h6 className="subtitle">Strengths</h6>
                <ul>
                  <li>POC and MVP</li>
                  <li>Concept Formalization through research and negotiations</li>
                  <li>Organization of smooth and transparent delivery</li>
                  <li>Fluent English speaker </li>
                </ul>
              </div> */}
              <div className="tile col-sm-6 col-md-6">
                <h6 className="subtitle">Functional Skill Set</h6>
                <ul>
                  <li>Web Design, UX, Mockups and Prototyping</li>
                  <li>design of optimal Technical Solutions</li>
                  <li>organization of smooth and transparent Delivery</li>
                  <li>Estimations, Roadmaps, appropriate level of Reporting</li>
                </ul>
              </div>
            </div>
            <h6 className="subtitle">Customers</h6>
            <div className="customers"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;