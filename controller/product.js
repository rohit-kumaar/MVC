const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const dataCollections = data.products;

const CREATE = (req, res) => {
  console.log(req.body);
  dataCollections.push(req.body);
  res.status(201).json(req.body);
};

const READ = (req, res) => {
  res.status(200).json(dataCollections);
};

const READONE = (req, res) => {
  const id = +req.params.id;
  const data = dataCollections.find((p) => p.id === id);
  res.status(201).json(data);
};

const REMOVE = (req, res) => {
  const id = +req.params.id;
  const dataIndex = dataCollections.findIndex((p) => p.id === id);
  dataCollections.splice(dataIndex, 1, { ...req.body, id: id });
  res.status(200).json();
};

const UPDATE = (req, res) => {
  const id = +req.params.id;
  const dataIndex = dataCollections.findIndex((p) => p.id === id);
  const updateData = dataCollections[dataIndex];
  dataCollections.splice(dataIndex, 1, { ...updateData, ...req.body });
  res.status(201).json();
};

const DELETE = (req, res) => {
  const id = +req.params.id;
  const dataIndex = dataCollections.findIndex((p) => p.id === id);
  const deleteData = dataCollections[dataIndex];
  dataCollections.splice(dataIndex, 1);
  res.status(200).json(deleteData);
};

module.exports = {
  CREATE,
  READ,
  READONE,
  REMOVE,
  UPDATE,
  DELETE,
};
