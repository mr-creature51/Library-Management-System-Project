
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    skill: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    userID :{
       type: String
   }


})

const Test = new mongoose.model("Products", ProductSchema)
module.exports = Test;