const { model } = require("mongoose");

const { HoldingSchema } = require('../schema/HoldingsSchema');

const HoldingsModel = new model("holding", HoldingSchema);

module.exports = { HoldingsModel }
