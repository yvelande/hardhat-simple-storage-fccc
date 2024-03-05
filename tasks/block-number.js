const { task } = require("hardhat/config")

task("block-number", "Prints the current block number").setAction(
    //hre是hardhat运行环境
    async (taskArgs, hre) => {
        //类似const { ethers} = require("hardhat")
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`current blocknumber:${blockNumber}`)
    },
)

module.exports = {}
