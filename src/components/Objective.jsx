import React from "react";
import { Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal_special">
        <Modal.Header closeButton className="border border-0" />
        <Modal.Body>
          <p style={{ padding: "20px" }}>
            To{" "}
            <span className="text-light">
              create a learning envioronment that nurtures curiosity, creativity
              and collaboration{" "}
            </span>{" "}
            among faculty, students, industry partners.
          </p>
        </Modal.Body>
      </div>
    </Modal>
  )
}

const Objective = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <React.Fragment>
      <div className="container-fluid bg-dark ">
        <div className="row">
          <div
            className="col-sm-4 text-white objective-title"
            style={{ textAlign: "right", marginTop: "20%" }}
          >
            Objectives
          </div>
          <div className="col-sm-4 ">
            <button
              onClick={() => setModalShow(true)}
              className="p-3 m-3 objective-button text-white"
            >
              nurture CURIOSITY creativity & collaboration{" "}
            </button>
            <button
              onClick={() => setModalShow(true)}
              className="p-3 m-3 objective-button text-white"
            >
              a new model of INter-disciplinary learning in line with nep 2020
            </button>
          </div>
          <div className="col-sm-4" style={{ marginTop: "12%" }}>
            <button
              onClick={() => setModalShow(true)}
              className="p-3 m-3 objective-button text-white"
            >
              inter-disciplinary research in design and innovation
            </button>
          </div>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Objective;
