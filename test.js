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
  from: "0x15051DCCEd6633fE7E600D0f62Eacd901D71751b",
  to: "0x0B1F3208Dc2628b13692dE28f43dA1e5E713e2Eb",
  value: web3.utils.toWei("50", "ether"),
});
