var pool = require("./connection");

module.exports.getAllUsers = async function () {
    try {
        let sql = "Select * from utilizador";
        let result = await pool.query(sql);
        let utilizadores = result.rows;
        return {
            status: 200,
            result: utilizadores
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            result: err
        };
    };
}

module.exports.getUserbyId = async function (id) {
    try {
        let sql = "Select * from utilizador where user_id=$1";
        let result = await pool.query(sql,[id]);
        let utilizador = result.rows[0];
        return {
            status: 200,
            result: utilizador
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            result: err
        };
    }
}

module.exports.getUsersName = async function () {
    try {
        let sql = "Select user_id, user_nome from utilizador";
        let result = await pool.query(sql);
        let utilizadores = result.rows;
        return {
            status: 200,
            result: utilizadores
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            result: err
        };
    }
}

module.exports.login = async function(nome,password) {
    try {
        let sql ="Select * from utilizador where user_nome = $1 and user_password = $2";
        let result = await pool.query(sql,[nome,password]);
        if (result.rows.length > 0)
            return { status:200, result:result.rows[0]};
        else return { status:401, result: {msg: "Nome ou password incorreta"}};
    } catch (err) {
        console.log(err);
        return { status:500, result: err};
    }
}