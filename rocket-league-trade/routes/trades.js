const router = require('express').Router();
let Trade = require('../models/Trade.model');

router.route('/').get((req, res) => {
    Trade.find()
        .then(habits => res.json(trades))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/add").post((req, res) => {
    const haveItem = req.body.haveItem;
    const haveColor = req.body.haveColor;
    const haveCert = req.body.haveCert;
    const wantItem = req.body.wantItem;
    const wantColor = req.body.wantColor;
    const wantCert = req.body.wantCert;

    const newTrade = new Trade({
        haveItem,
        haveColor,
        haveCert,
        wantItem,
        wantColor,
        wantCert
    });

    newTrade.save()
        .then(()=> res.json("New Trade Added Sucsessfully"))
        .catch(err=> res.status(400).json("Error "+ err));
});

router.route('/:id').get((req, res) => {
    Trade.findById(req.params.id)
        .then(trade => res.json(trade))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Trade.findByIdAndDelete(req.params.id)
        .then(() => res.json('Trade deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;