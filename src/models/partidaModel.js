var database = require("../database/config");

const createItem = (idPartida, tipo, pos, pontuacao) => {
    const sqlStatment = `
        insert into item_partida (fkpartida, tipo, pos, pontuacao)
        values (${idPartida}, ${tipo}, ${pos}, ${pontuacao});
    `;

    return database.executar(sqlStatment);
}

const obterPartidaContexto = (idPartida) => {
    const sqlStatment = `
        select * from item_partida
    `;
}

module.exports = {
    createItem
}
