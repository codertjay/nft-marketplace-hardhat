require("@nomiclabs/hardhat-waffle");

const fs = require('fs')
const privateKey = fs.readFileSync('.secret').toString()
console.log(privateKey)
const projectId = '15088af646dd644ffbb77dbd'

module.exports = {
    networks: {
        hardhat: {
            chainId: 1337
        },
        mumbai: {
            url: `https://speedy-nodes-nyc.moralis.io/${projectId}/polygon/mumbai`,
            accounts: [privateKey]
        },
        mainnet: {
            url: `https://speedy-nodes-nyc.moralis.io/${projectId}/polygon/mainnet`,
            accounts: [privateKey]

        },
    },
    solidity: "0.8.4",
};
