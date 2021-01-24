import React from "react";

const ContactInfo = () => {
  return (
    <React.Fragment>
      <div className="card bg border border-0">
        <img
          className="card-img-top img-fliter shadow-sm"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
          alt=""
        />
        <div className="card-body text-center">
          <h2 className="card-title font-weight-bold">Prof. S Balaram</h2>
          <p className="card-text">
            Director, SASI Creative Institute of Design, Formely with NID
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactInfo;
