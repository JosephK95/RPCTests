const Web3 = require("web3");
const web3_erigon = new Web3("http://localhost:8547");

(async () => {
    async function erigon() {
        try {
	    // 'aa0' stores the hash of an uncle block
            let aa0 = "0x3932e658a19298b26d82215cf95b7385ddcd670b33ec3b04972a3adc8cbe6eba";
            let aa1 = 0;
            // let aa1 = (await web3_erigon.eth.getBlock(aa0, false)).transactions.index()
            return await web3_erigon.eth.getTransactionFromBlock(aa0, aa1);
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await erigon(); 
    console.log(rv);
})();

