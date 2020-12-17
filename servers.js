//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb+srv://lalithkumar41198:Lkb1998007!@cluster0.mffvj.mongodb.net/appDB", {useNewUrlParser: true, useUnifiedTopology: true});
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

const adminSchema = ({
  username: String,
  password: String
});

const Admin = mongoose.model("Admin", adminSchema);

const admin1 = new Admin({
  username: "lalith@gmail.com",
  password: "12345678"
});

const admin2 = new Admin({
  username: "kaushik@gmail.com",
  password: "87654321"
});

const adminS = [admin1, admin2];

// Admin.insertMany(adminS, function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Success");
//   }
// });

const userSchema = ({
  name: String,
  phone: String,
  username: String,
  password: String
});

const User = mongoose.model("User", userSchema);

app.get("/", function(request, response){
  response.sendFile(__dirname+"/HTMLs/Home.html");
});



app.get("/Admin", function(request,response){
  response.sendFile(__dirname+"/HTMLs/Admin-login.html");
});

app.post("/Admin", function(request, response){
  // console.log("Getting post rseponse")
  const userName = request.body.email;
  const passWord = request.body.pass;
  console.log(userName, passWord);
  Admin.find({username:userName}, function(err, found){
    console.log(found);
    for(var i=0; i<found.length; i++){
      if(found[i].password == passWord){
        console.log("Hey Admin");
        response.redirect("/SuccessA");
      }
      else{
        response.redirect("/Failure");
      }
    }
  });
});

app.get("/Login", function(request,response){
  response.sendFile(__dirname+"/HTMLs/login.html");
});

app.post("/Login", function(req, res) {
  const userName = req.body.email;
  const passWord = req.body.pass;
  console.log(userName, passWord);
  User.find({username:userName}, function(err, found){
    console.log(found);
    for(var i=0; i<found.length; i++){
      if(found[i].password == passWord){
        console.log("Hey User");
        res.redirect("/SuccessL");
      }
      else{
        res.redirect("/Failure");
      }
    }
  });
});

app.get("/Register", function(request,response){
  response.sendFile(__dirname+"/HTMLs/regg.html");
});

app.post("/Register", function(req, res){
  const namE = req.body.name;
  const phonE = req.body.number;
  const userName = req.body.email;
  const passWord = req.body.pass;

  const newReg = new User({
    name: namE,
    phone: phonE,
    username: userName,
    password: passWord
  });

  User.insertMany([newReg], function(err){
    if(err){
      console.log(err);
      res.redirect("/FailureR");
    }
    else {
      console.log("Success");
      res.redirect("/SuccessR");
    }
  });

});
app.get("/SuccessA", function(req, res){
  res.send("<h1>Hello Admin</h1>");
});

app.get("/SuccessL", function(req, res){
  res.send("<h1>Hello User.</h1>");
});

app.get("/SuccessR", function(req, res){
  res.send("<h1>Registered User.</h1>");
});

app.get("/Failure", function(req, res){
  res.send("<h1>Incorrect password. Go back and try again.</h1>");
});

app.get("/FailureR", function(req, res){
  res.send("<h1>Failed to register. Go back and try again.</h1>");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("app running in 3000 port");
});
