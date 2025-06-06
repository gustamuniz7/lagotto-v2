var express = require("express");
var router = express.Router();

var partidaController = require("../controllers/partidaController");

router.post('/create', function (req, res) {
  partidaController.criarPartida(req, res)
})

module.exports = router;