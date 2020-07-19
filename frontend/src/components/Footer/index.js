import React, { Component } from "react";
import './styles.scss';
import { FaSoundcloud, FaLinkedin, FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { RiYoutubeLine } from "react-icons/ri";


class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        {/* <div className="copyright">© 2020 ssergienko.com</div> */}
        <div className="social-networks">
          <a href="https://www.instagram.com/sergey.s.sergienko/" target="_blank"><FaInstagram size="1em" /></a>
          <a href="https://www.linkedin.com/sergey.s.sergienko" target="_blank"><FaLinkedin size="1em" /></a>
          <a href="https://soundcloud.com/ssergienko" target="_blank"><FaSoundcloud size="1.5em" /></a>
          <a href="https://www.facebook.com/sergey.s.sergienko" target="_blank"><FaFacebookSquare size="1em" /></a>
          <a href="https://www.youtube.com/channel/UCeUltXEeBeuD-Ah2DhJtTOQ" target="_blank"><RiYoutubeLine size="1em" /></a>
        </div>
      </div>
    );
  }
}

export default Footer;