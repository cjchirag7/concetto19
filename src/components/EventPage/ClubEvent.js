import React, { Component } from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
class ClubEvent extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { events } = this.props;
    return (
      <div className="container">
        <Helmet>
          <title>Concetto club events</title>
          <meta
            name="description"
            content="Organized by the various clubs of IIT (ISM) Dhanbad, are the attraction of Concetto 2019. Having a special combination of management and technical prowess, club events provide a platform to budding entrepreneurs to showcase their skills and to prove their mettle among the very best in the field."
          />
          <meta
            name="keywords"
            content="club events concetto 2019, club event iit dhanbad, iit ism dhanbad techfest, iit dhanbad techfest,Concetto,Concetto 19,Concetto 2019,Concetto 2k19,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto theme, Concetto techfest,Concetto tecnical fest, Concetto 2019-2020, Concetto tech fest 19,Concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
          />
        </Helmet>
        <br />
        {events.map((event, id) => {
          return (
            <div className="cards">
              <div className="card-item" key={event.name}>
                <Link
                  to={`club-events/${event.name.split(" ").join("-")}/about`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="card-image">
                    <img
                      src={`${event.img}`}
                      alt={event.name}
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
                    <p style={{ color: "green", marginBottom: "10px" }}>
                      {event.prizes}
                    </p>
                    <p style={{ color: "blue" }}>{event.club}</p>
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
export default ClubEvent;
