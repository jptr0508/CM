var express = require('express');
var router = express.Router();
var mUtil = require("../models/concentModel");

router.get("/", async function (req, res, next) {
    let concentracoes = await mUtil.getAllConcents();
    res.send(concentracoes);
});

router.get("/:id", async function (req, res, next) {
    let id = req.params.id;
    let concentracoes = await mUtil.getConcentByUserID(id);
    res.send(concentracoes);
});



module.exports = router;
