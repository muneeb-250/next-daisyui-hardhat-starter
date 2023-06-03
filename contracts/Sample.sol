//SPDX-License-Identifier:  MIT

pragma solidity ^0.8.0;

contract Sample {
    uint256 public x;
    uint256 public y;

    function sum() public view returns (uint256) {
        uint256 _sum = x + y;
        return _sum;
    }
}
