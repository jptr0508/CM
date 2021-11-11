var express = require('express');
var router = express.Router();
var mUtil = require("../models/userModel");

router.get("/", async function (req, res, next) {
    let utilizadores = await mUtil.getAllUsers();
    res.send(utilizadores);
});

router.get("/nome", async function (req, res, next) {
    let result = await mUtil.getUsersName();
    res.status(result.status).send(result.result);
});

module.exports = router;
