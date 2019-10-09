import React, { Component } from "react";
// import Loading from "../Loading";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Footer from "../Footer";
import HomeHeader from "../HomeHeader";
import Parallax from "../parallax";
import Parallax2 from "../parallax2";
import ParallaxM from "../parallaxM";
import { HomeContent } from "../../shared/Content";
import "./styles.css";
let max_offset, initial_offset;

const styles = theme => ({
  logo: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  logoImg: {
    transition: "all 3s ease",
    position: "fixed",
    transform: "translate(-50 %, -50 %)"
  },
  parallax: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('sm')]:{
      marginTop: '0px'
    }
  },
  moon: {
    display: "flex",
    zIndex: 200,
    // height: "1800px",
    bottom: 0,
    position: "fixed"
  }
});
class Home extends Component {
  constructor(props) {
    super(props);
    if (window.innerHeight < 450) {
      initial_offset = 110;
      max_offset = 130;
    } else if (window.innerHeight < 600) {
      initial_offset = 80;
      max_offset = 90;
    } else if (window.innerHeight < 670) {
      initial_offset = 58;
      max_offset = 68;
    } else if (window.innerHeight < 745) {
      initial_offset = 54;
      max_offset = 64;
    } else if (window.innerHeight < 850) {
      initial_offset = 50;
      max_offset = 56;
    } else if (window.innerHeight < 910) {
      initial_offset = 47;
      max_offset = 52;
    } else {
      initial_offset = 38;
      max_offset = 43;
    }
    this.state = {
      offset: initial_offset,
      header: false,
      x: 0,
      previous_scroll: 0
    };
    // console.log(window.innerHeight);
    this.homeRef = React.createRef();
  }
  componentDidMount() {
    this.props.hideLogo();
    window.scrollTo(0, 0);
    console.log(window.innerWidth);
    // this.setState({ x: window.scrollY });
    window.addEventListener("scroll", this.handleScroll);
    if (window.innerHeight < 670) document.body.style.paddingBottom = "38vh";
    else document.body.style.paddingBottom = "30vh";
  }
  componentWillUnmount() {
    // this.props.makeShowLogo();
    document.body.style.paddingBottom = "0";
    window.scrollTo(0, 0);
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    let scrollTop = window.pageYOffset;
    const { offset, header, previous_scroll } = this.state;
    if (window.innerWidth > 800) this.setState({ x: window.scrollY });
    if (scrollTop > window.innerHeight / 10) {
      if (!header) {
        this.setState({
          header: true
        });
        if (this.homeRef.current) {
          this.homeRef.current.classList.toggle("logo-home");
          this.homeRef.current.classList.toggle("logo-header");
        }
      }
      if (offset <= max_offset) {
        this.setState({
          offset: max_offset
        });
      }
    } else {
      if (header) {
        this.setState({
          header: false
        });
        if (this.homeRef.current) {
          this.homeRef.current.classList.toggle("logo-header");
          this.homeRef.current.classList.toggle("logo-home");
        }
      }
      if (scrollTop <= previous_scroll) {
        this.setState({
          offset:
            max_offset -
            ((max_offset - initial_offset) *
              (window.innerHeight / 10 - scrollTop)) /
              (window.innerHeight / 10)
        });
      } else {
        this.setState({
          offset:
            initial_offset +
            ((max_offset - initial_offset) * scrollTop) /
              (window.innerHeight / 10)
        });
      }
    }
    if (previous_scroll < window.innerHeight / 10 + 5)
      this.setState({ previous_scroll: scrollTop });
  };

  scrollDown() {
    window.scrollTo(0, window.innerHeight);
  }

  render() {
    const { classes } = this.props;
    const { offset, x } = this.state;
    return (
      <div>
        <section id="scroll_down" className="demo">
          <a
            onClick={() => {
              this.scrollDown();
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </section>
        <HomeHeader></HomeHeader>
        <div className={classes.logo}>
          <img
            src="images/logo.png"
            className={`logo logo-home`}
            ref={this.homeRef}
            alt={"Loading.."}
          />
        </div>
        {
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw"
            }}
          >
            <img
              src="https://concetto-front.s3.ap-south-1.amazonaws.com/moon_surface.png"
              // src={window.location.origin + "/images/moon-fin.png"}
              className={classes.moon}
              alt="moon"
              style={{ transform: "translateY(" + offset + "vh)" }}
            />
          </div>
        }
        <div className={classes.parallax}>
          {HomeContent.map((content, id) => {
            if(window.innerWidth<992)
              return <ParallaxM key={id.toString()} content={content} />;
            else if (id % 2 === 0)
              return <Parallax x={x} key={id.toString()} content={content} />;
            else
              return window.innerWidth >= 1200 ? (
                <Parallax2 x={x} key={id.toString()} content={content} />
              ) : (
                <Parallax x={x} key={id.toString()} content={content} />
              );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Home);
