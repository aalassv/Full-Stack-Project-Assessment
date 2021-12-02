const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const data = require("../client/src/exampleresponse.json");


//Using CORS to allow connect from other server to this.
app.use(require("cors")());
// Store and retrieve your videos from here
// If you want, you can copy "exampleresponse.json" into here to have some data to work with
let videos = [data];

// GET "/"
app.get("/", (req, res) => {
  res.status(200).send(data );
});

app.get("/", (req, res) => {
  res.status(200).send(data);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
