import React, { useState } from "react";
import axios from "axios";
import "./FeedbackForm.css"; // Ensure your CSS is imported

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    event: "",
    feedback: "",
  });

  const [prediction, setPrediction] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send feedback data to backend
     const response= await axios.post("http://localhost:5000/api/feedback/submit", {
  userName: formData.name,
  comment: formData.feedback,
  rating: 5, // Or whatever default/intended rating you want
  eventId: null // Or pass actual eventId if available
});



      // Show prediction result
      setPrediction(response.data.prediction);
      setMessage("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setMessage("Something went wrong saddi jaan chd deyo.");
    }
  };

  return (
    <div className="feedback-form">
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="event"
          placeholder="Event Name"
          value={formData.event}
          onChange={handleChange}
          required
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      {message && <p className="message">{message}</p>}
      {prediction && (
        <div className="prediction-box">
          <strong>AI Prediction:</strong> {prediction}
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
