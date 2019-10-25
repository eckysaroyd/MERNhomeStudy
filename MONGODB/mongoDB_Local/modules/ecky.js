const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema and models
const MarioCharSchema = new Schema({
  name: String,
  weight: Number
});
const MarioChar = mongoose.model("MarioChar", MarioCharSchema);

module.exports = MarioChar;
