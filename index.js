const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const dataCollections = data.products;

const express = require("express");
const morgan = require("morgan");
const app = express();

//bodyParser
app.use(express.json());
app.use(morgan("default"));
app.use(express.static("public"));

// C R U D
// CREATE
app.post("/dataCollections", (req, res) => {
  console.log(req.body);
  dataCollections.push(req.body);
  res.status(201).json(req.body);
});
// READ
app.get("/dataCollections", (req, res) => {
  res.status(200).json(dataCollections);
});
// READ ONE
app.get("/dataCollections/:id", (req, res) => {
  const id = +req.params.id;
  const data = dataCollections.find((p) => p.id === id);
  res.status(201).json(data);
});
// REMOVE
app.put("/dataCollections/:id", (req, res) => {
  const id = +req.params.id;
  const dataIndex = dataCollections.findIndex((p) => p.id === id);
  dataCollections.splice(dataIndex, 1, { ...req.body, id: id });
  res.status(200).json();
});
// UPDATE
app.patch("/dataCollections/:id", (req, res) => {
  const id = +req.params.id;
  const dataIndex = dataCollections.findIndex((p) => p.id === id);
  const updateData = dataCollections[dataIndex];
  dataCollections.splice(dataIndex, 1, { ...updateData, ...req.body });
  res.status(201).json();
});
// DELETE
app.delete("/dataCollections/:id", (req, res) => {
  const id = +req.params.id;
  const dataIndex = dataCollections.findIndex((p) => p.id === id);
  const deleteData = dataCollections[dataIndex];
  dataCollections.splice(dataIndex, 1);
  res.status(200).json(deleteData);
});

app.listen(8080, () => {
  console.log("server started");
});
