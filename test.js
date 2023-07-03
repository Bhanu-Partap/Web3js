const { Web3 } = require("web3");
const provider = "http://127.0.0.1:7545";
// const provider = new Web3.HttpProvider("http://127.0.0.1:7545");
const web3 = new Web3(provider);

// fetching the balance of an account
// web3.eth
//   .getBalance("0x15051DCCEd6633fE7E600D0f62Eacd901D71751b")
//   .then(function (result) {
//     console.log(web3.utils.fromWei(result, "ether"));
//   });



web3.eth.sendTransaction({
  from :"0x9a6C4d42B9D56Af06423c3aAE58DE75230e2FDd4",
  to :"0x1e05B06E7c718425162e36af874d3B2C6313b4EC",
  value : web3.utils.toWei("5","ether"),
}).on("receipt",(reciept)=>{
  console.log("contract Address", reciept.contractAddress);
})

