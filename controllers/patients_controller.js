const moment = require('moment');
const Patient=require('../model/patients');
const Report=require('../model/report');


// Function to reagister Patients in DB 
module.exports.registerPatients= async function(req, res){
    try {

        // Check Patients with same phone number already exits in DB
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


//Funtions to create report by using doctor id and patients id
module.exports.createReport=async function(req, res){
         
    try {
         let patient=Patient.findById(req.params.id);

          if(patient){
            let report = await Report.create({
                doctor: req.body.doctor,
                patient: req.params.id,
                status: req.body.status,
                date: req.body.date ? req.body.date : Date.now(), 
            });

            if(report){
                console.log(report,'report');
                return res.status(200).send({
                    report: report,
                    message: 'report created successfully'
                })
            }
    

          }else{
            return res.status(200).send({
                isReportCreated: false,
                message: 'Patients Not Found',
            });
          }
         
      


    } catch (error) {
        console.log('Internal Server Error',error);
        return res.status(500).send({
            err: error,
            isReportCreated: false,
            message: 'Internal Server Error',
        });
    }
}


//get all reports of patients
module.exports.getAllPatientReports= async function(req, res){
    try {
        let reports = await Report.find({patient: req.params.id});

        if(reports){
            return res.status(200).send({
                reports: reports,
                message: "All Reports of patient"
            })
        }


    } catch (error) {
        console.log('Internal Server Error',error);
        return res.status(500).send({
            message: 'Internal Server Error',
        });
    }
}