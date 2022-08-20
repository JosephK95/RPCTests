const Web3 = require("web3");
const web3_nethermind = new Web3("http://localhost:8548");

(async () => {
    async function nethermind() {
        try {
            let aa0 = "0x944Fc05eEf60731Df0cF88be8737B35DF37c1063";
            let aa1 = await web3_nethermind.eth.getTransactionCount(aa0, "latest");
            let aa2 = "0x51d62816F69C2c844033703D621ECD8156A5F70e";
            let aa3 = 1500000;
            let aa4 = "0x4a817c800";
            let aa5 = "0x0";
            // Mutation code starts from here;
            let aa6 = "137";
            let aa7 = 0;
            // let aa7 = (await web3_nethermind.eth.getBlock(aa6, false)).transactions.index()
            return await web3_nethermind.eth.call({ from: aa0, nonce: aa1, to: aa2, gas: aa7, gasPrice: aa4, type: aa5 });
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await nethermind(); 
    console.log(rv);
})();

