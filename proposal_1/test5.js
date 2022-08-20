const Web3 = require("web3");
const web3_geth = new Web3("http://localhost:8545");

(async () => {
    async function geth() {        
        try {
            let aa0 = "0x3994254ee0043e96b0329e26a1b71f4edb75fdf78c757ab37c41a1bfbe4b56fd";
            let aa1 = 0;
            // let aa1 = (await web3_geth.eth.getBlock(aa0, false)).uncles.index()
            let aa2 = false;
            // Mutation code starts from here;
            let aa3 = "0x0000000000000000000000000000000000000000000000000000000000000001";
            return await web3_geth.eth.getUncle(aa3, aa1, aa2);
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await geth(); 
    console.log(rv);
})();

