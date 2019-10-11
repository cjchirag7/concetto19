import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
class DepartmentEvent extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { events } = this.props;
    return (
      <div className="container">
        <Helmet>
          <title>Concetto departmental events</title>
          <meta
            name="description"
            content="Organized by the Departments of IIT (ISM) Dhanbad, these events prove to be a different kind of challenge for the participants. Along with sound technical knowledge, they also check your proficiency in various fields of engineering. They make you think out of the box in problems associated with the respective fields."
          />
          <meta
            name="keywords"
            content="departmental events concetto 2019, department events, branch events iit ism, iit ism dhanbad techfest, iit dhanbad techfest,Concetto,Concetto 19,Concetto 2019,Concetto 2k19,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto theme, Concetto techfest,Concetto tecnical fest, Concetto 2019-2020, Concetto tech fest 19,Concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
          />
        </Helmet>
        <br />
        {events.map((event, id) => {
          return (
            <div className="cards">
              <div className="card-item" key={event.name}>
                <Link
                  to={`department-events/${event.name
                    .split(" ")
                    .join("-")}/about`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="card-image">
                    <img
                      src={`${event.img}`}
                      alt="Loading..."
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      width="500"
                      height="500"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    />
                  </div>
                  <div className="card-info">
                    <h2
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {event.name}
                    </h2>
                    <p className="card-intro">{event.prizes}</p>
                    <p className="card-intro club-text">{event.dept}</p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default DepartmentEvent;
