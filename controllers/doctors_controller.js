
module.exports.registerDoctor= async function(req, res){

  console.log("Doctor Register req body", req.body);
  return res.status(200).send({ 
    message: 'Doctor Registered'
});
  
}

module.exports.login= async function(req, res){
    
  console.log("Login Doctor.......");
  return res.status(200).send({
    message: "Doctor Login"
  })

}