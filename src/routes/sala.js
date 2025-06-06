var express = require("express");
var router = express.Router();

var partidaController = require("../controllers/partidaController");

router.post('/create', function (req, res) {
  partidaController.criarPartida(req, res)
})

router.get('/enter/:cod', function (req, res){
  partidaController.entrarPartida(req, res);
})

router.get('/getContext/:idPartida', function(req, res){
  partidaController.obterPartidaContexto(req, res);
});

router.post('/updateContext', function (req, res) {
  partidaController.updateContextShowed(req, res);
})

router.get('/atualizarpontuacao/:iduser/:pontuacao', function (req, res){
  partidaController.atualizarPontuacao(req, res);
})

module.exports = router;