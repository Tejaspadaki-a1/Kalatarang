const express = require("express");
const router = express.Router();
const { sendContactEmail } = require("../utils/email.js");

router.post("/", async (req, res) => {
  try {
    await sendContactEmail(req.body);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = router;
