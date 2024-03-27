import React, { useState } from 'react';

const BusinessView = ({ match }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Assume the business data is fetched from a database or API based on the ID
  // Replace this with your actual logic to fetch business details
  const business = { 
    id: 1, 
    name: 'Business 1', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
  };

  return (
    <div>
      <h1>{business.name}</h1>
      <p>{business.description}</p>

      {/* Button to open appointment modal */}
      <button onClick={handleShowModal}>Make an Appointment</button>

      {/* Appointment modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Make an Appointment</h2>
            {/* Add appointment form or content here */}
            {/* For simplicity, just a message is displayed */}
            <p>Contact us at xxx-xxx-xxxx to make an appointment.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessView;