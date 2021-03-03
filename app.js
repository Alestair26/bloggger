var express = require("express");
var bodyParser = require("body-parser");
var portId="127.0.0.1";
var portNo="3000";

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
});

app.post("/show",function(req,res){
    var name = req.body.name;
    var author =  req.body.author;
    var desc = req.body.desc;
    var blog = {name: name, author:author, desc:desc};
    res.render("show",{newBlog:blog});
});

app.listen(portNo,portId,function(){
    console.log("server has started");
});