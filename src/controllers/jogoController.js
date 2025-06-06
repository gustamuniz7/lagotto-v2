var salaModel = require("../models/salaModel");
var partidaModel = require("../models/partidaModel");

function criarPartida(req, res){
  dificuldade = req.body.dificuldade;
  let qtdeBomba;
  let qtdeItensBons = 10;
  let pontuacaoItem;
  if(dificuldade == 1){
      qtdeBomba = 10;
      pontuacaoItem = 100;
  } else if(dificuldade == 2){
      qtdeBomba = 10;
      pontuacaoItem = 150;
  } else if(dificuldade == 3){
      qtdeBomba = 10;
      pontuacaoItem = 200;
  } else if(dificuldade == 4){
      qtdeBomba = 90;
      pontuacaoItem = 500;
  }

  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const letra = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const letraMin = []
  for(let i = 0; i < letra.length; i++){
      letraMin.push(letra[i].toLocaleLowerCase());
  }
  let codigo = [];
  for(let i = 0; i < 6; i++){
      console.log(codigo)
      if(codigo.length < 2){
          const tipoLetra = Math.round(Math.random());
          if(tipoLetra == 0){
              const numRandom = Math.round(Math.random() * letra.length);
              codigo.push(letra[numRandom]);
          }
          if(tipoLetra == 0){
              const numRandom = Math.round(Math.random() * letraMin.length);
              codigo.push(letraMin[numRandom]);
          }
      } else{
          const numRandom = Math.round(Math.random() * num.length);
          codigo.push(num[numRandom]);
      }
  }
  const codigoTexto = codigo.join('');
  salaModel.createRoom(codigoTexto).then(async (resultado) => {
    const idPartida = resultado.id;
    while(qtdeBomba > 0 || qtdeItensBons > 0){
        let tipoItem = Number((Math.random()).toFixed());
        let itemPos = Number((Math.random() * 100).toFixed());
        if(tipoItem == 0){
            qtdeBomba--;
        } else {
            qtdeItensBons--;
        }
  
        await partidaModel.createItem(idPartida, tipoItem, itemPos, pontuacaoItem);
    }
  });
  return codigo;
}

module.exports = {
  criarPartida
}