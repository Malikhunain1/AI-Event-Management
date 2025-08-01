import React, { useState } from 'react';
import axios from 'axios';

const EventFormPage = () => {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    location: '',
    description: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/events', eventData);
      setMessage('✅ Event created successfully!');
      setEventData({ title: '', date: '', location: '', description: '' });
    } catch (error) {
      console.error(error);
      setMessage('❌ Failed to create event.');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h1>📝 Create New Event</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            name="title"
            value={eventData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            name="date"
            type="date"
            value={eventData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            name="location"
            value={eventData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventFormPage;
