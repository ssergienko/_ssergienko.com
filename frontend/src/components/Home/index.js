import React, { Component } from "react";
import './styles.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/customer")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(customers => {
        this.setState(() => {
          return {
            customers,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <div className="homepage-content-wrapper">
        <div className="row">
          <div className="sidebar col-sm-12 col-md-2">
            <div>
              <img className="avatar" src="/media/images/general/myselfstrate.png" />
            </div>
            <div className="download-cv-link">
              <a href="https://s3.amazonaws.com/ssergienko.com/images/SergeySSergienko.CV.pdf" target="_blank">Download CV</a>
            </div>
          </div>
          <div className="homepage-content col-sm-12 col-md-10">
            <h6 className="subtitle">Technical Product Manager</h6>
            <p>
              The best thing I ever learned is how to build Web Applications. Started as a Software Engineer in 2007, I made a long
              way from Junior Engineer to Lead, Head of UI, Entrepreneur and TPM in a list of different companies from all around
              the world. There were tops, big and small, product and outsource, startups and enterprise, off-shore and on-side. After all
              these years I know a lot about how the business works and learned what people expect when they invest money into a Web Project.
            </p>
            <p>
              I learned how to turn a business idea into a Concept, estimate Effort, determine Costs and Risks, create Create Prototype
              or even MVP. I believe that the best technical solutions could be made only by a group of connected people. I can help 
              Staff a successful Team, organize Efficient Development Process and Smooth Delivery.
            </p>
            <p>
              By nature I'm getting on with people well, but engineering is tough. Master Degree in Software helps me to stay on a same
              page with engineers, when the natural sociability and knowledge of business processes allows me to Connect those worlds in one.
            </p>
            <p>
              If you have an idea and don't know where to start from, or you are looking for somebody who can sort things out, go ahead and  
              <a href="mailto:sergei.s.sergienko@gmail.com">text me</a>. Let's get your project to a big win!
            </p>
            <div className="tiles-wrapper row">
              <div className="tile col-sm-6 col-md-6">
                <h6 className="subtitle">Highlights</h6>
                <ul>
                  <li>Master Degree in Software</li>
                  <li>Design and Prototyping</li>
                  <li>Fluent in English and Russian</li>
                  <li>Successful projects in World’s Biggest Companies</li>
                  <li>Web Development since 2007</li>
                </ul>
              </div>
              <div className="tile col-sm-6 col-md-6">
                <h6 className="subtitle">Functional Skill Set</h6>
                <ul>
                  <li>Delivery</li>
                  <li>Resource Management and Staffing</li>
                  <li>Design of Technical Solutions</li>
                  <li>Demo and Presentations</li>
                </ul>
              </div>
            </div>
            
            <hr />

            <div className="customers-wrapper">
              {/* <h6 className="subtitle">Customers</h6> */}
              <div className="customers">
                {this.state.customers.map(customer => {
                  return (
                    <div key={customer.id} className="customer">
                      <img src={customer.logo} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;