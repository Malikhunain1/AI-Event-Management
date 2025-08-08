

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const eventRoutes = require('./routes/eventRoutes');
const authRoutes = require('./routes/auth');
const feedbackRoutes = require("./routes/feedbackRoutes");
const mlRoutes = require("./routes/mlRoutes");
const bodyParser = require("body-parser");
const axios = require("axios");

require("dotenv").config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/events', eventRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use(bodyParser.json());

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
app.use("/api/auth", require("./routes/auth")); 
app.use("/api", mlRoutes);

// Test Route (optional)
app.get("/", (req, res) => {
  res.send("🎉 Server is up and running!");
});

app.post("/api/predict-feedback", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:8000/predict/feedback", req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "ML Server Error", details: err.message });
  }
});


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🟢 Server running on port ${PORT}`);
});
