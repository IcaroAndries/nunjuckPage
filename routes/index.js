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
    db('musicas').insert(req.body).then((id) => { //var ids armazena o id criado na inserção
        res.redirect('/')
    }, next);
});

router.get('/edit/:id',(req,res,next)=>{
    const {id} = req.params;

    db('musicas').where('id', id).first().then((data)=>{
        if(!data){
            return res.send(400);
        }

        res.render("edit.njk", {musica : data})
    },next);

});

router.put('/edit/:id',	(req,res,next)=>{
    const {id} = req.params;
    console.log(req.body);

    db('musicas').where('id', id).update(req.body).then((result) => {
        if(result === 0){
            return res.send(400);
        }

        res.redirect('/');

    })
});

router.delete('/delete/:id', (req,res,next)=>{
    const {id} = req.params;

    db('musicas').where('id', id).delete().then((result) =>{
        if(result === 0){
            return res.send(400);
        }

        res.redirect('/');
    })
});

module.exports = router;