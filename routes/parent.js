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

const products = [];

// /admin/add-product => GET
router.get("/register", (req, res, next) => {
  res.render("register", {
    path: "/admin/register",
    formsCSS: true,
    productCSS: true,
    activeParent: true
  });
});

router.post("/register", (req, res, next) => {

 contract.createParentId(1,10,40,1,4,{from:web3.eth.accounts[1],gas:6721975} ,function(data,err){
   if(!err){
    console.log("Hash",data);
   }
 })
 res.redirect("/main");
});

 router.get("/main",(req, res, next) => {
 var status
  function AdoptionBegin(){
    contract.matchContract(0,0,{from:web3.eth.accounts[1],gas:6721975} ,function(instance){
   if(!err){
    console.log("Hash",instance.address);
   }
 })

  }

 res.render("stepper-status", {
    pageTitle: "Stepper",
    path: "/main",
    activeChild: true,
    productCSS: true
  });
 })

function Match(){
   contract.childReq(6,0, 0 ,1,{from:web3.eth.accounts[0],gas:6721975} ,function(data,err){
   if(!err){
    console.log("Hash",data);
   }
 })
 console.log("Sent To Main")
 res.redirect("/main");
 }

module.exports = router;
