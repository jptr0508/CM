var express = require('express');
var router = express.Router();
var mUtil = require("../models/meetingModel");


router.get("/", async function (req, res, next) {
    let result = await mUtil.getAllConcents();
    res.status(result.status).send(result.result);
});

router.get("/:id", async function (req, res, next) {
    let id = req.params.id;
    let result = await mUtil.getConcentByID(id);
    res.status(result.status).send(result.result);
});

router.get("/:id/roadtrip", async function (req, res, next) {
   let id = req.params.id;
   let result = await mUtil.getRoadtripById(id);
   res.status(result.status).send(result.result);
});

 router.post("/", async function (req, res, next){
    let newMeet = req.body;
    let result = await mUtil.saveConcent(newMeet);
    res.status(result.status).send(result.result);
 });

 router.put("/pontos", async function(req, res, next){
    let pontos = req.body;
    let result = await mUtil.atualizarPontos(pontos);
    res.status(result.status).send(result.result);
 });

 router.post("/roadtrip", async function (req, res, next){
    let newMeet = req.body;
    let result = await mUtil.saveRoadtrip(newMeet);
    res.status(result.status).send(result.result);
 });

module.exports = router;
