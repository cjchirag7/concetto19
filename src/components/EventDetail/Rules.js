import React, { Component } from "react";
import { Helmet } from "react-helmet";
import rule_book from "./RuleBook";
class Rules extends Component {
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
            } of IIT (ISM) Dhanbad, during Concetto 2019. ${
              !event.rules ? event.description : "Rules: " + event.rules
            } `}
          />
          <meta
            name="keywords"
            content={`${event.name} concetto rules, ${event.name} rules , ${
              event.name
            } 2019 rules, ${
              event.is_club ? event.club : event.dept
            } concetto , iit ism dhanbad techfest, iit dhanbad techfest, Concetto,Concetto 19,Concetto 2019,Concetto 2k19,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto techfest,Concetto tecnical fest, Concetto 2019-2020, Concetto tech fest 19,Concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest`}
          />
        </Helmet>
        <br />
        <ul>
          {event.rules
            ? event.rules.split(";").map(str => <li>{"  " + str}</li>)
            : rule_book({ link: event.pdf })}
        </ul>
      </div>
    );
  }
}

export default Rules;
