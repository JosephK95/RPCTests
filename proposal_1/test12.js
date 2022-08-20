const Web3 = require("web3");
const web3_geth = new Web3("http://localhost:8545");

(async () => {
    async function geth() {        
        try {
            let aa0 = 418;
            let aa1 = 277;
            let aa2 = "0xdEAB5Dc164944c73c9f45aAC01329204DEE3d177";
            let aa3 = [null];
            return await web3_geth.eth.getPastLogs({ fromBlock: aa0, toBlock: aa1, address: aa2, topics: aa3 });
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await geth(); 
    console.log(rv);
})();

