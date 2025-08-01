// client/src/components/FeedbackForm.js
import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = ({ eventId }) => {
  const [form, setForm] = useState({
    userName: "",
    rating: 5,
    comment: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/feedback/submit", {
        ...form,
        eventId
      });
      alert("✅ Feedback submitted!");
      setForm({ userName: "", rating: 5, comment: "" });
    } catch (err) {
      alert("❌ Error: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow rounded w-96 mx-auto mt-10 bg-white">
      <h2 className="text-xl font-bold mb-4">Submit Feedback</h2>
      <input
        type="text"
        name="userName"
        placeholder="Your Name"
        value={form.userName}
        onChange={handleChange}
        className="mb-2 p-2 border rounded w-full"
        required
      />
      <select
        name="rating"
        value={form.rating}
        onChange={handleChange}
        className="mb-2 p-2 border rounded w-full"
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num} Star</option>
        ))}
      </select>
      <textarea
        name="comment"
        placeholder="Comment"
        value={form.comment}
        onChange={handleChange}
        className="mb-2 p-2 border rounded w-full"
        rows={4}
        required
      />
      <button className="bg-green-500 text-white p-2 rounded w-full">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
