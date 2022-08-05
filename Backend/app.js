const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const path = require("path")
const resumecred  = require('./src/model/models/resumemodel')
const signup= require('./src/model/models/signupmodel')
const jwt = require("jsonwebtoken");
const temp=require("./src/model/models/templatemodel")
const nodemailer = require('nodemailer');
let currentUser='';
let tempId=[];
let string=''
let id =''
const mongoose = require("mongoose")
const dotenv = require("dotenv");
// const { sign } = require("crypto");
const app = new express();
const port = 3000;

dotenv.config();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));






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


app.post('/api/insert', function (req, res) {
  console.log(currentUser);
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



app.get('/api/resdata', (req,res)=>{

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




app.get('/api/editDetails', function(req,res){
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


app.get('/api/getTemp', function(req,res){
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

 app.post('/api/sendTempid', function (req, res) {
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
 app.post('/api/imageUpload', function(req,res){
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

app.post('/api/signup',function(req,res){
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



 
app.post('/api/login', (req, res) => {
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
app.post('/api/login_admin', (req, res) => {
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


app.post('/api/sendmail',(req, res)=>{


  resumecred.findOne({userid:currentUser},(err,data)=>{
    if(data){
      id=data._id
    string= id.valueOf()
      console.log('checkid',string)
      res.status(200).send()
    }else{
      res.send()
    }
console.log(data);
console.log(string)
let link=req.body.mail +'/'+id
  console.log(link)
 
  var transporter = nodemailer.createTransport({

    service : "hotmail",
    auth :{
        user : 'wishesforu123@outlook.com',
        pass:"Vinwish@123"
    },
    tls : { rejectUnauthorized: false }
  });

  var mailOptions = {
      from: 'wishesforu123@outlook.com',
      to: currentUser,
      // to: this.data.email,
      subject: 'Canvas',
      text: 'Thankyou for choosing our Platform.Click the below link to see your Resume'+ link 

  };

  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
      } else {
          console.log('email send:'+info.response);
      }
  });

});
})

app.get('/api/displayusercred',(req,res)=>{
  signup.find()
  .then((data1)=>{
    res.send(data1)
  })
})

app.delete('/api/deleteusercred/:id',(req,res)=>{
id=req.params.id
signup.findByIdAndRemove({"_id":id })
.then(()=>{
  console.log('deleted');
  res.send()
})
})


app.get('/', (req, res) => {
    res.send('App is working Fine')
})

// port listening
app.listen(port, function () {
    console.log('running on port 3000');
})