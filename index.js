const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routes/product");
const app = express();

app.use(express.json());
app.use(morgan("default"));
app.use(express.static("public"));
app.use("/products", productRouter);

app.listen(8080, () => {
  console.log("server started");
});
