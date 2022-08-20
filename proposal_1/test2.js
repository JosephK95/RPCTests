const Web3 = require("web3");
const web3_geth = new Web3("http://localhost:8545");

(async () => {
    async function geth() {        
        try {
            let aa0 = 413;
            let aa1 = "genesis";
            let aa2 = "0x44C36310ba0667A5DC3A7C9522A12Bb5F34E4edb";
            let aa3 = [null];
            // Mutation code starts from here;
            let aa4 = 1500000;
            return await web3_geth.eth.getPastLogs({ fromBlock: aa0, toBlock: aa4, address: aa2, topics: aa3 });
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await geth(); 
    console.log(rv);
})();

