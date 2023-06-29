const { Web3 } = require('web3');
const web3 = new Web3("http://127.0.0.1:7545");

const abi =[
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
const address="0x9aD5CF2148fF735069405D8717c5A54F4E1bD4c5"

const contract =  new web3.eth.Contract(abi,address);
// contract.methods.x().call().then(console.log);

//=====================changing the value of x in contract

//**********=====+++++thers a bug that if we didnt use await then after rewriting the value of x it still shows the old value.**********=====+++++//

const call =(async()=>{
await contract.methods.set(25).send({from :"0x50e87F67a6049e94EEF38B5e09Bed9E937cc2E47"});

await contract.methods.x().call().then(console.log);
})

call();


