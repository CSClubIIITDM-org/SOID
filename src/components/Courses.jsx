import React from "react";
import CourseDes from "./CourseDescription";

const Courses = () => {
  const courseInfo = [
    {
      level: "Level 1",
      info1: " A",
      highlight: " basic module of six courses (18 credits)",
      info2:
        " in product design and entrepreneurship spread over the first six semesters to cultivate curiosity and creative confidence amongst all the undergraduate engineering students joining IIITDM",
      align: "content-right",
    },
    {
      level: "Level 2",
      info1: "An",
      highlight:
        "additional set of six elective courses between 6-8 semesters, full-semester internship with industry partners in the 7th semester and an interdisciplinary project",
      info2:
        " in the 8th semester (total 41 credits) to enhance the product design competence of select engineers who opt for minor / honors in product design",
      align: "content-left",
    },
    {
      level: "Level 3",
      info1: " A",
      highlight:
        " dual-degree in M.Des (additional 36-41 credits) or a full-fledged 2 year M.Des program",
      info2:
        " in integrated product design (92 credits) for external candidates",
      align: "content-right",
    },
    {
      level: "Level 4",
      info1: " A",
      highlight:
        " PhD program in design and innovation for experienced professionals",
      info2: " from industry or academia",
      align: "content-left",
    },
  ];

  return (
    <div
      className="container-fluid text-white"
      style={{ backgroundColor: "#747474" }}
    >
      <div className="text-center">
        <h1
          className=" display-2 p-5 course-heading "
          style={{ color: "#000000" }}
        >
          COURSES
        </h1>
      </div>

      <ul className="timeline timeline-head">
        <div className="content-left ml-5 text-dark">
          <p id="timeline-head">
            SIDI offers
            <span>
              courses and programs that develop competence in integrated product
              design
            </span>{" "}
            (a blend of technology, design, and business). They are aimed at
            nurturing design talent at four levels of maturity
          </p>
        </div>
        {courseInfo.map((course) => (
          <CourseDes
            key={course.level}
            level={course.level}
            info1={course.info1}
            info2={course.info2}
            highlight={course.highlight}
            align={course.align}
          />
        ))}
      </ul>
    </div>
  );
};

export default Courses;
