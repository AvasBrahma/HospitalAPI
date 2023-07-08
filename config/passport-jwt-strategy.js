const passport=require('passport');
const JWTStrategy=require('passport-jwt').Strategy;
const ExtractJWT=require('passport-jwt').ExtractJwt;

const Doctor=require('../model/doctor');

let opts={
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken,
    secretOrKey:'test123'

}

passport.use(new JWTStrategy(opts, function(jwtpPayload, done){
    Doctor.findById(jwtpPayload._id, function(err, doctor){
        if(err){
            console.log("Error in finding user from JWT");
            return;
        }
        if(doctor){
            return done(null,doctor);
        }else{
            return done(null, false);
        }
    });
}));

module.exports=passport;