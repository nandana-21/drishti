const path = require("path");
const Web3 = require("web3");

const solJson = require("../BabiesWithoutBorders.json");

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

var abi = solJson.abi;
var contractInstance = web3.eth.contract(abi);
var address = "0x8f0c14fd0f9cb069de14fbcf2b0083d65514efab";
var contract = contractInstance.at(address);

var receiver = web3.eth.accounts[0];
var donor = web3.eth.accounts[1];

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("child", {
    pageTitle: "Child",
    path: "/",
    activeChild: true,
    productCSS: true
  });
});

router.post("/", (req, res, next) => {
  console.log("Hua ab?");
 contract.createId(6,0, 0 ,1,{from:web3.eth.accounts[0],gas:6721975} ,function(data,err){
   if(!err){
    console.log("Hash",data);
   }
 })
 res.redirect("/main");
});

 router.get("/main",(req, res, next) => {
  console.log("Hua ab?");
 res.render("stepper-status", {
    pageTitle: "Stepper",
    path: "/main",
    activeChild: true,
    productCSS: true
  });
 })



module.exports = router;
