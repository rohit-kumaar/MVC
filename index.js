const express = require("express");
const morgan = require("morgan");
const app = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

app.use(express.json());
app.use(morgan("default"));
app.use(express.static("public"));
app.use("/products", productRouter);
app.use("/users", userRouter);

app.listen(8080, () => {
  console.log("server started");
});
