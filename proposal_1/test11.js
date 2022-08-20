const Web3 = require("web3");
const web3_geth = new Web3("http://localhost:8545");

(async () => {
    async function geth() {        
        try {
	    // The following address does not exist in the "earliest" block.
            let aa0 = "0x11B2F93660560Cfc889731D2ae5bd6d69EE5Df55";
            let aa1 = ["0x0000000000000000000000000000000000000000000000000000000000000001"];
            let aa2 = "earliest";
            return await web3_geth.eth.getProof(aa0, aa1, aa2);
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await geth(); 
    console.log(rv);
})();

