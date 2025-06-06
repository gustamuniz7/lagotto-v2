var database = require("../database/config");

const createItem = (idPartida, tipo, pos, pontuacao) => {
    const sqlStatment = `
        insert into item_partida (fkpartida, tipo, pos, pontuacao)
        values (${idPartida}, ${tipo}, ${pos}, ${pontuacao});
    `;

    return database.executar(sqlStatment);
}

module.exports = {
    createItem
}
