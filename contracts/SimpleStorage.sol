//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18; //Stating our version

contract SimpleStorage {
    //Basic Type: boolean, uint, int, address, bytes
    uint256 myFavoriteNumber;

    struct Person {
        uint256 favoriteNumber;
        string name;
    }

    //Dynamic array
    Person[] public listOfPeople;

    //Chelsea -> 232
    mapping(string => uint256) public nameToFavoriteNumber;

    function store(uint256 _favoriteNumber) public virtual {
        myFavoriteNumber = _favoriteNumber;
    }

    //view, pure
    function retrieve() public view returns (uint256) {
        return myFavoriteNumber;
    }

    //view, pure
    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        listOfPeople.push(Person(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}
