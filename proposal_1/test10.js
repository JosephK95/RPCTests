const Web3 = require("web3");
const web3_besu = new Web3("http://localhost:8549");

(async () => {
    async function besu() {
        try {
            let aa0 = "0x124C52CAFBBB864dFA09B538184ef84B24C29574";
            let aa1 = "0x0000000000000000000000000000000000000000000000000000000000000000";
            let aa2 = "0x6abc48dc8aad5d241791fd86b96cbe76623090b6331066032aacf791b7a535df";
            let aa3 = (await web3_besu.eth.getTransaction(aa2)).blockNumber;
            // Mutation code starts from here;
            let aa4 = "0x0E42aA538Be42E90E1cC917B1b00FBAa64644050";
            return await web3_besu.eth.getStorageAt(aa0, aa1, aa4);
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }    
    let rv = await besu(); 
    console.log(rv);
})();

