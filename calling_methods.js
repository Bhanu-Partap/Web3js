const {Web3} = require("web3");
const provider = "HTTP://127.0.0.1:7545";
const web3 = new Web3(provider);

const ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_x",
				"type": "uint256"
			}
		],
		"name": "set",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "x",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contract =  web3.eth.Contract(ABI, "0xD7ACd2a9FD159E69Bb102A1ca21C9a3e3A5F771B");

contract.methods.set().call().then(console.log);
