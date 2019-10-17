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
    //let scrollTop = window.pageYOffset;
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
    if (!isMenuOpen) {
      window.scrollBy(0, window.innerHeight / 10 + 1);
      document.body.style.overflow = "hidden";
      // document.body.style.position = "fixed";
      document.body.style.touchAction = "none";
    } else {
      window.scrollBy(0, -window.innerHeight / 10 - 1);
      document.body.style.overflowY = "scroll";
      // document.body.style.position = "relative";
      document.body.style.touchAction = "auto";
    }
  }
  render() {
    const { isMenuOpen } = this.state;
    return (
      <div
        className="header fixed-top"
        style={
          window.innerWidth < 800 && window.pageYOffset > window.innerHeight
            ? { backgroundColor: "rgba(0, 0, 0, 0.5)" }
            : null
        }
      >
        <nav className="navbar navbar-expand-md navbar-dark">
          <a className="navbar-brand" href="home">
            <span className="helper"></span>
          </a>
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
                  to="/about-us"
                  onClick={this.toggleMenu}
                >
                  ABOUT US
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="nav-link"
                  to="/exhibitions"
                  onClick={this.toggleMenu}
                >
                  EXHIBITIONS
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
                  to="/informal-events"
                  onClick={this.toggleMenu}
                >
                  INFORMAL EVENTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="/club-events"
                  onClick={this.toggleMenu}
                >
                  CLUB EVENTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="/department-events"
                  onClick={this.toggleMenu}
                >
                  DEPARTMENTAL EVENTS
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
              <li>
                <NavLink
                  className="nav-link"
                  to="/our-team"
                  onClick={this.toggleMenu}
                >
                  OUR TEAM
                </NavLink>
              </li>
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
