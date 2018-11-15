const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Character = new Schema({
    name: String,
    age: Number,
    gender: String,
    heightinfeet: Number,
    heightininches: Number,
    race: String,
    weapon: String,
    group: String,
    subgroup: String
})

module.exports = mongoose.module('Character', Character)