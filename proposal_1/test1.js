const Web3 = require("web3");
const web3_geth = new Web3("http://localhost:8545");

(async () => {
    async function geth() {
        try {
            let aa0 = "genesis";
            // Mutation code starts from here;
            let aa1 = "20000000000";
            return await web3_geth.eth.getBlockTransactionCount(aa1);
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await geth(); 
    console.log(rv);
})();

