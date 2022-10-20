const router = require("express").Router();
const planet = require("../controllers/planet.controllers");
// const home = require("../controllers/home.controllers")

router.get("/planets", planet.getPlanets);
// router.post("/home",home.getHome)


module.exports = router;
