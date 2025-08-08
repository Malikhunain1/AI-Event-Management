
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/predict-feedback", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:8000/predict/feedback", req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "ML Server Error", details: err.message });
  }
});

module.exports = router;
