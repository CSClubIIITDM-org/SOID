import React, { useState } from "react";
import AwesomeSlider from "react-awesome-slider";

const HomePage = () => {
  const [images] = useState([
    {
      img: "http://www.madeit.iiitdm.ac.in/img/EDII-TN_Visit_MaDeIT.jpg",
    },
    {
      img: "http://www.madeit.iiitdm.ac.in/img/EDII-TN_Visit_MaDeIT.jpg",
    },
    {
      img: "http://www.madeit.iiitdm.ac.in/img/EDII-TN_Visit_MaDeIT.jpg",
    },
    {
      img: "http://www.madeit.iiitdm.ac.in/img/EDII-TN_Visit_MaDeIT.jpg",
    },
  ]);

  return (
    <React.Fragment>
      <div className="container-fluid bg">
        <AwesomeSlider>
          <div data-src="http://www.madeit.iiitdm.ac.in/img/EDII-TN_Visit_MaDeIT.jpg" />
          <div data-src="http://www.madeit.iiitdm.ac.in/img/EDII-TN_Visit_MaDeIT.jpg" />
          <div data-src="http://www.madeit.iiitdm.ac.in/img/EDII-TN_Visit_MaDeIT.jpg" />
        </AwesomeSlider>
        {/* <AwesomeSlider animation="cubeAnimation">
          {images.map((img) => (
            <div data-src={img.img} className="img-filter" />
          ))}
          <div
            data-src="http://www.madeit.iiitdm.ac.in/img/EDII-TN_Visit_MaDeIT.jpg"
            className="img-filter"
          />
        </AwesomeSlider> */}
      </div>
    </React.Fragment>
  );
};

export default HomePage;
