const Web3 = require("web3");
const web3_geth = new Web3("http://localhost:8545");

(async () => {	
    async function geth() {
        try {
            let aa0 = "0x8C99c08403e35DCA0c33BCAA2cFdbe22f57a9EEC";
            let aa1 = await web3_geth.eth.getTransactionCount(aa0, "latest");
            let aa2 = "0xe832537eD14ecb6DFEa694c7cd0DB235746Ea727";
            let aa3 = "0xde0b6b3a7640000";
            let aa4 = 1000000;
            let aa5 = "20000000000";
            let aa6 = "0x0";
            // Mutation code starts from here;
            let aa7 = "0x4a817c800";
            return await web3_geth.eth.call({ from: aa0, nonce: aa1, to: aa2, value: aa3, gas: aa4, gasPrice: aa5, type: aa7 });
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await geth(); 
    console.log(rv);
})();

