var express = require('express');
var router = express.Router();

var db = require('../db');

router.get('/',(req,res,next)=>{
    db('musicas').then((data)=>{
        res.render('index', {musicas: data});
    }, next);
});

router.get('/add',(req,res,next)=>{
    res.render('add');
});

router.post('/',(req,res,next)=>{
    console.log('json post: ' + req.body)
    db('musicas').insert(req.body).then((id) => { //var ids armazena o id criado na inserção
        console.log('id : ' + id);
        res.redirect('/')
    }, next);
});

router.get('/edit/:id',(req,res,next)=>{

});

router.put('/edit/:id',	(req,res,next)=>{

});

router.delete('/delete/:id', (req,res,next)=>{

});

module.exports = router;