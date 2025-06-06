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
        where fkpartida = ${idPartida};
    `;

    return database.executar(sqlStatment);
}

const updatePartidaContext = (id, fkpartida) => {
    const sqlStatment = `
        update item_partida set revelado = 1
        where id = ${id} and fkpartida = ${fkpartida};
    `;


    return database.executar(sqlStatment)
}

module.exports = {
    createItem,
    obterPartidaContexto,
    updatePartidaContext
}
