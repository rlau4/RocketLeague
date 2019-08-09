var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TradeSchema = new Schema({
    haveItem: String,
    haveCertification: String,
    haveColor: String,
    wantItem: String,
    wantCertification: String,
    wantColor: String
});

var Trade = mongoose.model("Trade", TradeSchema);

module.exports = Trade;
