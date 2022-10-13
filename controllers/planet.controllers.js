const mongoose = require("mongoose");
const planetModel = require("../models/planet.models.js");

const planet = {
  getPlanets: async (req, res) => {
    const planets = await planetModel.find();

    const dateStr = "1900-10-11";
    const date = new Date(dateStr);
    console.log(date); // 👉️ Wed Jun 22 2022
    const timestampInMs = date.getTime();
    console.log(timestampInMs); 
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    console.log(unixTimestamp); // 👉️ 1655856000
    res.json(planets);
  },
};

module.exports = planet;
