const Web3 = require("web3");
const web3_geth = new Web3("http://localhost:8545");

(async () => {
    async function geth() {        
        try {
            let aa0 = "0x25d2615dea240a7cdd28c1ee98cfafdfd2b48122e3343d52a26483ab1b8ef395";
            let aa1 = 5;
            // let aa1 = (await web3_geth.eth.getBlock(aa0, false)).transactions.index();
            // Mutation code starts from here
            let aa2 = 314159;
            return await web3_geth.eth.getTransactionFromBlock(aa0, aa2);        
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await geth(); 
    console.log(rv);
})();

