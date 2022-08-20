const Web3 = require("web3");
const web3_geth = new Web3("http://localhost:8545");

(async () => {	
    async function geth() {
        try {
            let aa0 = "0xF0Dff0128D860503CcB3cF1c6407019BC109BFe8";
            let aa1 = await web3_geth.eth.getTransactionCount(aa0, "latest");
            let aa2 = "0x7679Ce9c7bD6c97C818CEBBb529f732C13F69EEA";
            let aa3 = 1500000;
            let aa4 = "0x4a817c800";
            let aa5 = "0x0";
            let aa6 = "261";
            // Mutation code starts from here;
            let aa7 = 314159;
            return await web3_geth.eth.call({ from: aa0, nonce: aa7, to: aa2, gas: aa3, gasPrice: aa4, type: aa5 }, aa6);
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await geth(); 
    console.log(rv);
})();

