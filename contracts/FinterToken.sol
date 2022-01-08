// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./MinterToken.sol";
import "./UsdToken.sol";

contract FinterToken is ERC20 {
    MinterToken public minter;
    UsdToken public usd;

    constructor(address _usdToken, address _minterToken)
        ERC20("Finter", "FINT")
    {
        usd = UsdToken(_usdToken);
        minter = MinterToken(_minterToken);
    }
}
