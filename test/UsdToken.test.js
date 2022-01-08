const UsdToken = artifacts.require("UsdToken");

contract("UsdToken", (accounts) => {
  let mUsd;

  before(async () => {
    mUsd = await UsdToken.deployed();
  });

  it("1M of mUsds supplied", async () => {
    let balance;
    balance = await mUsd.balanceOf(accounts[0]);
    balance = web3.utils.fromWei(balance, "ether");

    assert.equal(balance, "1000000");
  });

  it("can transfer tokens between accounts", async () => {
    let amount;
    amount = web3.utils.toWei("1000", "ether");

    await mUsd.transfer(accounts[1], amount, {
      from: accounts[0],
    });

    let balance;
    balance = await mUsd.balanceOf(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");

    assert.equal(balance, "1000");
  });
});
