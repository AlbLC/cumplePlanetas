// para conectar la base de datos
const mongoose = require("mongoose");

// url del mongo
// const url = `mongodb://localhost:27017/brithPlanet`;
const url = `mongodb://localhost:27017/birthPlanets`;

mongoose
  .connect(url, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect DateBase Mongo" + url);
  })
  .catch((err) => {
    console.error(err);
  });
