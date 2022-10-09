var express = require('express');
var router = express.Router();

var db = require('../db');

router.get('/',(req,res,next)=>{
    res.render('index');
    db('musicas').then((data)=>{
        console.log(data);
    })
});

router.get('/add',(req,res,next)=>{
    res.render('add');
});

router.post('/',(req,res,next)=>{

});

router.get('/edit/:id',(req,res,next)=>{

});

router.put('/edit/:id',	(req,res,next)=>{

});

router.delete('/delete/:id', (req,res,next)=>{

});

module.exports = router;