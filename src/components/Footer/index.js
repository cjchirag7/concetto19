import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  socialMedia: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  a: {
    height: "40px",
    width: "40px",
    backgroundColor: "#f5f6fa",
    margin: "5px",
    marginRight: "20px",
    marginLeft: "20px",
    marginBottom: "10px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "1px 1px 1px 1px #dcdde1",
    fontSize: "30px",
    lineHeight: "45px",
    zIndex: 205,
    // display: "block",
    transition: "all 0.3s linear",
    "&:hover": {
      fontSize: "36px"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "10px",
      marginBottom: "6px"
    }
  },
  facebook: {
    color: "#0018ff"
  },
  instagram: {
    color: "#e84393"
  },
  youtube: {
    color: "#e84118"
  }
});
class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.socialMedia}>
        <a
          href="https://www.facebook.com/Concettoiitdhanbad/"
          className={classes.a}
        >
          <FontAwesomeIcon icon={faFacebook} className={classes.facebook} />
        </a>
        <a
          href="https://www.instagram.com/concetto.iitism/"
          className={classes.a}
        >
          <FontAwesomeIcon icon={faInstagram} className={classes.instagram} />
        </a>
        <a
          href="https://www.youtube.com/watch?v=2FWZDc_e4so&t=1s"
          className={classes.a}
        >
          <FontAwesomeIcon icon={faYoutube} className={classes.youtube} />
        </a>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Footer);
