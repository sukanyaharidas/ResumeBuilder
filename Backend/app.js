const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const path = require("path")
const resumecred  = require('./src/model/models/resumemodel')
const signup= require('./src/model/models/signupmodule')
const jwt = require("jsonwebtoken");

let currentUser='';
const mongoose = require("mongoose")
const dotenv = require("dotenv");
// const { sign } = require("crypto");
const app = new express();
const port = 3000;

dotenv.config();
app.use(cors());
app.use(bodyparser.json());
app.use(express.json({ urlencoded: true }));
app.use(express.json());



// function verifyToken(req,res,next){
//   if(!req.headers.Authorization){
//     return res.status(401).send('unauthorizedrequest')
//   }
//   let token=req.headers.Authorization.split('')[1]
//   if(token=='null'){
//     return res.status(401).send('unauthorizedrequest')

//   }
//   let payload=jwt.verify(token, 'secretKey')
//   console.log(payload);
//   if(!payload)
// {
//   return res.status(401).send('unauthorizedrequest')
//   req.userId=payload.subject;
  

// }
// next();
// }

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
}
req.userId=payload.subject;

next()
}
// const db ='mongodb+srv://Resume_Builder:resume123@cluster0.uq5mq.mongodb.net/Resume_Builder?retryWrites=true&w=majority'
// Databaseconnection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
})
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// requiring routes


app.post('/insert', function (req, res) {
  console.log(currentUser);
  // console.log('reqdata',req.body.data.personal.personalDetails)
    console.log(req.body.data);
  var resumeinputs = {
 personal:req.body.data.personal.personalDetails,
 educational:req.body.data.educational.educationDetails,
 workexp:req.body.data.workexp.workExperience,
 hobbies:req.body.data.hobbies.hobbyDetails,
 skills:req.body.data.skills.skillDetails,
userid:currentUser
  }

  resumecred.findOneAndUpdate({userid:currentUser},
                              {$set:{personal:req.body.data.personal.personalDetails,
                              educational:req.body.data.educational.educationDetails,
                              workexp:req.body.data.workexp.workExperience,
                              hobbies:req.body.data.hobbies.hobbyDetails,
                              skills:req.body.data.skills.skillDetails,
                              userid:currentUser }},
                              function(err,doc){
                                      if(!doc){
                                        var inputs = new resumecred(resumeinputs);
                                        inputs.save();
                                        console.log(resumeinputs);
                                        res.send();
                                      }   } )


  // var inputs = new resumecred(resumeinputs);
  // inputs.save()
  
})

// const resumerouter = require('./src/model/routes/resumeroute')

// app.use('/api',resumerouter)
// app.get('/api/resdata',(req,res)=>{
//   resumecred.findOne({userid:currentUser},(err,data)=>{
//     if(!data){
//       console.log("error is",err);
//       res.status(401).send();
//     }
//     else{
//       console.log(data)
//       res.send(data)
//     }
//   })
 
// })

app.get('/resdata', (req,res)=>{

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  resumecred
    .findOne({ userid: currentUser },(err,data)=>{
      if(!data){
        console.log("error is",err);
        res.status(401).send();
      }
      else{
        
        res.status(200).send(data);
        console.log(data)
      }
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
        currentUser= req.body.authData.username;
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
