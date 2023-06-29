import abijson from "./Abi.json"

const {Web3} = require("web3");
const provider = "HTTP://127.0.0.1:7545";
const web3 = new Web3(provider);

const ABI = abijson;

const data = web3.contract.methods.x().call().then(console.log);