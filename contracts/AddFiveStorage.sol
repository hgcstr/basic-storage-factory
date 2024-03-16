// SPDX-License-Identifier: MIT
//inheritance example
pragma solidity ^0.8.18;
import {SimpleStorage} from "./SimpleStorage.sol";

contract AddFiveStorage is SimpleStorage {
    //example function, pure is used when the returned value doesn't come from a storaged varianble.
    function saHello() public pure returns (string memory) {
        return "hello";
    }
    //Override: add the override word and in the former function add virtual
    function store(uint256 _newNumber) public override {
        myFavoriteNumber = _newNumber + 5;
    }
}
