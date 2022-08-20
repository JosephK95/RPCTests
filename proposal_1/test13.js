const Web3 = require("web3");
const web3_geth = new Web3("http://localhost:8545");

(async () => {
    async function geth() {        
        try {
            let aa0 = 732; // <Range(1,1024)>;
            let aa1 = 424;
            let aa2 = [86]; // <[Range(0,100)]>;
            // Mutation code starts from here;
            let aa3 = "149";
            let aa4 = 0;
            // let aa4 = (await web3_geth.eth.getBlock(aa3, false)).uncles.index()
            return await web3_geth.eth.getFeeHistory(aa4, aa1, aa2);
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await geth(); 
    console.log(rv);
})();

