import React from "react";
import CourseDes from "./CourseDescription";

const Courses = () => {
  const courseInfo = [
    {
      level: "Level 1",
      info:
        " A basic module of six courses (18 credits) in product design and entrepreneurship spread over the first six semesters to cultivate curiosity and creative confidence amongst all the undergraduate engineering students joining IIITDM",
      align: "content-right",
    },
    {
      level: "Level 2",
      info:
        " A basic module of six courses (18 credits) in product design and entrepreneurship spread over the first six semesters to cultivate curiosity and creative confidence amongst all the undergraduate engineering students joining IIITDM",
      align: "content-left",
    },
    {
      level: "Level 3",
      info:
        " A basic module of six courses (18 credits) in product design and entrepreneurship spread over the first six semesters to cultivate curiosity and creative confidence amongst all the undergraduate engineering students joining IIITDM",
      align: "content-right",
    },
    {
      level: "Level 4",
      info:
        " A basic module of six courses (18 credits) in product design and entrepreneurship spread over the first six semesters to cultivate curiosity and creative confidence amongst all the undergraduate engineering students joining IIITDM",
      align: "content-left",
    },
  ];

  return (
    <div
      className="container-fluid text-white"
      style={{ backgroundColor: "black" }}
    >
      <h1 className="course-heading p-5">COURSES</h1>
      <ul className="timeline">
        <div className="content-left">
          <p>
            A <span> basic module of six courses (18 credits)</span> in product
            design and entrepreneurship spread over the first six semesters to
            cultivate curiosity and creative confidence amongst all the
            undergraduate engineering students joining IIITDM
          </p>
        </div>
        {courseInfo.map((course) => (
          <CourseDes
            key={course.level}
            level={course.level}
            info={course.info}
            align={course.align}
          />
        ))}
      </ul>
    </div>
  );
};

export default Courses;
