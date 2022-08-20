const Web3 = require("web3");
const web3_geth = new Web3("http://localhost:8545");

(async () => {	
    async function geth() {
        try {
            let aa0 = "0x5475456B6FC147da5399712a8B17C2FDb6fF5386";
            let aa1 = await web3_geth.eth.getTransactionCount(aa0, "latest");
            let aa2 = "0x68d994ED7b8672b685110660833E0Fac7A7cdf27";
            let aa3 = "1000000000000000000";
            let aa4 = 314159;
            let aa5 = "0x4a817c800";
            let aa6 = "0x0";
            // Mutation code starts from here;
            let aa7 = "0x4a817c800";
            return await web3_geth.eth.estimateGas({ from: aa0, nonce: aa1, to: aa2, value: aa3, gas: aa4, gasPrice: aa5, type: aa7 });
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await geth(); 
    console.log(rv);
})();

