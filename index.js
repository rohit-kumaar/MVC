const express = require("express");
const morgan = require("morgan");
const {
  CREATE,
  READ,
  READONE,
  REMOVE,
  UPDATE,
  DELETE,
} = require("./controller/product");
const app = express();

//bodyParser
app.use(express.json());
app.use(morgan("default"));
app.use(express.static("public"));

app
  .post("/dataCollections", CREATE)
  .get("/dataCollections", READ)
  .get("/dataCollections/:id", READONE)
  .put("/dataCollections/:id", REMOVE)
  .patch("/dataCollections/:id", UPDATE)
  .delete("/dataCollections/:id", DELETE);

app.listen(8080, () => {
  console.log("server started");
});
