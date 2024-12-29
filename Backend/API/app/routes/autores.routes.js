const express = require("express");
const autoresController = require("../controllers/autores.controllers");
const router = express.Router();

router.get("/", autoresController.findAll);
router.get("/:id", autoresController.findByPk);
router.post("/", autoresController.create);
router.put("/:id", autoresController.update);
router.delete("/:id", autoresController.delete);

module.exports = router;
