const Doctor=require('../model/doctor');


module.exports.registerDoctor= async function(req, res){

try {

   console.log("Doctor request to resgister", req.body);
  
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
  return res.status(200).send({
    message: "Doctor Login"
  })

}