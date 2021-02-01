import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const ReactLoader = ({ loading }) => {
  return (
    <React.Fragment>
      <div>
        <PropagateLoader color="#ff652f" loading={loading} size={50} />
      </div>
    </React.Fragment>
  );
};

export default ReactLoader;
