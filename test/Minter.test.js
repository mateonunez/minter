const Minter = artifacts.require("Minter");

contract("Minter", (accounts) => {
  let minter;

  before(async () => {
    minter = await Minter.deployed();
  });

  it("1M of minters supplied", async () => {
    let balance;
    balance = await minter.balanceOf(accounts[0]);
    balance = web3.utils.fromWei(balance, "ether");

    assert.equal(balance, "1000000");
  });

  it("can transfer tokens between accounts", async () => {
    let amount;
    amount = web3.utils.toWei("1000", "ether");

    await minter.transfer(accounts[1], amount, {
      from: accounts[0],
    });

    let balance;
    balance = await minter.balanceOf(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");

    assert.equal(balance, "1000");
  });
});
