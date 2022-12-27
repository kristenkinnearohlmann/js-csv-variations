const express = require("express");
const app = express();
const port = 5000;

app.use(express.static("src"));

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
