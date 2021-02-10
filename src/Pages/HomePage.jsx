import React from "react";
import Motivation from "../components/Motivation";
import Slider from "../components/Slider";

import News from "../components/News";
import Objective from "../components/Objective";
import ContactPage from "./ContactPage";

const HomePage = () => {
  return (
    <React.Fragment>
      <Slider />
      <ContactPage />
      <News />
      <Motivation />
      <Objective />
    </React.Fragment>
  );
};

export default HomePage;
