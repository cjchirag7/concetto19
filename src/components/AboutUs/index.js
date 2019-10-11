import React, { Component } from "react";
import Header from "../Header";
import "./styles.css";
import { Helmet } from "react-helmet";
import CSREventDisplay from "./CSREventDisplay";
import { Card, CardImg, CardBody, CardHeader, Button } from "reactstrap";
class AboutUs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="theme-page">
        <Helmet>
          <title>Concetto</title>
          <meta
            name="description"
            content="Concetto is one of the largest Techno-management fest of IIT (ISM) Dhanbad in Eastern India with a massive participation of more than 2000 participants from 300 different colleges and institutes. Know about the theme of this year - To the moon and back."
          />
          <meta
            name="keywords"
            content="to the moon and back, iit ism dhanbad techfest, iit dhanbad techfest,Concetto,Concetto 19,Concetto 2019,Concetto 2k19,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto theme, Concetto techfest,Concetto tecnical fest, Concetto 2019-2020, Concetto tech fest 19,Concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
          />
        </Helmet>
        <Header />
        <br />
        <h1
          style={{
            textAlign: "center",
            marginTop: "17px",
            color: "black"
          }}
          className="title"
        >
          About Us
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 opaque">
              The 3 day technical fiesta of IIT(ISM) - "CONCETTO" is one of the
              largest Techno-management fest in Eastern India with a massive
              participation of more than 2000 participants from 300 different
              colleges and institutes, who stalk the grounds of ISM to prove
              their technical expertise. Encompassing the various boundaries of
              science and technology, Concetto is there with 45 events in all
              providing a platform to shoot the "TECHNICAL ME" of everyone.
              Apart from the various Robotics and Coding events, Concetto calls
              all you budding entrepreneurs to showcase your innovative business
              skills. Several departmental events of petroleum engineering,
              mining engineering and mechanical engineering are all lined up as
              well. At the same time, hone your skills by joining our workshops
              taken by the eminent personalities in the various fields of
              science.
              <br />
              Packed with this plethora of technical events - competitions,
              workshops, guest lectures, paper meet and exhibition, Concetto is
              every bit what an engineering lad aspires of. Prizes worth one
              million, loads of goodies and lots of lots of fun are all that
              await one who becomes a witness to this legendary event.
            </div>
            <div
              className="col-12 col-md-6"
              style={{ paddingLeft: "0", paddingRight: "0" }}
            >
              <Card
                body
                inverse
                style={{
                  backgroundColor: "rgba(0,0,0,0.8)",
                  borderColor: "#333"
                }}
              >
                <CardImg
                  top
                  width="100%"
                  src="/images/CAMPUS-MAP.jpg"
                  alt="IIT (ISM) Campus Map"
                />
                <br />
                <CardBody style={{ paddingLeft: "43%" }}>
                  <a href="/images/CAMPUS-MAP.jpg" target="_blank">
                    <Button
                      type="button"
                      className="btn btn-info btn-lg"
                      style={{ margin: "auto" }}
                    >
                      <i className="fa fa-eye" /> View
                    </Button>
                  </a>
                </CardBody>
              </Card>
            </div>
          </div>
          <br />
        </div>
        <br />
        <h1
          style={{
            textAlign: "center",
            marginTop: "17px",
            color: "black"
          }}
          className="title"
        >
          Our Theme
        </h1>
        <div className="container opaque">
          <br />
          "Astronomy compels the soul to look upward, and leads us from this
          world to another." Equipped with his five senses, man explores the
          universe around him and calls that adventurous Science as Astronomy.
          Astronomy is useful because it raises us above ourselves. It is useful
          because it is grand. It shows us how small is man's body, how great
          his mind, since his intelligence can embrace the whole of this
          dazzling immensity, where his body is only an obscure point, and enjoy
          its silent harmony. When we look at the moon, we do not see a hostile,
          empty world. We see the radiant body where man has taken his first
          steps into a frontier that will never end. Ten years ago the Moon was
          an inspiration to poets and an opportunity for lovers. Ten years from
          now it will be just another airport. In a world full of complexity and
          chaos, CONCETTO’19 endeavours to bring along all of you and
          rejuvenate you with extreme joviality and buoyancy. With the aim of
          providing a platform for the tech enthusiast students to develop and
          showcase their technical prowess, CONCETTO is the ideal destination
          for all technophiles. Boasting of a huge roaster of exhilarating and
          engaging events, along with promises to be grander, greater, more
          splendid and glorious than ever before IIT ISM presenting{" "}
          <b>CONCETTO: To The Moon And Back </b>.
        </div>
        <br />
        <h1
          style={{
            textAlign: "center",
            color: "black"
          }}
          className="title"
        >
          Message from the Convener
        </h1>
        <div className="container opaque">
          <br />
          It gives me immense pleasure to announce that the technical fest of
          Indian Institute of Technology (Indian School of Mines) Dhanbad,
          Concetto 2019-20 is going to be organized by the students from 18th to
          20th October 2019. This fest is a blend of competent technical
          seminars, events and several renowned competitions. Concetto provides
          nimble minds a chance to compete. This event spreads its invitation to
          all young innovative minds of the nation.
          <br />
          Concetto brings all events, competitions, talks and lectures delivered
          by some of the eminent personalities and renowned scientists together
          and gives a great opportunity to students, who thrive for enormous
          success and prosperity in their life. All the endeavors and struggles,
          made by the faculty members, students and officials are heavily
          comprehended.
          <br />I convey my regards and gratitude to all the sponsors, donors
          and also, the advertisers who are assisting us to make this fest an
          attainment.
          <div className="col-12">
            <img
              style={{
                display: "block",
                position: "relative",
                margin: "auto"
              }}
              src="https://concetto-front.s3.ap-south-1.amazonaws.com/core-team/ACS.jpg"
              alt={"Dr. ACS Rao"}
              height="220"
              width="220"
            />
            <h5 align="center">
              Dr. ACS Rao Convener
              <br />
              Assistant Professor
              <br />
              Department of Computer Science Engineering
              <br />
            </h5>
          </div>
        </div>
        <br />
        <h1
          style={{
            textAlign: "center",
            color: "black"
          }}
          className="title"
        >
          CSR EVENTS
        </h1>
        <CSREventDisplay />
      </div>
    );
  }
}

export default AboutUs;
