const MinterToken = artifacts.require("MinterToken");
const UsdToken = artifacts.require("UsdToken");
const FinterToken = artifacts.require("FinterToken");

module.exports = async (deployer, network, accounts) => {
  // Deploy the MinterToken contract
  await deployer.deploy(MinterToken, 1000000);
  const minterToken = await MinterToken.deployed();

  // Deploy the UsdToken contract
  await deployer.deploy(UsdToken, 1000000);
  const usdToken = await UsdToken.deployed();

  // // Deploy FinterToken contract
  await deployer.deploy(FinterToken, minterToken.address, usdToken.address);
  const finterToken = await FinterToken.deployed();
};
