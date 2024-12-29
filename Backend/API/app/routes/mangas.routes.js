const express = require("express");
const router = express.Router();
const mangasController = require("../controllers/mangas.controllers");

router.get("/", mangasController.findAll);
router.get("/:id", mangasController.findByPk);
router.post("/", mangasController.create);
router.put("/:id", mangasController.update);
router.delete("/:id", mangasController.delete);

module.exports = router;