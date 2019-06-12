const path = require("path");
const Web3 = require("web3");

const solJson = require("../BabiesWithoutBorders.json");

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

var abi = solJson.abi;
var contractInstance = web3.eth.contract(abi);
var address = "0x86b3adc8f0fdd7df64986156af9218ecd9d54a29";
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

router.post("/register", (req, res) => {
  //call web3
  res.redirect("/");
});

module.exports = router;
