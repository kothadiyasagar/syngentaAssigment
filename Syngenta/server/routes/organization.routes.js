const express = require("express");

const OrganizationscemaModel = require("../models/Organization.model");

const  Controller = express.Router();

  Controller.post("/create", async (req, res) => {
  const { culture, seasons, crops, userId } = req.body;
  const organizationdata = new OrganizationscemaModel({
    culture,
    seasons,
    crops,
    userId,
  });
  await organizationdata.save();
  res.send({ message: "Done ", organizationdata });
});

 Controller.get("/", async (req, res) => {
  const { userId } = req.body;
  const Data = await OrganizationscemaModel.find({ userId });
  res.send(Data);
});



module.exports = Controller;
