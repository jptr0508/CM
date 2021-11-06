var pool = require("./connection");
var conc_creator_id = 1;
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

module.exports.getConcentByUserID = async function (id) {
    try {
        let sql = "Select * from concentracoes where conc_creator_id = $1";
        let result = await pool.query(sql, [id]);
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

module.exports.saveUnit = async function (meet) {
    try {
        let sql = "insert into concentracoes (conc_nome, conc_descricao, conc_data, conc_coordenadas,conc_rt_id, conc_creator_id) values ($1,$2,$3,$4,$5,$6)";
        let result = await pool.query(sql, [meet.name, meet.desc, meet.data, meet.coordenadas, meet.conc_rt_id, conc_creator_id]);
        return{status: 200, result:result}
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            result: err
        };
    }
}