const Web3 = require("web3");
const web3_besu = new Web3("http://localhost:8549");

(async () => {
    async function besu() {
        try {
            let aa0 = "0xC90FadE4851aF236e62787236626B382BC330C32";
            let aa1 = "21";
            // Mutation code starts from here;
            let aa2 = "0xe4ba271c3580fafebd874dc3107eba505b1061fd8d9780e3a5577e48f6168711";
            return await web3_besu.eth.getCode(aa0, aa2);
        } catch (error) {
            return "[ERROR] " + error.message;
        }
    }    
    let rv = await besu(); 
    console.log(rv);
})();

