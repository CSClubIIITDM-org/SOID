import React from "react";
import Motivation from "../components/Motivation";
import About from "../components/About";
import Slider from "../components/Slider";
import Objective from "../components/Objective";

const HomePage = () => {
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
