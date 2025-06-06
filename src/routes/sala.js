var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

router.post("/create", function (req, res) {
  jogoController.criarPartida(req, res);
});

// router.post("/cadastrar", function (req, res) {
//   jogoController.cadastrar(req, res);
// })

module.exports = router;