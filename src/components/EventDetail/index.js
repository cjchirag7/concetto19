import React, { Component } from "react";
import "./Styles.css";
import Loading from "../Loading";
import About from "./About";
import Rules from "./Rules";
import Details from "./Details";
import Register from "./Register";

class EventDetail extends Component {
  constructor(props){
    super(props);
      this.aboutShow=this.aboutShow.bind(this);
      this.rulesShow = this.rulesShow.bind(this);
      this.detailsShow = this.detailsShow.bind(this);
      this.registerShow = this.registerShow.bind(this);
  }
state={
  active:'about',
};

  aboutShow = (active) => {
  this.setState({
    active: 'about',
  })
}
  rulesShow = (active) => {
      this.setState({
        active: 'rules',
      })
}
  detailsShow = (active) => {
      this.setState({
        active: 'details',
      })
}
  registerShow = (active) => {
      this.setState({
        active: 'register',
      })
}
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const event = {
      id: 1,
      name: "Event 1",
      is_team: 1,
      max_participants: 3,
      dept: "Computer Science and Engineering",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      club: "",
      rules:
        "1. Only 3 participants are allowed \n 2. No participation fee \n 3. No cheating",
      prizes: "4000,2000,1000",
      scores: false,
      img: "",
      fee: 0,
      start: "2019-10-20T09:30:00.890Z",
      end: "2019-10-20T12:30:00.890Z"
    };
    return (
      <div style={{ display: "flex"}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40vh",
            backgroundColor: "rgba(97, 97, 97, 0.1)",
            height: "100vh"
          }}
        >
          <div>
            <a href="home"><img src="https://concetto-front.s3.ap-south-1.amazonaws.com/logo.png" className="img-fluid" alt={Loading} /></a>
          </div>
          <div className="btnFlex">
            <button className={"btn btn-event btn-2 "+((this.state.active==='about')?'active-bottom':'')} onClick={this.aboutShow}>ABOUT</button>
            <button className={"btn btn-event btn-2 "+((this.state.active==='rules')?'active-bottom':'')} onClick={this.rulesShow}>RULES</button>
            <button className={"btn btn-event btn-2 "+((this.state.active==='details')?'active-bottom':'')} onClick={this.detailsShow}>DETAILS</button>
            <button className={"btn btn-event btn-2 "+((this.state.active==='register')?'active-bottom':'')} onClick={this.registerShow}>REGISTER</button>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <img
          src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg"
          alt={event.name}
          fluid
          />
        <div>
            {event.name}
          </div>
          {this.state.active === 'about' && <About />}
          {this.state.active === 'rules' && <Rules />}
          {this.state.active === 'details' && <Details />}
          {this.state.active==='register' && <Register />}
        </div>
      </div>
    );
  }
}

export default EventDetail;
