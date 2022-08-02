const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const path = require("path")
const resumecred  = require('./src/model/models/resumemodel')
const signup= require('./src/model/models/signupmodule')
const jwt = require("jsonwebtoken");
const multer = require('multer')

const mongoose = require("mongoose")
const dotenv = require("dotenv");
const { sign } = require("crypto");
const app = new express();
const port = 4000;

dotenv.config();
app.use(cors());
app.use(bodyparser.json());
app.use(express.json({ urlencoded: true }));
// app.use(express.json());
app.use(express.json({ limit: "200mb" }));
// const storage = multer.diskStorage({
//   destination:(req,file,callback)=>{
//     callback(null,'uploadedimages')
//   },
//   filename:(req,file,callback)=>{
//     callback(null,Date.now()+path.extname(file.originalname))
//   }
// })
// var upload = multer({storage:storage})


function verifyToken(req,res,next){
  if(!req.headers.Authorization){
    return res.status(401).send('unauthorizedrequest')
  }
  let token=req.headers.Authorization.split('')[1]
  if(token=='null'){
    return res.status(401).send('unauthorizedrequest')

  }
  let payload=jwt.verify(token, 'secretKey')
  console.log(payload);
  if(!payload)
{
  return res.status(401).send('unauthorizedrequest')
  req.userId=payload.subject;
}
next()
}
const db ='mongodb+srv://Resume_Builder123:VMNrcM0q10uJES9j@resumebuilder.rjnsjcb.mongodb.net/?retryWrites=true&w=majority'
// Databaseconnection
mongoose.connect(db, {
    useNewUrlParser: true,
})
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

// requiring routes
app.post('/insert', function (req, res) {

  console.log('req')
    
  var resumeinputs = {
 personal:req.body.data.personal.personalDetails,
 educational:req.body.data.educational.educationDetails,
 workexp:req.body.data.workexp.workExperience,
 hobbies:req.body.data.hobbies.hobbyDetails,
 skills:req.body.data.skills.skillDetails
  }
// console.log(resumeinputs);
  var inputs = new resumecred(resumeinputs);
  inputs.save()
   res.send()
    
})

// const resumerouter = require('./src/model/routes/resumeroute')

// app.use('/api',resumerouter)
app.get('/api/resdata',(req,res)=>{
  resumecred.find()
  .then((data)=>{
      // console.log(data)
      res.send(data)
  })
})
app.get('/api/displayusercred',(req,res)=>{
  signup.find()
  .then((data1)=>{
    res.send(data1)
  })
})

app.delete('/api/deleteusercred/:id',(req,res)=>{
id=req.params.id
signup.findByIdAndRemove({"_id":id})
.then(()=>{
  console.log('deleted');
  res.send()
})
})


// app.post('/signup',function(req,res){
//     console.log(req.body);
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
//     console.log(req.body);
//         var data={
//                     fname:req.body.users.fname,
//                     emailid:req.body.users.emailid,
//                     password:req.body.users.password
//                 };
//     var _auth=new signup(data);
//  _auth.save();
    
  
// });


app.post('/signup',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    console.log(req.body.users);
    signup
    .findOne({emailid: req.body.users.emailid},(err,user)=>{
      if(user){
        res.status(401).send('User Exists');
      }
      else{
        var data={
                    fname:req.body.users.fname,
                    emailid:req.body.users.emailid,
                    password:req.body.users.password
                };
                var _auth=new signup(data);
             _auth.save();
        res.status(200).send();
      }
    }) 
    


//     if(mail.value!=signup.emailid){
//       var data={
//         fname:req.body.users.fname,
//         emailid:req.body.users.emailid,
//         password:req.body.users.password
//     };
//     var _auth=new signup(data);
//  _auth.save();
//     }
//     else{
//       res.send('User already exist');
//     }
  
});



 
app.post('/login', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
    console.log("data is",req.body);
 
    signup
    .findOne({ emailid: req.body.authData.username, password: req.body.authData.password },(err,user)=>{
      if(!user){
        console.log("error is",err);
        res.status(401).send();
      }
      else{
        let payload = { subject: user.email + user.password };
            let token = jwt.sign(payload, "secretKey");
            res.status(200).send({ token });
        console.log(user)
      }
    })

  })


// admin login
app.post('/login_admin', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  console.log("data is",req.body);

  if(process.env.ADMIN_USERNAME===req.body.data.username && 
    process.env.ADMIN_PASSWORD===req.body.data.password){

      let payload={subject:process.env.ADMIN_USERNAME+process.env.ADMIN_PASSWORD}
      let token=jwt.sign(payload,'secretKey')
      res.status(200).send({token});
      console.log("success");
     

    }
    else{
     
      console.log("failed");

      res.status(401).send("failed");
    }
  })



app.get('/', (req, res) => {
    res.send('App is working Fine')
})

// port listening
app.listen(port, function () {
    console.log('running on port 3000');
})
