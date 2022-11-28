require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remain coconut just clock equal genre'; 
let testAccounts = [
"0xbbff6a0ccf11779c9763135559a2a795ac6654588d9de9d8164864a1303a4bd1",
"0x4ba1250e9c6e221ace7b3aafac38866a3f60b428ffbeb16e5107b59351d7705d",
"0x1603da76c2bcd5c33e96a78e3d3c9318d4b585f96cbe3c707e3219014497afcd",
"0xe5bb372df1d05b534563e44789715bd248c9d69d2b8314a6947ccc51e2877e45",
"0xce1e3a2ba642f40258484dbe88d0f73c5d53e7a279768938394c0e185010d1e1",
"0x20add13a6cc0ddee9e2d253df2d3188482ef2577372e5f8ee52e871c4293adf1",
"0x73287a926f1306147cb6cee0a4dfdb30eaccaf055c0669c8a073305708d8122a",
"0x52a662bf07e777981b758915484447f8b18c0a65af1b41249bead1ed23b43f3e",
"0x3e83f162ce9a62c3f98e6f8f35b716f4b47219b8d2805ca97f05ad5ede2aaeee",
"0xfb6bd0171a2d7fcbaf84971bc3026eb9a9d4b9c0fa4f7e6c0204968f8968ca97"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

