const Web3 = require("web3");
const web3_besu = new Web3("http://localhost:8549");

(async () => {
    async function besu() {
        try {
            let aa0 = "0x6359d95dfe2F9D3E47a5167433dEE3780cee82db";
            let aa1 = "260";
            // Mutation code starts from here;
            let aa2 = "0xD5C9556Ec8Fef8A240EDdFdd01433Dc6EC08CBCa";
            return await web3_besu.eth.getTransactionCount(aa0, aa2);
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }
    let rv = await besu(); 
    console.log(rv);
})();

