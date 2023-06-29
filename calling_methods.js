import abijson from "./Abi.json"

const {Web3} = require("web3");
const provider = "HTTP://127.0.0.1:7545";
const web3 = new Web3(provider);

const ABI = abijson;

const contract = web3.eth.Contract(abijson, "0xD7ACd2a9FD159E69Bb102A1ca21C9a3e3A5F771B");


