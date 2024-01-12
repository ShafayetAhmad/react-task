import React, { useEffect, useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";

const ModalA = ({ showModal, handleClose }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts", { mode: "no-cors" })
      .then((res) => {
        // Handle the opaque response here since res.json() won't work
        console.log("Response status:", res.status);
        console.log("Response type:", res.type);
        // You won't be able to access res.json() or res.headers
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>All Contacts Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Phone</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {countriesData.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.phone}</td>
                <td>{contact.country.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalA;
