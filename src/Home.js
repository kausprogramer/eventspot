import React, { useState, useEffect } from 'react';
import './Home.css'; 
import TypingEffect from './TypingEffect';
import Modal from './Modal';
import Loading from './Loading'; 
import events from './events.json';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="event-container">
      <TypingEffect text="Know Your City More....." speed={200} />
      <h1>Upcoming Events</h1>
      <div className="card-container">
        {events.map(event => (
          <div className="event-card" key={event.id} onClick={() => openModal(event)}>
            <img src={event.image} alt={event.title} className="event-image" />
            <h2>{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} event={selectedEvent} />
    </div>
  );
};

export default Home;
