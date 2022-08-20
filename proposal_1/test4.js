const Web3 = require("web3");
const web3_geth = new Web3("http://localhost:8545");

(async () => {
    async function geth() {        
        try {
            let aa0 = "0xb66e524bc1b24d6d1ccb44a92144fed13fd15f528731d9b28edbee3495f3012f";
            // Mutation code starts from here;
            let aa1 = "0xb5f1f84eccfc6bb88b31b00f4c39f85edff4a3ae2ff4a8ee5c2416e06ef7807c";
            return await web3_geth.eth.getBlockUncleCount(aa1); 
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await geth(); 
    console.log(rv);
})();

