const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    Name : {
        type : String,
        required: true,
    },
    Place : {
        type: String,
        required: true
    },
    State : {
        type: String,
        required: true
    },
    number : {
        type: String,
        required: true,
        unique: true
    },
    bloodgroup : {
        type: String,
        required: true
    },
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;