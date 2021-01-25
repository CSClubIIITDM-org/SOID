import React from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  const links = [
    {
      name: "Courses",
      link: "course",
    },
    {
      name: "Research",
      link: "research",
    },
    {
      name: "Members",
      link: "members",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];

  return (
    <nav className="navbar navbar-expand-md bg-light navbar-light shadow-sm">
      <a className="navbar-brand" href="/">
        SOID
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav ml-auto">
          {links.map((link) => (
            <li className="nav-item">
              <Link className="nav-link" to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menubar;
