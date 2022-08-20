const Web3 = require("web3");
const web3_erigon = new Web3("http://localhost:8547");

(async () => {
    async function erigon() {
        try {
	    // 'aa0' stores the hash of an uncle block
            let aa0 = "0x0cf474db6b88ef87cd80c570ca1a25d107b6db22803b1caecbb3b80b15041e98";
            return await web3_erigon.eth.getBlock(aa0);
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await erigon(); 
    console.log(rv);
})();

