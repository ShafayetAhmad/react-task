import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [onlyEvenA, setOnlyEvenA] = useState(false);
  const [onlyEvenB, setOnlyEvenB] = useState(false);
  const [contacts, setContacts] = useState([]);

  const handleOpenModalA = () => {
    setShowModalA(true);
    setShowModalB(false);
  };

  const handleCloseModalA = () => {
    setShowModalA(false);
  };

  const handleOpenModalB = () => {
    setShowModalA(false);
    setShowModalB(true);
  };

  const handleCloseModalB = () => {
    setShowModalB(false);
  };

  useEffect(() => {
    console.log("hello");
    fetch("http://localhost:5000/contacts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setContacts(data.results);
      });

    fetch("http://localhost:5000/country-contacts/1")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={handleOpenModalA}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={handleOpenModalB}
          >
            US Contacts
          </button>
        </div>

        <Modal show={showModalA} onHide={handleCloseModalA}>
          <Modal.Header closeButton>
            <Modal.Title>Modal A</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {contacts.map((contact) => (
              <div key={contact.id}>
                <h5>{contact.phone}</h5>
                <h5>{contact.country.name}</h5>
              </div>
            ))}
            <br />
            <Button
              style={{ backgroundColor: "#46139f" }}
              className="mb-2 text-white"
            >
              All Countries
            </Button>
            <Button
              style={{ backgroundColor: "#ff7f50" }}
              className="mb-2 mx-4 text-white"
              onClick={handleOpenModalB}
            >
              US Contacts
            </Button>
            <Button
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#46139f",
                color: "#46139f",
              }}
              className="mb-2"
              onClick={handleCloseModalA}
            >
              Close
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <Form.Check
              type="checkbox"
              label="Only even"
              checked={onlyEvenA}
              onChange={() => setOnlyEvenA(!onlyEvenA)}
            />
          </Modal.Footer>
        </Modal>

        <Modal show={showModalB} onHide={handleCloseModalB}>
          <Modal.Header closeButton>
            <Modal.Title>Modal B</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {contacts.map(
              (contact) =>
                contact.country.name == "United States" && (
                  <div key={contact.id}>
                    <h5>{contact.phone}</h5>
                    <h5>{contact.country.name}</h5>
                  </div>
                )
            )}
            <br />
            <Button
              style={{ backgroundColor: "#46139f" }}
              className="mb-2 text-white"
              onClick={handleOpenModalA}
            >
              All Countries
            </Button>
            <Button
              style={{ backgroundColor: "#ff7f50" }}
              className="mb-2 mx-4 text-white"
            >
              US Contacts
            </Button>
            <Button
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#46139f",
                color: "#46139f",
              }}
              className="mb-2"
              onClick={handleCloseModalB}
            >
              Close
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <Form.Check
              type="checkbox"
              label="Only even"
              checked={onlyEvenB}
              onChange={() => setOnlyEvenB(!onlyEvenB)}
            />
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Problem2;
