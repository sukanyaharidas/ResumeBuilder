const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const path = require("path")
const resumecred  = require('./src/model/models/resumemodel')
const signup= require('./src/model/models/signupmodule')
const jwt = require("jsonwebtoken");
const temp=require("./src/model/models/templatemodel")

let currentUser='';
let tempId=[];
const mongoose = require("mongoose")
const dotenv = require("dotenv");
// const { sign } = require("crypto");
const app = new express();
const port = 3000;

dotenv.config();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));



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
userid:currentUser,
profileImage:imageUrl
  }

  resumecred.findOneAndUpdate({userid:currentUser},
                              {$set:{personal:req.body.data.personal.personalDetails,
                              educational:req.body.data.educational.educationDetails,
                              workexp:req.body.data.workexp.workExperience,
                              hobbies:req.body.data.hobbies.hobbyDetails,
                              skills:req.body.data.skills.skillDetails,
                              userid:currentUser,
                              profileImage:imageUrl }},
                              function(err,doc){
                                      if(!doc){
                                        var inputs = new resumecred(resumeinputs);
                                        inputs.save();
                                        console.log(resumeinputs);
                                        res.send();
                                      }   } )


                                      
  
})



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




app.get('/editDetails', function(req,res){
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


app.get('/getTemp', function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  temp
    .findOne({ userid: currentUser },(err,data)=>{
      if(!data){
        console.log("error is",err);
        res.status(401).send();
      }
      else{
       
        res.status(200).send(data);
        console.log('temp is',data)
      }
    })

})

// app.post('/sendTempid',function(req,res){
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
//   console.log(req.body.id);

//   temp.findOne({userid: currentUser},(err,user)=>{
//       if(!err){
//         tempId.push(req.body.id);
//         var data={
//                     tempid:tempId,
//                     userid:currentUser
                   
//                 };
//                 var _temp=new temp(data);
//              _temp.save();
//         res.status(200).send(_temp);
  
//       }
//       else{
//         res.status(401).send();
//       }
//     })
  
//     }
//  );

 app.post('/sendTempid', function (req, res) {
  console.log(currentUser);
  // console.log('reqdata',req.body.data.personal.personalDetails)
  tempId.push(req.body.id);
  var data={
              tempid:tempId,
              userid:currentUser
             
          };

  temp.findOneAndUpdate({userid:currentUser},
                              {$set:{
                                tempid:tempId,
                                userid:currentUser
                               
                            }},
                              function(err,doc){
                                      if(!doc){
                                        var inputs = new temp(data);
                                        inputs.save();
                                        console.log(data);
                                        res.send(data);
                                      }   } )
  
})


//  app.post('/sendTempid',function(req,res){
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
//   console.log(req.body.id);

//   temp
//   .findOne({userid: currentUser},(err,user)=>{
//     if(user){
//       tempid.push(req.body.id);
//       var data={
//         tempId:[tempid],
//         userid:currentUser
//       }
//       var _temp=new temp(data);
//       _temp.save();
//       res.status(200).send();

//     }
//     else{
//       res.status(401).send();
//     }
//   })
    
//     }
//  );

 let imageUrl='';
 app.post('/imageUpload', function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");

    console.log('image is', req.body.imageData);
    imageUrl=req.body.imageData;
    // resumecred.updateOne({userid:currentUser}, {$set:{
    //   profileImage:req.body.imageData
    //   }}, function(err,data){
    //     if(data){
    //       res.send(data);
    //     }
    //   })
 })

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
        tempId=[];
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
