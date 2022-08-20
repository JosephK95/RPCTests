const Web3 = require("web3");
const web3_geth = new Web3("http://localhost:8545");

(async () => {
    async function geth() {        
        try {
            let aa0 = 258;
            let aa1 = 0;
            // let aa1 = (await web3_geth.eth.getBlock(aa0, false)).uncles.index();
            // Mutation code starts from here
            let aa2 = await web3_geth.eth.getTransactionCount("0xAe78C8FcDc3ee7D75d4f14b28EBfdaE87fA317e0", "latest");
	    // 'aa2' contains 60, which exceeds the maximum possible number of uncle blocks (=2).
	    return await web3_geth.eth.getUncle(aa0, aa2);
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await geth(); 
    console.log(rv);
})();

