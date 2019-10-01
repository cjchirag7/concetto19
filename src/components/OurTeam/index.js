import React, { Component } from "react";
import Header from "../Header";
import "./styles.css";

class OurTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render() {
    const { width } = this.state;
    return (
      <div>
        <Header />
        <br />
        <br />
        {width > 486 ? (
          <h2 align="center">
            <a
              href="#"
              className="highlighted"
              style={{ borderBottom: "2px solid white" }}
            >
              {" "}
              CORE TEAM{" "}
            </a>
            | <a href="#"> DEVELOPERS</a>{" "}
          </h2>
        ) : (
          <h2 align="center">
            <a
              href="#"
              className="highlighted"
              style={{ borderBottom: "2px solid white" }}
            >
              {" "}
              OUR TEAM{" "}
            </a>
          </h2>
        )}
        <br />
        <div class="container team">
          <div class="row  mt-2">
            <div class="col-sm-6 col-lg-3 my-auto">
              <div class="box shadow-sm p-4">
                <div class="image-wrapper mb-3">
                  <img
                    class="img-fluid"
                    src="https://images.pexels.com/photos/555790/pexels-photo-555790.png"
                    alt="..."
                  />
                </div>
                <div class="box-desc">
                  <h5>Jon Doe</h5>
                  <p>FrontEnd Developer</p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3 my-auto">
              <div class="box shadow-sm p-4">
                <div class="image-wrapper mb-3">
                  <img
                    class="img-fluid"
                    src="https://images.pexels.com/photos/555790/pexels-photo-555790.png"
                    alt="..."
                  />
                </div>
                <div class="box-desc">
                  <h5>Jon Doe</h5>
                  <p>FrontEnd Developer</p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3 my-auto">
              <div class="box shadow-sm p-4">
                <div class="image-wrapper mb-3">
                  <img
                    class="img-fluid"
                    src="https://images.pexels.com/photos/555790/pexels-photo-555790.png"
                    alt="..."
                  />
                </div>
                <div class="box-desc">
                  <h5>Jon Doe</h5>
                  <p>FrontEnd Developer</p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3 my-auto">
              <div class="box shadow-sm p-4">
                <div class="image-wrapper mb-3">
                  <img
                    class="img-fluid"
                    src="https://images.pexels.com/photos/555790/pexels-photo-555790.png"
                    alt="..."
                  />
                </div>
                <div class="box-desc">
                  <h5>Jon Doe</h5>
                  <p>FrontEnd Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-sm-6 col-lg-3 my-auto">
              <div class="box shadow-sm p-4">
                <div class="image-wrapper mb-3">
                  <img
                    class="img-fluid"
                    src="https://images.pexels.com/photos/555790/pexels-photo-555790.png"
                    alt="..."
                  />
                </div>
                <div class="box-desc">
                  <h5>Jon Doe</h5>
                  <p>FrontEnd Developer</p>
                </div>
                <ul class="social">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3 my-auto">
              <div class="box shadow-sm p-4">
                <div class="image-wrapper mb-3">
                  <img
                    class="img-fluid"
                    src="https://images.pexels.com/photos/555790/pexels-photo-555790.png"
                    alt="..."
                  />
                </div>
                <div class="box-desc">
                  <h5>Jon Doe</h5>
                  <p>FrontEnd Developer</p>
                </div>
                <ul class="social">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3 my-auto">
              <div class="box shadow-sm p-4">
                <div class="image-wrapper mb-3">
                  <img
                    class="img-fluid"
                    src="https://images.pexels.com/photos/555790/pexels-photo-555790.png"
                    alt="..."
                  />
                </div>
                <div class="box-desc">
                  <h5>Jon Doe</h5>
                  <p>FrontEnd Developer</p>
                </div>
                <ul class="social">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3 my-auto">
              <div class="box shadow-sm p-4">
                <div class="image-wrapper mb-3">
                  <img
                    class="img-fluid"
                    src="https://images.pexels.com/photos/555790/pexels-photo-555790.png"
                    alt="..."
                  />
                </div>
                <div class="box-desc">
                  <h5>Jon Doe</h5>
                  <p>FrontEnd Developer</p>
                </div>
                <ul class="social">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin "></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurTeam;
