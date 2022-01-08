const UsdToken = artifacts.require("UsdToken");
const MinterToken = artifacts.require("MinterToken");
const FinterToken = artifacts.require("FinterToken");

const toWei = (amount) => web3.utils.toWei(amount, "ether");
const fromWei = (amount) => web3.utils.fromWei(amount, "ether");

contract("FinterToken", ([owner, investor]) => {
  let usdToken, minterToken, finterToken;

  before(async () => {
    usdToken = await UsdToken.deployed();
    minterToken = await MinterToken.deployed();
    finterToken = await FinterToken.new(minterToken.address, usdToken.address);
  });

  it("The Finter Token address has 100 of Minters", async () => {
    await minterToken.transfer(finterToken.address, toWei("100"));

    let balance;
    balance = await minterToken.balanceOf(finterToken.address);
    balance = fromWei(balance);

    assert.equal(balance, "100");
  });

  it("Investor has 100 usd", async () => {
    await usdToken.transfer(investor, toWei("100"), {
      from: owner,
    });

    let balance;
    balance = await usdToken.balanceOf(investor);
    balance = fromWei(balance);

    assert.equal(balance, "100");
  });
});
