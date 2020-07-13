import React, { Component } from "react";
import { render } from "react-dom";
import Header from '/Users/ssergienko/Library/Mobile Documents/com~apple~CloudDocs/Projects/ssergienko.com/frontend/src/components/Header';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Projects from "./Projects";
import Contacts from "./Contacts";
import Education from './Eductaion';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Header />
        <div className="container-fluid">
           <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);