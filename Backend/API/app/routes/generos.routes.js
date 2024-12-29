const express = require("express");
const generosController = require("../controllers/generos.controllers");
const router = express.Router();

router.get("/", generosController.findAll);

module.exports = router;