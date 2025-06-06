var database = require("../database/config");

const createRoom = (aleatoryCode) => {
    let sqlStatment  = `
        insert into partida(codigo_partida)
        values ('${aleatoryCode}');
    `;

    return database.executar(sqlStatment);
}

const searchRoom = (roomCode) => {
    const sqlStatment = `
        select id from partida
        where codigo_partida = '${roomCode}'
    `;

    return database.executar(sqlStatment);
}


module.exports = {
    createRoom, 
    searchRoom
}
