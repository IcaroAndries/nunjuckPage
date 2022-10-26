var express = require('express');
var router = express.Router();
const passport = require('passport');
var mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    if(req.isAuthenticated()){
        res.redirect('/home');
    } else{
        res.render('login')
        mongoose.model('Users').find().then((esponsor) => {
            console.log(esponsor)
        })
    }
});

router.get('/home', (req,res,next) => {
    if(req.isAuthenticated()){
        res.render('home',{
            session: req.session,
            user: req.session.nome
        })
    } else{
        res.redirect('/')
    }
})

router.get('/logout', (req,res,next) => {
    req.session.destroy();
    res.redirect('/');
})

router.post('/', passport.authenticate('local',{
    successRedirect: '/home',
    failureRedirect: '/error'
}))

module.exports = router;