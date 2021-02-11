import React from "react";

const CourseDes = (props) => {
  return (
    <React.Fragment>
      <li>
        <div className="timeline-icon">
          <a href="#!" className="inner-circle">
            &nbsp;
          </a>
        </div>
        <div className={props.align}>
          <h1 className="pb-3 ml-5">{props.level}</h1>
          <p className="ml-5">{props.info}</p>
        </div>
      </li>
    </React.Fragment>
  );
};

export default CourseDes;
