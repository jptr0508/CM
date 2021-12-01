var express = require('express');
var router = express.Router();
var mUser = require("../models/userModel");

router.get("/", async function (req, res, next) {
    let result = await mUser.getAllUsers();
    res.status(result.status).send(result.result);
});

router.get("/:id", async function (req, res, next) {
    let id = req.params.id;
    let result = await mUser.getUserbyId(id);
    res.status(result.status).send(result.result);
});

router.post('/login',async function(req, res, next) {
    let nome = req.body.nome;
    let password = req.body.password;
    let result = await mUser.login(nome,password);
    res.status(result.status).send(result.result);
});

module.exports = router;
