const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

// describe("SimpleStorage",()=>{}) same
describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        //assert expect
        assert.equal(currentValue.toString(), expectedValue)
    })

    it("should update when we call store", async function () {
        const transactionResponse = await simpleStorage.store(7)
        const expectedValue = "7"
        await transactionResponse.wait(1)
        const currentValue = await simpleStorage.retrieve()
        //assert expect
        assert.equal(currentValue.toString(), expectedValue)
    })
})
