import React from "react";

const Research = () => {
  return (
    <React.Fragment>
      <div className="bg-dark p-3">
        <h4 className="text-orange text-center pb-5 pt-5 research-heading">
          Research in Interdisciplinary Design and Innovation
        </h4>

        <div id="accordion">
          <div className="card research mb-3 border-0">
            <div className="card-header bg-dark " id="headingOne">
              <h5 className=" text-center m-0 ">
                <button
                  className="btn btn-link w-50 border-0"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Product Design & Innovation Process
                </button>
              </h5>
            </div>

            <div className="row bg-dark m-0 ">
              <div
                id="collapseOne"
                className="collapse bg-dark col-md-6 offset-md-3"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <ul className=" w-100 list-group list-group-flush text-text text-white">
                  <li className="list-group-item bg-secondary">
                    Cras justo odio
                  </li>
                  <li className="list-group-item bg-secondary">
                    Dapibus ac facilisis in
                  </li>
                  <li className="list-group-item bg-secondary">
                    Morbi leo risus
                  </li>
                  <li className="list-group-item bg-secondary">
                    Porta ac consectetur ac
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card research mb-3 border-0">
            <div className="card-header bg-dark " id="headingOne">
              <h5 className=" text-center m-0 ">
                <button
                  className="btn btn-link w-50 border-0"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  Product Design & Innovation Process
                </button>
              </h5>
            </div>
            <div className="row bg-dark m-0 ">
              <div
                id="collapseTwo"
                className="collapse bg-dark col-md-6 offset-md-3"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <ul className=" w-100 list-group list-group-flush text-text text-white">
                  <li className="list-group-item bg-secondary">
                    Cras justo odio
                  </li>
                  <li className="list-group-item bg-secondary">
                    Dapibus ac facilisis in
                  </li>
                  <li className="list-group-item bg-secondary">
                    Morbi leo risus
                  </li>
                  <li className="list-group-item bg-secondary">
                    Porta ac consectetur ac
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card research mb-3 border-0">
            <div className="card-header bg-dark " id="headingOne">
              <h5 className=" text-center m-0 ">
                <button
                  className="btn btn-link w-50 border-0"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  Product Design & Innovation Process
                </button>
              </h5>
            </div>
            <div className="row bg-dark m-0 ">
              <div
                id="collapseThree"
                className="collapse bg-dark col-md-6 offset-md-3"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <ul className=" w-100 list-group list-group-flush text-text text-white">
                  <li className="list-group-item bg-secondary">
                    Cras justo odio
                  </li>
                  <li className="list-group-item bg-secondary">
                    Dapibus ac facilisis in
                  </li>
                  <li className="list-group-item bg-secondary">
                    Morbi leo risus
                  </li>
                  <li className="list-group-item bg-secondary">
                    Porta ac consectetur ac
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card research mb-3 border-0">
            <div className="card-header bg-dark " id="headingOne">
              <h5 className=" text-center m-0 ">
                <button
                  className="btn btn-link w-50 border-0"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseFour"
                >
                  Product Design & Innovation Process
                </button>
              </h5>
            </div>
            <div className="row bg-dark m-0 ">
              <div
                id="collapseFour"
                className="collapse bg-dark col-md-6 offset-md-3"
                aria-labelledby="headingFour"
                data-parent="#accordion"
              >
                <ul className=" w-100 list-group list-group-flush text-text text-white">
                  <li className="list-group-item bg-secondary">
                    Cras justo odio
                  </li>
                  <li className="list-group-item bg-secondary">
                    Dapibus ac facilisis in
                  </li>
                  <li className="list-group-item bg-secondary">
                    Morbi leo risus
                  </li>
                  <li className="list-group-item bg-secondary">
                    Porta ac consectetur ac
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card research mb-3 border-0">
            <div className="card-header bg-dark " id="headingOne">
              <h5 className=" text-center m-0 ">
                <button
                  className="btn btn-link w-50 border-0"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="true"
                  aria-controls="collapseFive"
                >
                  Product Design & Innovation Process
                </button>
              </h5>
            </div>

            <div className="row bg-dark m-0 ">
              <div
                id="collapseFive"
                className="collapse bg-dark col-md-6 offset-md-3"
                aria-labelledby="headingFive"
                data-parent="#accordion"
              >
                <ul className=" w-100 list-group list-group-flush text-text text-white">
                  <li className="list-group-item bg-secondary">
                    Cras justo odio
                  </li>
                  <li className="list-group-item bg-secondary">
                    Dapibus ac facilisis in
                  </li>
                  <li className="list-group-item bg-secondary">
                    Morbi leo risus
                  </li>
                  <li className="list-group-item bg-secondary">
                    Porta ac consectetur ac
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Research;
