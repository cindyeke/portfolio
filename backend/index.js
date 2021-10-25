const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 2020;

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json()); // necessary for application/json requests

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "login.html"));
});
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "dashboard.html"));
});

app.use("/api", require("./router/api"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
