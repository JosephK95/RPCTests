const Web3 = require("web3");
const web3_geth = new Web3("http://localhost:8545");

(async () => {	
    async function geth() {
        try {
            let aa0 = "0x8D82aa384f7Fe21BAcfeE19353868885Aa6fffd0";
            let aa1 = await web3_geth.eth.getTransactionCount(aa0, "latest");
            let aa2 = "0x7e0b4Ce1ee4374e7A2b17EE3f5714D389Aab43d8";
            let aa3 = 0x3d0900;
            let aa4 = "0x4a817c800";
            let aa5 = "0x0";
            return await web3_geth.eth.estimateGas({ from: aa0, nonce: aa1, to: aa2, gas: aa3, gasPrice: aa4, type: aa5 });
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await geth(); 
    console.log(rv);
})();

