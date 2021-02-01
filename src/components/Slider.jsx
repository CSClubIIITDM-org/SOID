import React, { useState, useEffect } from "react";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import axios from "axios";
import ReactLoader from "./ReactLoader";

const Slider = () => {
  const [carousel, setCarousel] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const ac = new AbortController();
    const getImage = async () => {
      try {
        const images = await axios.get(
          `https://project-smile-backend.herokuapp.com/api/common/carousal`
        );
        setCarousel(images.data.message);
        setisLoading(false);
      } catch (error) {
        console.log(error);
        setisLoading(false);
      }
    };
    getImage();
    return () => ac.abort();
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid px-0">
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators mb-0">
            {carousel.map((slider, index) => (
              <li
                key={slider._id}
                data-target="#demo"
                data-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></li>
            ))}
          </ul>
          <div
            className="carousel-inner"
            style={{ width: "100%", height: "650px" }}
          >
            <div className="position-relative" style={{ zIndex: 2000 }}>
              <h1
                className="position-absolute text-center text-primary font-weight-bold display-1 py-5 px-5"
                style={{ marginTop: "10%" }}
              >
                School of Interdisciplinary Design and Innovation
              </h1>
            </div>
            {isLoading ? (
              <ReactLoader content="loading images..." loading={isLoading} />
            ) : (
              carousel.map((slider, index) => (
                <div
                  className={
                    index + 1 === 1 ? "carousel-item active" : "carousel-item"
                  }
                  key={index + 1}
                >
                  <img
                    src={`https://project-smile-backend.herokuapp.com/api/common/carousal/${slider._id}`}
                    alt=""
                    className="mx-auto"
                    style={{
                      width: "100%",
                      height: "650px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))
            )}
          </div>

          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
