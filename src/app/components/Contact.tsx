import React from 'react';
import "@/app/styles/contact.css"; // Importing the external CSS file

const Contact = () => {
  return (
    <div className="form-container">
      <h2> Delivery Form</h2>
      <form>
        {/* Sender Details */}
        <div className="form-group">
          <label htmlFor="senderName">Sender Name:</label>
          <input type="text" id="senderName" placeholder="Enter sender's name" />
        </div>
        <div className="form-group">
          <label htmlFor="senderAddress">Sender Address:</label>
          <input type="text" id="senderAddress" placeholder="Enter sender's address" />
        </div>

        {/* Receiver Details */}
        <div className="form-group">
          <label htmlFor="receiverName">Receiver Name:</label>
          <input type="text" id="receiverName" placeholder="Enter receiver's name" />
        </div>
        <div className="form-group">
          <label htmlFor="receiverAddress">Receiver Address:</label>
          <input type="text" id="receiverAddress" placeholder="Enter receiver's address" />
        </div>

        {/* Shipping Details */}
        <div className="form-group">
          <label htmlFor="deliveryDate">Delivery Date:</label>
          <input type="date" id="deliveryDate" />
        </div>
        <div className="form-group">
          <label htmlFor="packageWeight">Package Weight (kg):</label>
          <input type="number" id="packageWeight" placeholder="Enter weight in kg" />
        </div>

        <div className="form-group">
          <label htmlFor="notes">Additional Notes:</label>
          <textarea id="notes"  placeholder="Enter any additional notes"></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
