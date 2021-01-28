import React from "react";
// import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import Picture from "../images/EDII-TN_Visit_MaDeIT.jpg";

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
            <img className="d-block w-100" src={Picture} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Picture} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Picture} alt="Third slide" />
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
