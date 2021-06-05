const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');
const path = require('path');
const app = express();
// Connect Database
connectDB();

app.use(cors())
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("./routes/api/user"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/auth", require("./routes/api/auth"));

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
