const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const { Client } = require('pg');
const cors = require("cors");
const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.use(express.static(path.join(__dirname,'public')));

app.use(favicon(path.join(__dirname, 'public/static', 'Logo_Trans_1.svg')));

app.use(bodyParser.urlencoded({extended: true}));

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.get("/store", function(req, res){
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", function(req,res){
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/create", function(req,res){
  res.sendFile(__dirname + "/views/create.html");
});

app.get("/account", function(req,res){
  res.sendFile(__dirname + "/views/account.html");
});

app.get("/product", function(req,res){
  res.sendFile(__dirname + "/views/productPage.html");
});

app.get("/basket", function(req,res){
  res.sendFile(__dirname + "/views/basket.html");
});

app.get("/", function(req,res){
  res.sendFile(__dirname + "/views/home.html");
});

app.listen(3000, function(){
  console.log("Server started on port 3000")
});
