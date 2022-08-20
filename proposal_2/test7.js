const Web3 = require("web3");
const web3_geth = new Web3("http://localhost:8545");

(async () => {	
    async function geth() {
        try {
            let aa0 = "0xD58566671CF3aB36221428Ad75d67feed29974a6";
            let aa1 = await web3_geth.eth.getTransactionCount(aa0, "latest");
            let aa2 = "0x23ff195b59D2E957bFa6DE2962D09553EE1E42E5";
            let aa3 = "0xde0b6b3a7640000";
            let aa4 = 3141592;
            let aa5 = "0x4a817c800";
            let aa6 = "0x0";
            // Mutation code starts from here;
            let aa7 = 1000000;
            return await web3_geth.eth.estimateGas({ from: aa0, nonce: aa7, to: aa2, value: aa3, gas: aa4, gasPrice: aa5, type: aa6 });
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await geth(); 
    console.log(rv);
})();

