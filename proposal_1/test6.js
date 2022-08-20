const Web3 = require("web3");
const web3_erigon = new Web3("http://localhost:8547");

(async () => {
    async function erigon() {
        try {
            let aa0 = "0x91EEc64E7954CcffF3440EBdD9f1E1E6e793B623";
            let aa1 = "latest";
            // Mutation code starts from here;
            let aa2 = "0x4a817c800";
            return await web3_erigon.eth.getCode(aa0, aa2);
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await erigon(); 
    console.log(rv);
})();

