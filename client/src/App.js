// client/src/App.js
import React from "react";
import EventForm from "./components/Eventform";
import FeedbackForm from "./components/Feedbackform";

function App() {
  const exampleEventId = "YOUR_EVENT_OBJECT_ID_HERE"; // Replace with real ID from MongoDB

  return (
    <div className="App">
      <EventForm />
      <FeedbackForm eventId={exampleEventId} />
    </div>
  );
}

export default App;
