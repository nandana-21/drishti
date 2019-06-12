const Babies = artifacts.require("BabiesWithoutBorders");

module.exports = function(deployer) {
  deployer.deploy(Babies);
};
