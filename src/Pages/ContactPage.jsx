import React from "react";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  return (
    <React.Fragment>
      <div
        id={"#designadvisorycouncil"}
        className="container-fluid bg mt-0 pb-5"
      >
        <div className="row px-5 pt-5">
          <div className="col-sm-4 px-3">
            <ContactInfo />
          </div>
          <div className="col-sm-4 px-3" style={{ marginTop: "100px" }}>
            <ContactInfo />
          </div>
          <div className="col-sm-4 px-3">
            <ContactInfo />
          </div>
        </div>
        <h1 className="contact-heading">Design Advisory Council</h1>
        <div className="row" style={{ marginTop: "80px" }}>
          <div className="col-sm-4 px-3">
            <ContactInfo />
          </div>
          <div className="col-sm-4 px-3" style={{ marginTop: "100px" }}>
            <ContactInfo />
          </div>
          <div className="col-sm-4 px-3">
            <ContactInfo />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
