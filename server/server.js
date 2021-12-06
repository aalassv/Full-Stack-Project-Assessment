const { json } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const data = require("../client/src/exampleresponse.json");

//t parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: false }));

//Using CORS to allow connect from other server to this.
app.use(require("cors")());

// Store and retrieve your videos from here
// If you want, you can copy "exampleresponse.json" into here to have some data to work with
let videos = data;

// Routes
//GET "/"
app.get("/", (req, res) => {
  res.status(200).send("Data is coming the town.");
});

app.get("/videos", (req, res) => {
  res.status(200).send(data);
});

//GET VIDEOS BY ID
app.get("/videos/:id", function (request, response) {
  const idRequested = request.params.id;
  const searchId = data.filter((val) => val.id == idRequested);
  if (!searchId === idRequested) {
    return response.status(400).send("Nothing to show");
  } else {
    response.status(200).send(data.filter((val) => val.id == idRequested));
  }
});

//DELETE VIDEOS BY ID
app.delete("/videos/:id", (request, response) => {
  //search for the index
  const deleteById = data.findIndex(
    (idSearch) => idSearch.id === request.params.id
  );
  console.log(deleteById);
  //If the
  if (deleteById >= 0) {
    data.splice(deleteById, 1);
    response.status(200).send("Data deleted");
  } else {
    response.sendStatus(404);
  }
});

//POST
// app.post("/", function (request, response) {
//   let oneMessages = {
//     id: Date.now(),
//     from: request.body.from,
//     text: request.body.text,
//   };
//   if (oneMessages.text === "" || oneMessages.from === "") {
//     response.status(400).send("One of the input is empty");
//   } else {
//     messages.push(oneMessages);
//     response.status(201).send("New message stored");
//   }
// });

// app.get("/", (req, res) => {
//   res.status(200).send(data);
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
