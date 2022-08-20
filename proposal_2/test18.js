const Web3 = require("web3");
const web3_erigon = new Web3("http://localhost:8547");

(async () => {
    async function erigon() {
        try {
	    // 'aa0' stores the hash of an uncle block
            let aa0 = "0x29ccce2dc7885d5766a12086146d0dbace405534ff08cc9e17cc91aa2c76f1f9";
            return await web3_erigon.eth.getBlockUncleCount(aa0);
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await erigon(); 
    console.log(rv);
})();

