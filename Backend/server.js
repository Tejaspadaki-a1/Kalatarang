const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contact.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.get('/',(req,res) =>{
    res.status(201).send("success")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
