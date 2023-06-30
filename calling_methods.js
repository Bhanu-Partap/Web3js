const { Web3 } = require('web3');
const web3 = new Web3("http://127.0.0.1:7545");

const abi =[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "auctionEnd",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_bidamount",
				"type": "uint256"
			}
		],
		"name": "Bid",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "cancelAuction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "createItem",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "CreateItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "placeBid",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "lastBid",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "highestBid",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "highestBider",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "auction_time",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "lastHighestBider",
						"type": "address"
					}
				],
				"indexed": false,
				"internalType": "struct finaL.itemD",
				"name": "_item",
				"type": "tuple"
			}
		],
		"name": "transfer",
		"type": "event"
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getHighestBid",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getWinningBidder",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "itemDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "lastBid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "highestBid",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "highestBider",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "auction_time",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "lastHighestBider",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const address="0xCAd0ce73348ea316Bb3e42d21F1fd0F52Eb22521"

const contract =  new web3.eth.Contract(abi,address);
// contract.methods.x().call().then(console.log);

//=====================changing the value of x in contract

//**********=====+++++thers a bug that if we didnt use await then after rewriting the value of x it still shows the old value.**********=====+++++//

// const call =(async()=>{
// await contract.methods.set(25).send({from :"0x50e87F67a6049e94EEF38B5e09Bed9E937cc2E47"});

// await contract.methods.x().call().then(console.log);
// })

// call();






//====**********// REMIX AUCTION CONTRACT WITH GANACHE AND FUNCTION USAGE //**********====//


//--------------Creating the item--------------//
// contract.methods.CreateItem("hello").send({from : "0x7d989b2154132af6E7e125190C68a460431967B4", gas :"300000"})


//-------------- placing a bid on the item-----------------//

// contract.methods.placeBid("2").send({from :"0xc9CE118012D787d2AA31D8aE011e6c8996571AAE", gas :"300000", value :web3.utils.toWei("5", "ether")})

// -------------- get the auction end---------------//

// contract.methods.auctionEnd("1").send({from :"0x7d989b2154132af6E7e125190C68a460431967B4", gas :"300000"})

//-----------------cancelling the auction-------------//

contract.methods.cancelAuction("2").send({from: "0x7d989b2154132af6E7e125190C68a460431967B4" ,gas: "300000"})

//========= completed all functions and working well ========//