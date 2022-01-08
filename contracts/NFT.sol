// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address  ContractAddress;

    constructor(address marketplaceAddress)  ERC721("Metaverse Tokens", "METT "){
        contractAddress = marketplaceAddress;
    }
    function createToken(string memory tokenURI) public returns (uint){
        _tokenIds.Increment();
        uint256 newItemId = _tokenIds.current();
        mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(contractAddress, true);
        return newItemId;
    }
}
