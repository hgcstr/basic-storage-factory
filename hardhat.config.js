//require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */

const { ALCHEMY_PROJECT_ID, WALLET_PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: ALCHEMY_PROJECT_ID,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    }
  },
};
