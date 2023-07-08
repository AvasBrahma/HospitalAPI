const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    dateofbirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required:true 
    }
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;