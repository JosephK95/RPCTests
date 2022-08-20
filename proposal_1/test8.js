const Web3 = require("web3");
const web3_besu = new Web3("http://localhost:8549");

(async () => {
    async function besu() {
        try {
            let aa0 = "0xD7AFB74d0152b2a5acb56d0C11d89E5527506cb0";
            let aa1 = "232";
            let aa2 = 6;
            // let aa2 = (await web3_besu.eth.getBlock(aa1, false)).transactions.index()
            let aa3 = (await web3_besu.eth.getTransactionFromBlock(aa1, aa2)).blockNumber;
            // Mutation code starts from here;
            let aa4 = "0x0000000000000000000000000000000000000000000000000000000000000000";
            return await web3_besu.eth.getBalance(aa0, aa4);
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }    
    let rv = await besu(); 
    console.log(rv);
})();

