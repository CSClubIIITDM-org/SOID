import React from "react";
// import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

const Slider = () => {
  return (
    <React.Fragment>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="http://www.madeit.iiitdm.ac.in/img/EDII-TN_Visit_MaDeIT.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="http://www.madeit.iiitdm.ac.in/img/EDII-TN_Visit_MaDeIT.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="http://www.madeit.iiitdm.ac.in/img/EDII-TN_Visit_MaDeIT.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <h1 className="carousel-heading">
          School of Interdisciplinary Design and Innovation
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Slider;
