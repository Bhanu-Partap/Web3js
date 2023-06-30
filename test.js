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
  from :"0x7a343535Bf9d26445998E158BB272C92d42DF88e",
  to :"0x7d989b2154132af6E7e125190C68a460431967B4",
  value : web3.utils.toWei("5","ether"),
})