var express = require('express');
var router = express.Router();
var mUtil = require("../models/meetingModel");

router.get("/", async function (req, res, next) {
    let result = await mUtil.getAllConcents();
    res.status(result.status).send(result.result);
});

router.get("/:id", async function (req, res, next) {
    let id = req.params.id;
    let concentracoes = await mUtil.getConcentByUserID(id);
    res.send(concentracoes);
});



module.exports = router;
