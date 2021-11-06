var pool = require("./connection");

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