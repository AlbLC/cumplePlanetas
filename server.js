//! Cargamos express y traemos express()
const express = require("express");
const app = express();
//! Recogemos la conexión mongo
const db = require("./database/mongo.js");
//! Enlazamos con routes
const router = require("./routes/routes");
const port = 5500;

//! Las peticiones expresss las pasa a json()
app.use(express.json());
//! Localhost:5500
app.use("/", router);
app.listen(port, console.log("Servidor ON: " + port));
