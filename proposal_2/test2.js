const Web3 = require("web3");
const web3_nethermind = new Web3("http://localhost:8548");

(async () => {
    async function nethermind() {
        try {
            let aa0 = "0xeafa963C9966aB13a7CF8b29F5D334eb8fa61589";
            let aa1 = await web3_nethermind.eth.getTransactionCount(aa0, "latest");
            let aa2 = "0x74865EB1Df1A344EB9774009E5053D6545BD4A39";
            let aa3 = 1500000;
            let aa4 = "0x2";
            let aa5 = "0x4a817c800";
            let aa6 = "20000000000";
            // Mutation code starts from here;
            let aa7 = "1000000000000000000";
            return await web3_nethermind.eth.estimateGas({ from: aa0, nonce: aa1, to: aa2, gas: aa3, type: aa4, maxFeePerGas: aa5, maxPriorityFeePerGas: aa7 });
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await nethermind(); 
    console.log(rv);
})();

