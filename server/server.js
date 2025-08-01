// server/server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ Mongo error:", err));

// API Routes
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/feedback", require("./routes/feedbackRoutes"));

// Test Route (optional)
app.get("/", (req, res) => {
  res.send("🎉 Server is up and running!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🟢 Server running on port ${PORT}`);
});
