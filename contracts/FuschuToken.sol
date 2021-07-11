pragma solidity 0.8.6;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FuschuToken is ERC20 {
    address internal fed;

    constructor(address _fed) ERC20("Fuschu", "FUSCHU") {
        fed = _fed;
    }

    function mint(address _beneficiary, uint _amount) public {
        _mint(_beneficiary, _amount);
    }
}