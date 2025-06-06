var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var nome = req.body.nomeServer;
    var senha = req.body.senhaServer;

    console.log("Usuário e senha corretos!");

    if (nome == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(nome, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        if (resultadoAutenticar.length == 1) {
                            res.json({
                                idUsuario: resultadoAutenticar[0].id,
                                nome: resultadoAutenticar[0].nome,
                                senha: resultadoAutenticar[0].senha,
                            });
                        } else {
                            res.status(204).json();
                        }
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Nome e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        usuarioModel.cadastrar(nome, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function retornar(req, res) {
    idUsuario = req.params.idUsuario;
    usuarioModel.retornar(idUsuario).then((resultado) => {
        res.status(200).json(resultado);
    });
}

module.exports = {
    autenticar,
    cadastrar,
    retornar
}