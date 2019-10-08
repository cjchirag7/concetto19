import React, { Component } from "react";
import { GuestTalks } from "../../shared/GuestTalks";
import Header from "../Header";
import "./styles.css";

class GuestTalk extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Header />
        <br />
        <h1
          style={{
            textAlign: "center",
            marginTop: "20px"
          }}
          className="title"
        >
          GUEST TALKS
        </h1>
        <div className="container">
          {GuestTalks.map((talk, id) => (
            <div className="row" key={id.toString()}>
              <div
                className={
                  "col-12 col-lg-3 " + (id % 2 === 0 ? " order-lg-2" : "")
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap"
                }}
              >
                <img
                  src={talk.img}
                  class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="350"
                  height="350"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  aria-label="Placeholder: 350x350"
                  alt="Loading..."
                />
              </div>
              <div
                className={
                  "col-12 col-lg-6 col-lg-9" +
                  (id % 2 === 0 ? " order-lg-1" : "")
                }
              >
                <div class="wrapper">
                  <h2 class="upper">{talk.designation}</h2>
                  <a href={talk.link} class="meetup">
                    {talk.guest}
                  </a>
                  <h5 class="group">
                    {talk.about.split(";").map(text => (
                      <React.Fragment>
                        {text}
                        <br />
                      </React.Fragment>
                    ))}
                  </h5>
                  <p class="details">
                    <span class="row">
                      <i class="fa fa-calendar fa-lg"></i>
                      <span class="row-item">
                        <time>{talk.time}</time>
                      </span>
                    </span>

                    {/* <span class="row">
                    <i class="fa fa-map-marker fa-lg"></i>
                    <span class="row-item">
                      <strong>Proto BuildBar</strong>
                      <br />
                      534 E 1st St
                    </span>
                  </span> */}
                  </p>
                </div>
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GuestTalk;
