import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DepatmentEvent extends Component {
  render() {
    const { events } = this.props;
    return (
      <div className="container">
        {events.map((event,id)=>{
        return (
        <div className="cards">
          <div className="card-item">
          <Link to={`events/${event.name}`} style={{ textDecoration: "none" }}>
            <div className="card-image">
              <img
                src={`${event.img}`}
                alt='helo'
              />
            </div>
            <div className="card-info">
              <h2 className="card-title">{event.name}</h2>
              <p className="card-intro">{event.prizes}</p>
              <p className="card-intro club-text">{event.dept}</p>
            </div>
            </Link>
          </div>
        </div>
        );})}
      </div>
    );
  }
}
export default DepatmentEvent;