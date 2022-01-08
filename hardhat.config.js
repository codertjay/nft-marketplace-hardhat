require("@nomiclabs/hardhat-waffle");

const fs = require('fs')
const privateKey = fs.readFileSync('.secret').toString()

module.exports = {
    networks: {
        hardhat: {
            chainId: 1337
        },
        mumbai: {
            url: 'https://speedy-nodes-nyc.moralis.io/15088af646dd644ffbb77dbd/polygon/mumbai',
            account: [privateKey]
        },
        mainnet: {
            url: 'https://speedy-nodes-nyc.moralis.io/15088af646dd644ffbb77dbd/polygon/mainnet',
            account: [privateKey]

        },
    },
    solidity: "0.8.4",
};
