// client/src/pages/AllEvents.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events when the component mounts
    axios.get('http://localhost:5000/api/events')
      .then(res => setEvents(res.data))
      .catch(err => console.error('Error fetching events:', err));
  }, []);

  return (
    <div>
      <h2>📋 All Events</h2>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <ul>
          {events.map(event => (
            <li key={event._id}>
              <strong>{event.title}</strong><br />
              📅 {new Date(event.date).toDateString()}<br />
              📍 {event.location}<br />
              📝 {event.description}<br /><br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AllEvents;
