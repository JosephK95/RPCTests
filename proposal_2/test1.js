const Web3 = require("web3");
const web3_nethermind = new Web3("http://localhost:8548");

(async () => {
    async function nethermind() {
        try {
            let aa0 = "0x872e8A3b3ee457e76A36639D844d98E03600ee3D";
            let aa1 = await web3_nethermind.eth.getTransactionCount(aa0, "latest");
            let aa2 = "0x872e8A3b3ee457e76A36639D844d98E03600ee3D";
            let aa3 = "0x00";
            let aa4 = 314159;
            let aa5 = "0x2";
            let aa6 = "0x4a817c800";
            let aa7 = "0x4a817c800";
            // Mutation code starts from here;
            let aa8 = "1000000000000000";
            return await web3_nethermind.eth.estimateGas({ from: aa0, nonce: aa1, to: aa2, value: aa3, gas: aa4, type: aa5, maxFeePerGas: aa8, maxPriorityFeePerGas: aa7 });
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await nethermind(); 
    console.log(rv);
})();

