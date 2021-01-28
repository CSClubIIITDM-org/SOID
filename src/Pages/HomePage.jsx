import React from "react";
import Motivation from "../components/Motivation";
import About from "../components/About";
import Slider from "../components/Slider";
import Objective from "../components/Objective";

const HomePage = () => {
  // const [images] = useState([
  //   {
  //     img: "http://www.madeit.iiitdm.ac.in/img/EDII-TN_Visit_MaDeIT.jpg",
  //   },
  //   {
  //     img: "http://www.madeit.iiitdm.ac.in/img/EDII-TN_Visit_MaDeIT.jpg",
  //   },
  //   {
  //     img: "http://www.madeit.iiitdm.ac.in/img/EDII-TN_Visit_MaDeIT.jpg",
  //   },
  //   {
  //     img: "http://www.madeit.iiitdm.ac.in/img/EDII-TN_Visit_MaDeIT.jpg",
  //   },
  // ]);

  return (
    <React.Fragment>
      <Slider />
      <About />
      <Motivation />
      <Objective />
    </React.Fragment>
  );
};

export default HomePage;
