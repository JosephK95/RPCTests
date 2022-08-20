const Web3 = require("web3");
const web3_nethermind = new Web3("http://localhost:8548");

(async () => {
    async function nethermind() {
        try {
            let aa0 = "0x51d62816F69C2c844033703D621ECD8156A5F70e";
            let aa1 = await web3_nethermind.eth.getTransactionCount(aa0, "latest");
            let aa2 = "0x1B5B46573931CCD6707783f5f5197E726e9DDdD1";
            let aa3 = 314159;
            let aa4 = "0x2";
            let aa5 = "0x4a817c800";
            let aa6 = "20000000000";
            // Mutation code starts from here;
            let aa7 = "0x2";
            return await web3_nethermind.eth.call({ from: aa0, nonce: aa1, to: aa2, gas: aa3, type: aa4, maxFeePerGas: aa7, maxPriorityFeePerGas: aa6 });
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }    
    let rv = await nethermind(); 
    console.log(rv);
})();

