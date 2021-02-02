import React from "react";
import Motivation from "../components/Motivation";
import About from "../components/About";
import Slider from "../components/Slider";

import News from "../components/News";
import Objective from "../components/Objective";


const HomePage = () => {
  return (
    <React.Fragment>
      <Slider />
      <About />
      <News/>
      <Motivation />
      <Objective />
    </React.Fragment>
  );
};

export default HomePage;
