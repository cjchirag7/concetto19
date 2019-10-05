import React, { Component } from "react";
import Header from "../Header";
import { Workshop_list } from "../../shared/Workshops";

class Workshops extends Component {
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
            marginTop: "15px"
          }}
        >
          WORKSHOPS
        </h1>
        <div className="container">
          {Workshop_list.map((workshop, id) => (
            <React.Fragment key={id.toString()}>
              <hr class="featurette-divider" style={{ margin: "2rem" }} />
              <div class="row featurette">
                <div class={"col-md-5 " + (id % 2 == 0 ? "order-md-2" : "")}>
                  <img
                    src={workshop.img}
                    class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    width="500"
                    height="500"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: 500x500"
                  ></img>
                </div>
                <div class={"col-md-7 " + (id % 2 == 0 ? "order-md-1" : "")}>
                  <h2 class="featurette-heading" align="center">
                    {workshop.name}
                    {/* <br />
                    <span class="text-muted">Manthan</span> */}
                  </h2>
                  <p class="lead">{workshop.details}</p>
                  <p>
                    <a
                      href={workshop.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Know more..
                    </a>
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
          <br />
        </div>
      </div>
    );
  }
}

export default Workshops;
