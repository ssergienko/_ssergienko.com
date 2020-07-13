import React, { Component } from "react";
import { render } from "react-dom";
import Header from '/Users/ssergienko/Library/Mobile Documents/com~apple~CloudDocs/Projects/ssergienko.com/frontend/src/components/Header';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/project")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <>
        <Header />
        <div className="container-fluid">
          <ul>
            {this.state.data.map(contact => {
              return (
                <li key={contact.id}>
                  {contact.title} - {contact.description}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);