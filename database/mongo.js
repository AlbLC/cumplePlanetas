// para conectar la base de datos
const mongoose = require("mongoose");

// url del mongo
// const url = `mongodb://localhost:27017/birthPlanets`;
const url = `mongodb+srv://AlbLC:1234@cluster0.jve4aip.mongodb.net/birthPlanets`
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
