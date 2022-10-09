const router = require("express").Router();
const planet = require("../controllers/planet.controllers");
// const users = require("../controllers/users.controllers");

router.get("/planets", planet.getPlanets);
// router.get("/users", users.setUsers);


module.exports = router;
