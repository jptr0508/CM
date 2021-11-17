var pool = require("./connection");
var conc_creator_id = 1;
var pontos = 0;
module.exports.getAllConcents = async function () {
    try {
        let sql = "Select * from concentracoes";
        let result = await pool.query(sql);
        let concentracoes = result.rows;
        return {
            status: 200,
            result: concentracoes
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            result: err
        };
    }
}

module.exports.getConcentByID = async function (id) {
    try {
        let sql = "Select * from concentracoes where conc_id = $1";
        let result = await pool.query(sql, [id]);
        let concentracoes = result.rows[0];
        return {
            status: 200,
            result: concentracoes
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            result: err
        };
    }
}

module.exports.getRoadtripById = async function (id) {
    try {
        let sql = "Select * from roadtrip where conc_id = $1";
        let result = await pool.query(sql, [id]);
        let roadtrips = result.rows[0];
        return {
            status: 200,
            result: roadtrips
        };
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            result: error
        };
    }
}

module.exports.saveConcent = async function (meet) {
    try {
        let sql = "insert into concentracoes (conc_nome, conc_descricao, conc_data, conc_coordenadas, conc_creator_id, conc_tipo,conc_pontos_id) values ($1,$2,$3,$4,$5,$6,$7)";
        let result = await pool.query(sql, [meet.conc_nome, meet.conc_descricao, meet.conc_data, meet.conc_coordenadas, conc_creator_id, meet.conc_tipo, meet.conc_pontos_id]);
        return {
            status: 200,
            result: result
        }
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            result: err
        };
    }
}

module.exports.saveRoadtrip = async function (rt) {
    try {
        let sql = "insert into roadtrip (conc_nome, conc_descricao, conc_data, conc_coordenadas, conc_creator_id,conc_tipo,rt_coordenadas_final) values ($1,$2,$3,$4,$5,$6,$7)";
        let result = await pool.query(sql, [rt.conc_nome, rt.conc_descricao, rt.conc_data, rt.conc_coordenadas, conc_creator_id, rt.conc_tipo, rt.rt_coordenadas_final]);

    } catch (err) {
        console.log(err);
        return {
            status: 500,
            result: err
        };
    }
}

module.exports.atualizarPontos = async function (userPontos) {
    try {
        let sql = "update utilizador set user_pontos = $1 where user_id = $2";
        let result = await pool.query(sql, [userPontos.pontosF, userPontos.userID]);
        return {
            status: 200,
            result: result
        }
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            result: err
        };
    }
}