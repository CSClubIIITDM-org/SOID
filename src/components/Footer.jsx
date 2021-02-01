import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
  const links1 = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
    {
      name: "Design advicory council",
      link: "/",
    },
    {
      name: "Motivation",
      link: "/",
    },
    {
      name: "Courses",
      link: "/",
    },
  ];

  const links2 = [
    {
      name: "Research Areas",
      link: "/",
    },
    {
      name: "Facilities",
      link: "/",
    },
    {
      name: "Achievements",
      link: "/",
    },
    {
      name: "News & Events",
      link: "/",
    },
  ];
  return (
    <React.Fragment>
      <div className="bg-secondary">
        <div className="footer-heading ">
          <h1>SIDI</h1>
        </div>
        <div>
          <div className="container pb-5">
            <div className="row">
              <div className="col-sm-6">
                <ul className="list-group">
                  {links1.map((link, index) => (
                    <li
                      className="list-group-item bg-transparent border border-0"
                      key={index}
                    >
                      <Link to={link.link} className="text-light">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list-group">
                  {links2.map((link, index) => (
                    <li
                      className="list-group-item bg-transparent text-light border border-0"
                      key={index}
                    >
                      <Link to={link.link} className="text-light">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default footer;
