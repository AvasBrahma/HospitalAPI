const Patient=require('../model/patients');

module.exports.registerPatients= async function(req, res){
    try {
        let patient = await Patient.findOne({phone: req.body.phone});

        if(patient){
            return res.status(200).send({
                patient:patient,
                message:  "Patients alredy exist",

            });
            
        }

        let newPatient = await Patient.create(req.body);

        if(newPatient){
            return res.status(200).send({
                patient:newPatient,
                isRegistered: true,
                message: "Patients registered",
            });
        }


    } catch (error) {
        console.log('error', error);
        return res.status(500).send({
            isRegistered: false,
            message: 'Internal server error'
        });
    }
}