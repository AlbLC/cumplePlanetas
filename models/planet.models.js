// Creación de la actividad
const mongoose = require("mongoose");
// const AutoIncrement = require("mongoose-sequence")(mongoose);

const objetoPlanetSchema = {
  name: String,
  mass: Number,
  diameter: Number,
  trasnslation: Number,
  rotation: Number,
  fastSun: Number,
  temperature: Array,
  distanceSun: Number,
  satellites: Array,
};

const planetSchema = mongoose.Schema(objetoPlanetSchema, { versionKey: false });

// planetSchema.plugin(AutoIncrement, { inc_field: "idPlanet" });

const Planets = mongoose.model("planets", planetSchema);

// para exportar
module.exports = Planets;
