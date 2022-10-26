var mongoose = require('mongoose');
var passport = require('passport');
const { db } = require('./models/users');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy((username, password, done) => {
    mongoose.model('Users').findOne({username: username}).then((user)=>{
        if(!user || user.password !== password){
            return done(null, false);
        }

        done(null, user)
    }, done);
}));

passport.serializeUser((user,done) => {
    done(null, user.id)
})

passport.deserializeUser((id,done) => {
    mongoose.model('Users').findOne({_id: id}).then((user) =>{
        done(null, user);
    }, done);
})