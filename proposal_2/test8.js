const Web3 = require("web3");
const web3_geth = new Web3("http://localhost:8545");

(async () => {	 
    async function geth() {
        try {
            let aa0 = "0x08bAC56143fBb924706CB4319C6D0263df2c1413";
            let aa1 = await web3_geth.eth.getTransactionCount(aa0, "latest");
            let aa2 = "0x8f42d984362e37b67aEE03E6E3426c5F919d35Da";
            let aa3 = "123450000000000000";
            let aa4 = 5000000;
            let aa5 = "0x2";
            let aa6 = "20000000000";
            let aa7 = "0x4a817c800";
            return await web3_geth.eth.estimateGas({ from: aa0, nonce: aa1, to: aa2, value: aa3, gas: aa4, type: aa5, maxFeePerGas: aa6, maxPriorityFeePerGas: aa7 });
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    } 
    let rv = await geth(); 
    console.log(rv);
})();

