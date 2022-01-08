const MinterToken = artifacts.require("MinterToken");
const UsdToken = artifacts.require("UsdToken");

module.exports = function (deployer) {
  deployer.deploy(MinterToken, 1000000);
  deployer.deploy(UsdToken, 1000000);
};
