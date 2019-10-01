import React, { Component } from 'react';
import "./Styles.css";
import {Link} from 'react-router-dom';

class ClubEvent extends Component {
  render(){
    return (
      <div className="container">
        <div className="cards" >
          <div className="card-item">
            <Link to="events/eventDetail" style={{textDecoration: 'none' }}>
            <div className="card-image">
              <img
                src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg"
                alt='helo'
              />
            </div>
            <div className="card-info">
              <h2 className="card-title">Name</h2>
              <p style={{color: 'green', marginBottom: '10px'}}>PRIZE MONEY - 40k</p>
              <p style={{color: 'blue'}}>CLUB</p>
            </div>
            </Link>
          </div>
        </div>
        <div className="cards">
          <div className="card-item">
            <div className="card-image">
              <img
                src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg"
                alt='helo'
              />
            </div>
            <div className="card-info">
              <h2 className="card-title">Name</h2>
              <p className="card-intro">PRIZE MONEY - 40k</p>
              <p className="card-intro club-text">CLUB</p>
            </div>
          </div>
        </div><div className="cards">
          <div className="card-item">
            <div className="card-image">
              <img
                src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg"
                alt='helo'
              />
            </div>
            <div className="card-info">
              <h2 className="card-title">Name</h2>
              <p className="card-intro">PRIZE MONEY - 40k</p>
              <p className="card-intro club-text">CLUB</p>
            </div>
          </div>
        </div><div className="cards">
          <div className="card-item">
            <div className="card-image">
              <img
                src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg"
                alt='helo'
              />
            </div>
            <div className="card-info">
              <h2 className="card-title">Name</h2>
              <p className="card-intro">PRIZE MONEY - 40k</p>
              <p className="card-intro club-text">CLUB</p>
            </div>
          </div>
        </div><div className="cards">
          <div className="card-item">
            <div className="card-image">
              <img
                src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg"
                alt='helo'
              />
            </div>
            <div className="card-info">
              <h2 className="card-title">Name</h2>
              <p className="card-intro">PRIZE MONEY - 40k</p>
              <p className="card-intro club-text">CLUB</p>
            </div>
          </div>
        </div><div className="cards">
          <div className="card-item">
            <div className="card-image">
              <img
                src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg"
                alt='helo'
              />
            </div>
            <div className="card-info">
              <h2 className="card-title">Name</h2>
              <p className="card-intro">PRIZE MONEY - 40k</p>
              <p className="card-intro club-text">CLUB</p>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-item">
            <div className="card-image">
              <img
                src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg"
                alt='helo'
              />
            </div>
            <div className="card-info">
              <h2 className="card-title">Name</h2>
              <p className="card-intro">PRIZE MONEY - 40k</p>
              <p className="card-intro club-text">CLUB</p>
            </div>
          </div>
        </div><div className="cards">
          <div className="card-item">
            <div className="card-image">
              <img
                src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg"
                alt='helo'
              />
            </div>
            <div className="card-info">
              <h2 className="card-title">Name</h2>
              <p className="card-intro">PRIZE MONEY - 40k</p>
              <p className="card-intro club-text">CLUB</p>
            </div>
          </div>
        </div><div className="cards">
          <div className="card-item">
            <div className="card-image">
              <img
                src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg"
                alt='helo'
              />
            </div>
            <div className="card-info">
              <h2 className="card-title">Name</h2>
              <p className="card-intro">PRIZE MONEY - 40k</p>
              <p className="card-intro club-text">CLUB</p>
            </div>
          </div>
        </div><div className="cards">
          <div className="card-item">
            <div className="card-image">
              <img
                src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg"
                alt='helo'
              />
            </div>
            <div className="card-info">
              <h2 className="card-title">Name</h2>
              <p className="card-intro">PRIZE MONEY - 40k</p>
              <p className="card-intro club-text">CLUB</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ClubEvent;