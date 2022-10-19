const router = require("express").Router();
const planet = require("../controllers/planet.controllers");
// const users = require("../controllers/users.controllers");
const home = require("../controllers/home.controllers")

router.get("/planets", planet.getPlanets);
// router.get("/users", users.setUsers);
router.post("/home",home.getHome)


module.exports = router;
