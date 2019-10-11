import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
      // document.body.style.position = "fixed";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflowY = "scroll";
      // document.body.style.position = "relative";
      document.body.style.touchAction = "auto";
    }
  }
  render() {
    const { isMenuOpen } = this.state;
    return (
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        className="header fixed-top"
      >
        <nav className="navbar navbar-expand-md navbar-dark">
          <NavLink to="../home" exact strict>
            <a className="navbar-brand">
              <span className="helper"></span>
              <img
                src="https://concetto-front.s3.ap-south-1.amazonaws.com/logo.webp"
                className="logo-header"
                alt={"CONCETTO"}
              />
            </a>
          </NavLink>
          <div id="menuToggle">
            <input
              type="checkbox"
              checked={isMenuOpen}
              onClick={this.toggleMenu}
            />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <br />
              <li>
                <NavLink
                  className="nav-link"
                  to="/home"
                  onClick={this.toggleMenu}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="/about-theme"
                  onClick={this.toggleMenu}
                >
                  ABOUT THEME
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="/workshops"
                  onClick={this.toggleMenu}
                >
                  WORKSHOPS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="/department-events"
                  onClick={this.toggleMenu}
                >
                  EVENTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="/coming-soon"
                  onClick={this.toggleMenu}
                >
                  EXHIBITION
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  className="nav-link"
                  to="/login"
                  onClick={this.toggleMenu}
                >
                  LOGIN
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  className="nav-link"
                  to="/coming-soon"
                  onClick={this.toggleMenu}
                >
                  CAP
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  className="nav-link"
                  to="/our-team"
                  onClick={this.toggleMenu}
                >
                  OUR TEAM
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="/guest-talks"
                  onClick={this.toggleMenu}
                >
                  GUEST TALKS
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <nav role="navigation"></nav>
      </div>
    );
  }
}

export default Header;
