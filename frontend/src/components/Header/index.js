import React, { Component } from "react";
import './styles.scss';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="site-logo bg-dark text-center">
        <h6 className="align-center">SERGEI S. SERGIENKO</h6>

        <nav className="topmenu navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/projects/">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/education">Edication</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacts">Contacts</a>
            </li>
          </ul>
        </nav>

      </div>
    );
  }
}

export default Header;