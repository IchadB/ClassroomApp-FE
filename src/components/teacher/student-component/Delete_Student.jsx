import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import API_Service from "../../../api-service/API_Service";
const Delete_Student = (student) => {
  //   API_Service.delete("/teachers/delete-student/" + student.props.id);
  //   console.log(student);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="outline-primary"
        size="sm"
        className="mx-1 d-flex flex-row align-items-center p-1"
        onClick={handleShow}
      >
        <FontAwesomeIcon icon={faTrashCan} />
        <span className="ms-1">Delete</span>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deleting Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>
            Are you sure to delete this student?...
            <span className="h5">
              "{student.props.lname}, {student.props.fname}"
            </span>
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Delete_Student;