const path = require("path");
const Web3 = require("web3");

const solJson = require("../BabiesWithoutBorders.json");

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

var abi = solJson.abi;
var contractInstance = web3.eth.contract(abi);
var address = "0x08831b72d25af41ABCC0e4ab689d136349F7275e";
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
  
 contract.createId(6,0, 0 ,1,{from:web3.eth.accounts[0],gas:6721975} ,function(data,err){
   if(!err){
    console.log("Hash",data);
   }
 })
 res.redirect("/admin/");
});

 router.get("/main",(req, res, next) => {

 res.render("stepper-status", {
    pageTitle: "Stepper",
    path: "/main",
    activeChild: true,
    productCSS: true,
    childid: contract.childrenAgen(0),
    parentid: contract.parentAgen(0)
  });
 })


 function Match(){
   contract.parentReq(1,10,40,1,4,{from:web3.eth.accounts[1],gas:6721975} ,function(data,err){
   if(!err){
    console.log("Hash",data);
   }
 })
 console.log("Sent To Main")
 res.redirect("/admin/");
 }


module.exports = router;
