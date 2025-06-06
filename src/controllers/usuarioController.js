var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    console.log("Usuário e senha corretos!");

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        if (resultadoAutenticar.length == 1) {
                            res.json({
                                idUsuario: resultadoAutenticar[0].idUsuario,
                                email: resultadoAutenticar[0].email,
                                nome: resultadoAutenticar[0].nome,
                                senha: resultadoAutenticar[0].senha,
                                username: resultadoAutenticar[0].username,
                                categoria: resultadoAutenticar[0].categoria_favorita,

                                idPerfil: resultadoAutenticar[0].idUsuario,
                                nomePerfil: resultadoAutenticar[0].nome,
                                usernamePerfil: resultadoAutenticar[0].username,
                                categoriaPerfil: resultadoAutenticar[0].categoria_favorita
                            });
                        } else {
                            res.status(204).json();
                        }
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
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
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var username = req.body.usernameServer;
    var categoria = req.body.categoriaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (username == undefined) {
        res.status(400).send("Seu usuário está undefined!");
    } else {

        usuarioModel.cadastrar(nome, email, senha, username, categoria)
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

function listar(req, res) {
    usuarioModel.listar().then((resultado) => {
        res.status(200).json(resultado);
    });
}

module.exports = {
    autenticar,
    cadastrar,
    listar
}