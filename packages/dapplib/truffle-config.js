require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remind concert grace infant fringe twist'; 
let testAccounts = [
"0x2a4558bcc73214c145d0ab4f665ade8626a71977a384784cc44d587cf2fe8272",
"0x90983edd41478f4c0c30e14c9aeb04d7267c404ceeac8e50d31383bd7a75155b",
"0x2186dd6badc58f9f5fe16822985fb7392564c3dea0d98493e88e6cd3bc2e7d9c",
"0xe4ffbe161eed44b14c310c3bf7b648c4437b0746fe303b66491a53ff50da0bf9",
"0xe93f72a6eee1016c5eda4684cbe253cd70a84e6c70022ba9e8e77e99c578c47e",
"0x32d0da687a8505ac3ced17c8adc366a096cd5a0988b259136977d830ac492223",
"0x99d2021c67095d227551496430acf749d3db7a6cad3064bd3dded114a1e14965",
"0x9092f979d4cec46125bae3167792fef624de139c1c670a6da03e3da9a607685e",
"0x5d7dafad81de0a7c604e245cc210243bc0a2dcf1a679708b9fe2f3d68cc87c52",
"0xf3d71c552f4e2f82828d45c4f8bde8f044c9cc7a80e1db895f1ce72337e0ccbf"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

