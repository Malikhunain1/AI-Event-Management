// client/src/components/EventForm.js
import React, { useState } from "react";
import axios from "axios";

const EventForm = () => {
  const [form, setForm] = useState({
    name: "",
    date: "",
    type: "",
    expectedAttendees: "",
    location: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/events/add", form);
      alert("✅ Event registered!");
      setForm({ name: "", date: "", type: "", expectedAttendees: "", location: "" });
    } catch (err) {
      alert("❌ Error: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow rounded w-96 mx-auto mt-10 bg-white">
      <h2 className="text-xl font-bold mb-4">Register Event</h2>
      {["name", "date", "type", "expectedAttendees", "location"].map((field) => (
        <input
          key={field}
          type={field === "date" ? "date" : "text"}
          name={field}
          placeholder={field}
          value={form[field]}
          onChange={handleChange}
          className="mb-2 p-2 border rounded w-full"
          required={field !== "type"}
        />
      ))}
      <button className="bg-blue-500 text-white p-2 rounded w-full">Submit</button>
    </form>
  );
};

export default EventForm;

