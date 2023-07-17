import abijson from "./Abi.json"

const { Web3 } = require('web3');
const web3 = new Web3("http://127.0.0.1:7545");

const abi = abijson;
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