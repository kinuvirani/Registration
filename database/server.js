var {mongoose}=require('./models/mongoose');
var {Register}=require('./db/reg');
var express=require('express');
var bodyparser=require('body-parser');
var cors=require('cors');
var app=express();

app.use(cors());
app.use(bodyparser.json());
// app.post('/data',(req,res)=>{
//     res.send("Hello WOrld");
// })

app.post('/insert',(req,res)=>{
    var nregister=new Register(req.body)
    nregister.save().then((doc)=>{
        res.status(200).send(doc);
    },(err)=>{
        res.status(400).send(err);
    }) 
})
app.get('/fetch',(req,res)=>{
    Register.find().then((doc)=>{
        res.status(200).send(doc);
    },(err)=>{
        res.status(400).send(err);
    });
});
app.post('/fetchone',(req,res)=>{
    var email=req.body.email;
    var pass=req.body.pass;
    Register.findOne({email:email,pass:pass}).then((doc)=>{
        res.status(200).send(doc);
    },(err)=>{
        res.status(400).send(err);
    });
});
// app.get('/data',(req,res)=>{
//     console.log(req.body.email);
//     res.status(200).send(req.body.email);
// })
app.listen(3000,()=>{
    console.log("Hello Port 3000");
});