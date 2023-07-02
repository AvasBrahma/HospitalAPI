const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
     fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;