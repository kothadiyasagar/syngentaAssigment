const express = require("express");
const cors = require("cors");
const connection = require("./database/db");
const userController = require("./routes/user.routes");
const organization = require("./routes/organization.routes");
const authentication = require("./middlewares/authentication");


require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Syngenta");
});

app.use("/user", userController);

app.use(authentication);

app.use("/organization", organization);

app.listen(process.env.PORT||8000, async () => {
  try {
    await connection;
    console.log("Db connnected");
  } catch (err) {
    console.log("error connecting to db");
    console.log(err);
  }
  console.log(`listening on ${process.env.PORT}`);
});
