const mongoose = require("mongoose");
const planetModel = require("../models/planet.models.js");

const planet = {
  getPlanets: async (req, res) => {
    const planets = await planetModel.find();
console.log(planets)
    
    res.json(planets);
  }
};

module.exports = planet;
