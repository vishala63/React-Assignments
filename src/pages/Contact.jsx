import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <input className="form-control mb-2" name="name" placeholder="Name" onChange={handleChange} required />
        <input className="form-control mb-2" name="email" placeholder="Email" onChange={handleChange} required />
        <textarea className="form-control mb-2" name="message" placeholder="Message" onChange={handleChange} required />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton><Modal.Title>Form Submitted</Modal.Title></Modal.Header>
        <Modal.Body>
          <p><b>Name:</b> {formData.name}</p>
          <p><b>Email:</b> {formData.email}</p>
          <p><b>Message:</b> {formData.message}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Contact;
