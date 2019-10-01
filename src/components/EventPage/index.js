import React, { Component } from "react";
import {withStyles} from '@material-ui/core/styles';
import "../EventDetail/Styles.css";
import Loading from "../Loading";
import DepartmentEvent from "./DepartmentEvent";
import ClubEvent from "./ClubEvent";
import Mobileview from "./Mobileview";

const styles = (theme) => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down('sm')]:{
      flexDirection: 'column',
    },
  },
  verticalTab:{
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    display: "flex",
    flexDirection: "column",
    width: "40vh",
    backgroundColor: "rgba(97, 97, 97, 0.1)",
    position: "sticky",
    overflowY: 'hidden',
  },
});

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.departmentShow = this.departmentShow.bind(this);
    this.clubShow = this.clubShow.bind(this);
  }
  state = {
    active: 0,
  };

  clubShow = (active) => {
    this.setState({
      active: 1,
    })
  }
  departmentShow = (active) => {
    this.setState({
      active: 0,
    })
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <div
          className={classes.verticalTab}
        >
          <div>
            <img src="assets/logo.png" className="img-fluid" alt={Loading} />
          </div>
          <div className="btnFlex">
            <button className={"btn btn-event btn-2 " + ((this.state.active === 0) ? 'active-bottom' : '')} onClick={this.departmentShow}>DEPARTMENT</button>
            <button className={"btn btn-event btn-2 " + ((this.state.active === 1) ? 'active-bottom' : '')} onClick={this.clubShow}>CLUB</button>
          </div>
          </div>
          <br/>
          <div>
            {this.state.active === 0 && <DepartmentEvent />}
            {this.state.active === 1 && <ClubEvent />}
          </div>
        {window.innerWidth < 960 ? <Mobileview />:''}
     </div>
    );
  }
}

export default (withStyles(styles)(EventDetail));
