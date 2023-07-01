const express=require('express');
const router=express.Router();

const homeController=require('../controllers/home_controller');

router.use('/doctors', require('./doctors'));

router.use('/patients', require('./patients'));


router.get('/', homeController.home);


module.exports=router;