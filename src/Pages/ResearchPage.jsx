import React from "react";
import Achievements from "../components/Achievements";
import Research from "../components/Research";
import ResContent from "../components/ResContent";

const ResearchPage = () => {
  return (
    <React.Fragment>
      <ResContent />
      <Research />
      <Achievements />
    </React.Fragment>
  );
};

export default ResearchPage;
