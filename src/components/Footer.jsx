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
      link: "/home/#about",
    },
    {
      name: "Design advicory council",
      link: "/contact",
    },
    {
      name: "Motivation",
      link: "/motivation",
    },
    {
      name: "Courses",
      link: "/course",
    },
  ];

  const links2 = [
    {
      name: "Research Areas",
      link: "/researchareas",
    },
    {
      name: "Facilities",
      link: "/facilities",
    },
    {
      name: "Achievements",
      link: "/research/#achievments",
    },
    {
      name: "News & Events",
      link: "/news",
    },
  ];
  return (
    <React.Fragment>
      <div className="bg-secondary ">
        <div className="footer-heading">
          <h1>SIDI</h1>
        </div>
        <div>
          <div className="container pb-5">
            <div className="row footer-link">
              <div className="col-sm-6 text-right">
                <ul className="list-group">
                  {links1.map((link, index) => (
                    <li
                      className="list-group-item bg-transparent border border-0"
                      key={index}
                    >
                      <Link to={link.link} className="link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <span className="seprator"></span>
              <div className="col-sm-6 text-left">
                <ul className="list-group">
                  {links2.map((link, index) => (
                    <li
                      className="list-group-item bg-transparent border border-0"
                      key={index}
                    >
                      <Link to={link.link} className="link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="footer-contact">
            For enquiries, contact us : gmailid@gmail.com{" "}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default footer;
