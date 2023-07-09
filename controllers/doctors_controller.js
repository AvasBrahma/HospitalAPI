const Doctor = require('../model/doctor');
const jwt=require('jsonwebtoken');


module.exports.registerDoctor= async function(req, res){

try {

   console.log("Doctor request to resgister", req.body);

   // validating doctor is already present in DB or not
   let doctor = await Doctor.findOne({ username: req.body.username });
        if (doctor) {
            return res.status(200).send({
                isRegistered: false,
                message: 'Doctor already exist',
            });
        }

  let newDoctor = await Doctor.create({
      fullname: req.body.fullname,
      username: req.body.username,
      password: req.body.password
  });

  if (newDoctor) {
      return res.status(200).send({ 
          isRegistered: true,
          data : newDoctor,
          message: 'Doctor registered',
      });
  }

} catch (error) {
  console.log('Internal servar error', error);
  return res.status(500).send({
      isRegistered: false,
      message: 'Internal Server Error',
  });
}
}

module.exports.login= async function(req, res){
    
  console.log("Login Doctor.......");
  let doctor= await Doctor.findOne({username: req.body.username})
  if(!doctor || doctor.password!=req.body.password){
     return res.json(422, {
       message: "Invalid username or password"
     });
  }

  return res.status(200).send({
    message: "Doctor Login Successfully, here is your token",
    data:{
      token: jwt.sign(doctor.toJSON(), 'test123', { expiresIn: '100000'})
    }
  })

}