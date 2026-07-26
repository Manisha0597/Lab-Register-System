const aiRoutes = require("./routes/aiRoutes");
const express = require("express");
const cors = require("cors");
const db = require("./database/database");
const sampleRoutes = require("./routes/sampleRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/samples", sampleRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {

    res.send("Lab Backend Running");

});

const PORT = 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});