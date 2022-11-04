export const airdrop = "0x20a1143C59Db0EFbED14F142c7885861eB247D39";
export const airdrop_ABI = [{
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "previousOwner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "OwnershipTransferred",
  "type": "event"
}, {
  "inputs": [{
    "internalType": "uint256[]",
    "name": "_amounts",
    "type": "uint256[]"
  }],
  "name": "AirdropAmount",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "contract IERC20",
    "name": "_token",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "WORTHWHILEAmount",
    "type": "uint256"
  }],
  "name": "emergencyWithdraw",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "Amount",
    "type": "uint256"
  }],
  "name": "emergencyWithdrawBNB",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "contract IERC20",
    "name": "_token",
    "type": "address"
  }, {
    "internalType": "address[]",
    "name": "_contributors",
    "type": "address[]"
  }, {
    "internalType": "uint256[]",
    "name": "_balances",
    "type": "uint256[]"
  }],
  "name": "multisendToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "contract IERC20",
    "name": "_token",
    "type": "address"
  }, {
    "internalType": "address[]",
    "name": "_contributors",
    "type": "address[]"
  }, {
    "internalType": "uint256",
    "name": "_balances",
    "type": "uint256"
  }],
  "name": "multisendTokenSigle",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "contract IERC20",
    "name": "_token",
    "type": "address"
  }, {
    "internalType": "address[]",
    "name": "_contributors",
    "type": "address[]"
  }, {
    "internalType": "uint256[]",
    "name": "_balances",
    "type": "uint256[]"
  }],
  "name": "multisendTokenwithApprove",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "owner",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}]

