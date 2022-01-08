// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./MinterToken.sol";
import "./UsdToken.sol";

contract FinterToken {
    string public name = "Finter";

    MinterToken minter;
    UsdToken usd;

    constructor(MinterToken _minter, UsdToken _usd) {
        minter = _minter;
        usd = _usd;
    }
}
