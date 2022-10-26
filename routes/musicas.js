var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

router.get('/qrcode', (req,res,next) => {
    res.render('qr');
})

router.get('/',(req,res,next)=>{
    mongoose.model('Musica').find().then((musicas) =>{
        res.render('index', {
            musicas : musicas
        })
    })
});

router.get('/add',(req,res,next)=>{
    res.render('add');
});

router.post('/',(req,res,next)=>{
    let Musica = mongoose.model('Musica');
    let m = new Musica(req.body);

    console.log(req.body);
    console.log(m);

    m.save().then((result) => {
        res.redirect('/')
    }, next)
});

router.get('/edit/:id',(req,res,next)=>{
    const {id} = req.params;

    mongoose.model('Musica').findOne({_id : id}).then((musica) => {
        res.render('edit.njk', {
            musica: musica
        })
    }, next);

});

router.put('/edit/:id',	(req,res,next)=>{
    const {id} = req.params;
    
    mongoose.model('Musica').updateOne({_id : id},{
        $set:{
            nome: req.body.nome,
            artista: req.body.artista,
            estrelas: req.body.estrelas
        }
    }).then((musica) => {
        res.redirect('/')
    }, next);
});

router.delete('/delete/:id', (req,res,next)=>{
    const {id} = req.params;

    mongoose.model('Musica').deleteOne({_id : id}).then((musica) =>{
        res.redirect('/');
    }, next)
});

module.exports = router;