import React, { Component } from "react";
import "./Styles.css";
import { Link } from "react-router-dom";

class ClubEvent extends Component {
  render() {
    const { events } = this.props;
    return (
      <div className="container">
        {events.map((event, id) => {
          return (
            <div className="cards">
              <div className="card-item" id={event.name}>
                <Link
                  to={`events/${event.name}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="card-image">
                    <img src={`${event.img}`} alt={event.name} />
                  </div>
                  <div className="card-info">
                    <h2 className="card-title">{event.name}</h2>
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
