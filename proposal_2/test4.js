const Web3 = require("web3");
const web3_geth = new Web3("http://localhost:8545");

(async () => {	
    async function geth() {
        try {
            let aa0 = "0x433D76515A5158caEE3471985cB4C0c2Ba37E99A";
            let aa1 = await web3_geth.eth.getTransactionCount(aa0, "latest");
            let aa2 = "0x6bBf02Fc6a6cFc731485Fc6F4AC6294BfCE5f006";
            let aa3 = 5000000;
            let aa4 = "20000000000";
            let aa5 = "0x0";
            // Mutation code starts from here;
            let aa6 = 550; // <Range(1,1024)>;
            return await web3_geth.eth.estimateGas({ from: aa0, nonce: aa1, to: aa2, gas: aa6, gasPrice: aa4, type: aa5 });
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await geth(); 
    console.log(rv);
})();

