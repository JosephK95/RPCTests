const Web3 = require("web3");
const web3_nethermind = new Web3("http://localhost:8548");

(async () => {
    async function nethermind() {
        try {
            let aa0 = "0x5727040e07868f81a084bCa1D29BdC94aa93dDFA";
            let aa1 = await web3_nethermind.eth.getTransactionCount(aa0, "latest");
            let aa2 = "0x6bBf02Fc6a6cFc731485Fc6F4AC6294BfCE5f006";
            let aa3 = 1500000;
            let aa4 = "0x4a817c800";
            let aa5 = "0x0";
            // Mutation code starts from here;
            let aa6 = "0x2";
            return await web3_nethermind.eth.estimateGas({ from: aa0, nonce: aa1, to: aa2, gas: aa3, gasPrice: aa6, type: aa5 });
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await nethermind(); 
    console.log(rv);
})();

