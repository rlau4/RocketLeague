const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TradeSchema = new Schema({
    haveItem: {type: String, required: true},
    haveCertification: {type: String, required: true},
    haveColor: {type: String, required: true},
    wantItem: {type: String, required: true},
    wantCertification: {type: String, required: true},
    wantColor: {type: String, required: true}
});

const Trade = mongoose.model("Trade", TradeSchema);

module.exports = Trade;
