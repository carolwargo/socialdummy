import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { 
    FaPlus,
    FaImage,
    FaVideo,
    FaUnderline,
    FaBold,
    FaItalic,
 } from "react-icons/fa";
import GirlCamera from "../../assets/images/GirlCamera.png"; // Adjust path 

export default function FloatingPostButton() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {/* Floating Button */}
      <button
        className="new-post-floating-btn"
        onClick={handleShow}
      >
        <FaPlus size={24} />
      </button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Start a Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="postText">
            <div className="d-flex align-items-start my-3 ">
                    <img
                                src={GirlCamera }
                                alt="Avatar 2" 
                                className="profile-img-small"
                              />
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="What's on your mind?"
              />
                    </div>
            </Form.Group>
         
  {/* Left: Upload buttons */}
  <div className="d-flex flex-wrap align-items-center ms-0 ms-md-5 mb-2 mb-md-0 border-top p-2 rounded">
    <div className="toolbar-btn me-2" title="Upload Image" aria-label="Upload image">
      <FaImage />
    </div>
    <div className="toolbar-btn me-2" title="Upload Video" aria-label="Upload video">
      <FaVideo />
    </div>
    <span className="toolbar-btn-transparent me-1" title="Underline" aria-label="Underline">
      <FaUnderline />
    </span>
    <div className="toolbar-btn-transparent me-1" title="Bold text" aria-label="Bold text">
      <FaBold />
    </div>
    <div className="toolbar-btn-transparent me-1" title="Italicize" aria-label="Italicize">
      <FaItalic />
    </div>
    
  </div>
            <div className="mt-3 d-flex justify-content-end">
              <Button 
              variant="secondary" 
             onClick={handleClose} 
             className="me-2"
             style={{
                padding: "3px 9px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
                fontSize: "0.9rem",
              }}>
                Cancel
              </Button>
              <Button 
              variant="primary" 
              type="submit"
              style={{
                padding: "3px 15px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
                fontSize: "0.9rem",
              }}>
                Post
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
