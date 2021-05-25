import React, { Component } from "react";

import logo from "../images/logo.svg";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-logo">
          <div>
            <a href="index.html">
              <img src={logo} alt="Raasta Logo" />
            </a>
          </div>
          <div className="site-link">
            <ul>
              <li className="link-btn">
                <a href="about.html">About</a>
              </li>
              <li className="link-btn">
                <a href="work.html">Work</a>
              </li>
              <li className="link-btn">
                <a href="blog.html">Blog</a>
              </li>
              <li className="link-btn">
                <a href="career.html">Career</a>
              </li>
              <li className="link-btn">
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <div className="social-media">
            <ul>
              <li>
                <a href="https://www.facebook.com/RaastaStudios/" target="_blank" rel="noreferrer">
                  <i className="zmdi zmdi-hc-fw"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/raasta-studios/" target="_blank" rel="noreferrer">
                  <i className="zmdi zmdi-hc-fw"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/raastastudios" target="_blank" rel="noreferrer">
                  <i className="zmdi zmdi-hc-fw"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCVsesB89w00c2FX70-srLjA" target="_blank" rel="noreferrer">
                  <i className="zmdi zmdi-hc-fw"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/theraastastudios/" target="_blank" rel="noreferrer">
                  <i className="zmdi zmdi-hc-fw"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="copyright-block">
            <p>Copyright © Raasta Studios - All rights reserved</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
