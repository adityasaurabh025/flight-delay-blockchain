var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "enhance drop cherry toward jealous armed correct long amused spring wash work";

module.exports = {
  networks: {
    // development: {
    //   provider: function() {
    //     return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 20);
    //   },
    //   network_id: '*',
    //   gas: 9999999
    // }
    development: {
      host: "127.0.0.1",     // Localhost
      port: 7545,            // Standard Ganache UI port
      network_id: "*",
      //gas: 9999999
    }
  },
  compilers: {
    solc: {
      version: ">=0.4.24"
    }
  }
};