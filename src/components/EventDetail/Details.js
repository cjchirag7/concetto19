import React, { Component } from "react";

class Details extends Component {
  render() {
    const { event } = this.props;
    return <div className="container" style={{ display: "block", width: "80vw" }}>
    {event.description}
    </div>;
  }
}

export default Details;
