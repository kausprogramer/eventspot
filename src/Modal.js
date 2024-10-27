import React, { useState } from 'react';
import './Modal.css'; 

const Modal = ({ isOpen, onClose, event }) => {
  const [ticketCount, setTicketCount] = useState(1); 

  if (!isOpen) return null;

  const handleBuyTicket = () => {
    alert(`You have purchased ${ticketCount} ticket(s) for ${event.title}!`);
  };

  const increaseTickets = () => {
    setTicketCount(prevCount => prevCount + 1);
  };

  const decreaseTickets = () => {
    setTicketCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1)); 
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{event.title}</h2>
        <img src={event.image} alt={event.title} className="modal-image" />
        <p className="modal-date">Date: {event.date}</p>
        <p className="modal-location">Location: {event.location}</p>
        
        <div className="ticket-controls">
          <button onClick={decreaseTickets} className="ticket-button">-</button>
          <span className="ticket-count">{ticketCount}</span>
          <button onClick={increaseTickets} className="ticket-button">+</button>
        </div>
        <div className='buttonCont'>
        <button onClick={handleBuyTicket} className="buy-ticket-button">Buy Ticket</button>
        <button onClick={onClose} className="close-button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
