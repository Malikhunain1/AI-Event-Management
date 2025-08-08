import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import EventForm from "./components/EventForm";
import FeedbackForm from "./components/FeedbackForm";
import Dashboard from "./components/Dashboard"; // Optional, create it if needed

function App() {
  const exampleEventId = "YOUR_EVENT_OBJECT_ID_HERE"; // Replace with real MongoDB _id

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/event" element={<EventForm />} />
          <Route path="/feedback" element={<FeedbackForm eventId={exampleEventId} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
