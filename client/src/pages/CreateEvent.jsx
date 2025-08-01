// client/src/pages/CreateEvent.jsx

import React, { useState } from 'react';
import axios from 'axios';

function CreateEvent() {
  const [event, setEvent] = useState({
    title: '',
    date: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/events/create', event);
      alert('Event created!');
      setEvent({ title: '', date: '', location: '', description: '' });
    } catch (err) {
      alert('Failed to create event.');
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Event</h2>
      <input type="text" name="title" placeholder="Title" value={event.title} onChange={handleChange} required /><br />
      <input type="date" name="date" value={event.date} onChange={handleChange} required /><br />
      <input type="text" name="location" placeholder="Location" value={event.location} onChange={handleChange} required /><br />
      <textarea name="description" placeholder="Description" value={event.description} onChange={handleChange} /><br />
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateEvent;
