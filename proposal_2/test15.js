const Web3 = require("web3");
const web3_erigon = new Web3("http://localhost:8547");

(async () => {
    async function erigon() {
        try {
            let aa0 = "82";
            let aa1 = 1;
            // let aa1 = (await web3_erigon.eth.getBlock(aa0, false)).uncles.index()
            let aa2 = true;
            let aa3 = (await web3_erigon.eth.getUncle(aa0, aa1, aa2)).hash;
            let aa4 = 1;
            // let aa4 = (await web3_erigon.eth.getBlock(aa3, false)).uncles.index()
            return await web3_erigon.eth.getUncle(aa3, aa4);
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await erigon(); 
    console.log(rv);
})();

