import React, { Component } from "react";
// import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import rule_book from "./RuleBook";

class Mobileview extends Component {
  render() {
    const { event } = this.props;
    const timings = event.timing.split(";");
    let day1, day2;
    if (day1 / 10) {
      day1 = Math.floor(event.day / 10);
      day2 = Math.floor(event.day % 10);
    } else {
      day1 = Math.floor(event.day % 10);
      day2 = 0;
    }

    return (
      <div>
        <ExpansionPanel square expandIcon={<ExpandMoreIcon />}>
          <ExpansionPanelSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            style={{ backgroundColor: "#666666" }}
          >
            <div
              className="btn btn-event btn-2 active-bottom"
              style={{ marginLeft: "32%" }}
            >
              ABOUT
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {" "}
              {` About : ${(!event.about ? event.description : "") +
                "\n " +
                event.about} \n `}
              <br />
              <br />
              {`${
                event.is_club
                  ? " CLUB  :  " + event.club
                  : "  DEPARTMENT  :  " + event.dept
              }`}
              <br />
              <br />
              <i class="fa fa-calendar"></i>&nbsp;{" "}
              {event.name === "Bizathon"
                ? " Day 1 : 10:00-18:00 and 21:00-12:00 Next Day and Day 2 : 11:00-15:00"
                : event.name === "CodeYaan 1.0"
                ? " Thursday : 22:00-12:30"
                : `  ${
                    day1 ? " Day " + day1 + " : " + timings[0] : " Coming Soon "
                  } ${
                    day2
                      ? `${day1 === day2 ? " and " : " and Day " + day2}` +
                        " : " +
                        timings[1]
                      : " "
                  } \n `}
              {event.name === "Capture the flag" ? (
                <p>
                  <br />
                  Enter into the contest &nbsp;
                  <a
                    href="https://www.hackerrank.com/clctf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                </p>
              ) : (
                ""
              )}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square>
          <ExpansionPanelSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
            style={{ backgroundColor: "#666666" }}
          >
            <div
              className="btn btn-event btn-2 active-bottom"
              style={{ marginLeft: "32%" }}
            >
              DETAILS
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {event.description.split(";").map(sen => (
                <React.Fragment>
                  {sen}
                  <br />
                </React.Fragment>
              ))}
              {event.fee ? (
                <React.Fragment>
                  <br />
                  <br />
                  Participation fees &nbsp; : &nbsp; &#8377; {event.fee} /- per{" "}
                  {event.is_team ? " team " : " person "}
                </React.Fragment>
              ) : (
                ""
              )}
              <br />
              <br />
              For detailed description, refer the{" "}
              <a href={event.pdf}>document</a>
              <br />
              <br />
              For any queries, feel free to contact :
              <br />
              <ul>
                {event.admins.map((admin, id) => (
                  <li key={id.toString()}>{admin}</li>
                ))}
              </ul>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square>
          <ExpansionPanelSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            style={{ backgroundColor: "#666666" }}
          >
            <div
              className="btn btn-event btn-2 active-bottom"
              style={{ marginLeft: "32%" }}
            >
              RULES
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <ul>
                {event.rules
                  ? event.rules.split(";").map(str => <li>{"  " + str}</li>)
                  : rule_book({ link: event.pdf })}{" "}
              </ul>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square>
          <ExpansionPanelSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            style={{ backgroundColor: "#666666" }}
          >
            <div
              className="btn btn-event btn-2 active-bottom"
              style={{ marginLeft: "32%" }}
            >
              REGISTER
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ paddingLeft: "35%" }}>
            <a href={event.link} target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-primary btn-lg">
                REGISTER
              </button>
            </a>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default Mobileview;
