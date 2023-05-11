
var FlightSuretyApp = artifacts.require("FlightSuretyApp");
var FlightSuretyData = artifacts.require("FlightSuretyData");
var BigNumber = require('bignumber.js');

var Config = async function(accounts) {
    
    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0x565Ae7dC6521570c2726c906545F50f7881F7A68",
        "0x25deBA95EB2e76a12Eaf4B661Ba9BFe85e8f5765",
        "0x1d748d70B53586C711A2428394a2dAD38e9FAE13",
        "0x8140895674FcfF7fB95036602f79f0656eecB25E",
        "0x409290E0BD3e3ABC9DB72EB38FCC6b844b0c6bbb",
        "0x19dF2669DEf703b19441a06C1D85e127E343A921",
        "0xFE8285a4f88B107b55e84E3AB60DdfF4C50B4eEb",
        "0x82cAa08526B75D9a8CC0206438654DcFB3Ce2188",
        "0xfbC73ee59C001b8d60A31e5Ab8CacbfE45B644d8"
    ];


    let owner = accounts[0];
    let firstAirline = accounts[1];

    let flightSuretyData = await FlightSuretyData.new();
    let flightSuretyApp = await FlightSuretyApp.new(flightSuretyData.address);

    
    return {
        owner: owner,
        firstAirline: firstAirline,
        weiMultiple: (new BigNumber(10)).pow(18),
        testAddresses: testAddresses,
        flightSuretyData: flightSuretyData,
        flightSuretyApp: flightSuretyApp
    }
}

module.exports = {
    Config: Config
};