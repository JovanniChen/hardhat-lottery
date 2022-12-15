const { ethers } = require("hardhat")

const networkConfig = {
    default: {
        name: "ganache",
    },
    5: {
        name: "goerli",
        subscriptionId: "0",
        gasLane:
            "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
        keepersUpdateInterval: "30",
        raffleEntranceFee: ethers.utils.parseEther("0.01"),
        callbackGasLimit: "500000",
        vrfCoordinatorV2: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
    },
    1337: {
        name: "ganache",
        raffleEntranceFee: ethers.utils.parseEther("0.01"),
        gasLane:
            "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
        keepersUpdateInterval: "30",
        callbackGasLimit: "500000",
    },
}

const developmentChains = ["ganache"]
const VERIFICATION_BLOCK_CONFIRMATIONS = 6

module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
}
