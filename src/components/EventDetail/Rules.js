import React, { Component } from "react";

class Rules extends Component {
  render() {
    const { event } = this.props;
    return (
      <div className="container" style={{ display: "block", width: "80vw" }}>
        <br />
        <ul>
          {event.rules.split(";").map(str => (
            <li>{"  " + str}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Rules;
