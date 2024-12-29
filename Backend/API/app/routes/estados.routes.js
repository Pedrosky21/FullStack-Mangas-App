const express = require("express");
const estadosController = require("../controllers/estados.controllers");
const router = express.Router();

router.get("/", estadosController.findAll);

module.exports = router;
