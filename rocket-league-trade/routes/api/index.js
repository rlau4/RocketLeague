
const router = require("express").Router();
const tradeRoutes = require("./trades");

// Book routes
router.use("/trades", tradeRoutes);

module.exports = route