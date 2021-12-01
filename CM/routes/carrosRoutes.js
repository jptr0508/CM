var express = require('express');
var router = express.Router();
var mCarro = require("../models/carrosModel");

router.get("/:id", async function (req, res, next) {
    let id = req.params.id;
    let result = await mCarro.getCarrosUser(id);
    res.status(result.status).send(result.result);
});

router.post("/", async function (req, res, next) {
    let newInsc = req.body;
    let result = await mCarro.inscreverCarro(newInsc);
    res.status(result.status).send(result.result);

});

module.exports = router;