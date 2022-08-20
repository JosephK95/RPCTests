const Web3 = require("web3");
const web3_geth = new Web3("http://localhost:8545");

(async () => {
    async function geth() {        
        try {
            let aa0 = "0xb5c3a513fe397c255a8fc0f5ad13a4329167d178020863d92b08cef13988f95a";
            let aa1 = 0;
            // let aa1 = (await web3_geth.eth.getBlock(aa0, false)).transactions.index();
            // Mutation code starts from here
            let aa2 = "0x0000000000000000000000000000000000000000000000000000000000000002";
            return await web3_geth.eth.getTransactionFromBlock(aa2, aa1);
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await geth(); 
    console.log(rv);
})();

