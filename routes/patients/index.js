const express=require('express');
const router=express.Router();
const passport=require('passport');

const patients_controller=require('../../controllers/patients_controller');

router.post('/register', passport.authenticate('jwt', {session: false}), patients_controller.registerPatients)

router.post('/:id/create-report', passport.authenticate('jwt', {session: false}), patients_controller.createReport);

router.get('/:id/all_reports', passport.authenticate('jwt', {session: false}), patients_controller.getAllPatientReports);

module.exports=router;