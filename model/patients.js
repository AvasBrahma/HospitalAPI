const mongoose = require('mongoose');
require('mongoose-dateonly')(mongoose);

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
        type: mongoose.Schema.Types.DateOnly,
        required: true
    },
    gender: {
        type: String,
        required:true 
    }
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;