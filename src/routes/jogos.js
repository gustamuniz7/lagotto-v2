var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

router.get("/:empresaId", function (req, res) {
  jogoController.buscarAquariosPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  jogoController.cadastrar(req, res);
})

module.exports = router;