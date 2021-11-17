var express = require('express');
var router = express.Router();
var mDisc = require("../models/discussionModel");


router.get("/", async function (req, res, next) {
    let result = await mDisc.getAllDiscussions();
    res.status(result.status).send(result.result);
});
router.get("/:id", async function (req, res, next) {
    let id = req.params.id;
    let result = await mDisc.getDiscussaoByID(id);
    res.status(result.status).send(result.result);
});
router.post("/", async function (req, res, next){
    let newDisc = req.body;
    let result = await mDisc.saveDisc(newDisc);
    res.status(result.status).send(result.result);
 })

module.exports=router;