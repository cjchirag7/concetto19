import React, { Component } from "react";
import { Helmet } from "react-helmet";
class About extends Component {
  render() {
    const { event } = this.props;
    return (
      <div className="container" style={{ display: "block", width: "80vw" }}>
        <Helmet>
          <title>{event.name}</title>
          <meta
            name="description"
            content={`Organized by ${
              event.is_club
                ? event.club + " club "
                : event.dept + " department "
            } of IIT (ISM) Dhanbad, during Concetto 2019. ${(!event.about
              ? event.description
              : "") + event.about}
            } `}
          />
          <meta
            name="keywords"
            content={`${event.name} concetto , ${event.name} , ${
              event.name
            } 2019 , ${
              event.is_club ? event.club : event.dept
            } concetto , iit ism dhanbad techfest, iit dhanbad techfest, Concetto,Concetto 19,Concetto 2019,Concetto 2k19,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto techfest,Concetto tecnical fest, Concetto 2019-2020, Concetto tech fest 19,Concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest`}
          />
        </Helmet>{" "}
        {` About : ${(!event.about ? event.description : "") +
          "\n " +
          event.about} \n `}
        <br />
        <br />
        <br />
        {`${
          event.is_club
            ? " CLUB  :  " + event.club
            : "  DEPARTMENT  :  " + event.dept
        }`}
      </div>
    );
  }
}

export default About;
