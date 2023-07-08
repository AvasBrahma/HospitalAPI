const passport=require('passport');
const JWTStrategy=require('passport-jwt').Strategy;
const ExtractJWT=require('passport-jwt').ExtractJwt;

const Doctor=require('../model/doctor');

let opts={
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:'test123'

}

passport.use(new JWTStrategy(opts, async function(jwtpPayload, done){
   let doctor= await Doctor.findById(jwtpPayload._id)
        if(doctor){
            return done(null,doctor);
        }else{
            console.log("Error in finding doctor from JWT");
            return;
        }
    }));

module.exports=passport;