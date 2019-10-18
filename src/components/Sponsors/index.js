import React, { Component } from "react";

class Sponsors extends Component {
  constructor(props) {
    super(props);
    const { sponsors } = props;
    this.state = {
      titles: sponsors.filter(sponsor => sponsor.is_title),
      others: sponsors.filter(sponsor => !sponsor.is_title)
    };
  }
  // componentDidMount(){
  //     window.scrollTo(0,0);
  // }
  render() {
    const { titles, others } = this.state;
    // console.log(window.innerWidth);
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            marginTop: "-20px"
          }}
          className="title"
        >
          TITLE SPONSOR
        </h1>
        <div className="container">
          {titles.map((title, id) => (
            <React.Fragment key={id.toString()}>
              <div
                class={"col-12 col-md-6 offset-lg-3 col-lg-6 "}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap"
                }}
              >
                <a href={title.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={title.img}
                    class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    width="500"
                    height="500"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    aria-label="Placeholder: 500x500"
                    alt={"Loading..."}
                    // style={{
                    //   display: "block",
                    //   marginLeft: "auto",
                    //   marginRight: "auto",
                    //   width: "40%"
                    // }}
                  />
                </a>
              </div>
            </React.Fragment>
          ))}
        </div>
        <br />
        {window.innerWidth > 810 ? (
          <React.Fragment>
            <h1
              style={{
                textAlign: "center",
                marginTop: "20px"
              }}
              className="title"
            >
              OTHER SPONSORS
            </h1>
            <div className="container">
              {others.map((title, id) => (
                <React.Fragment key={id.toString()}>
                  <div
                    class={
                      id === 9
                        ? "col-12 col-md-6 offset-lg-3 col-lg-6 "
                        : "col-12 col-md-6 col-lg-4"
                    }
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    <a
                      href={title.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={title.img}
                        class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="500"
                        height="500"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        aria-label="Placeholder: 500x500"
                        alt={"Loading..."}
                      />
                    </a>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Sponsors;
