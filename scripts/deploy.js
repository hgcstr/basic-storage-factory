// scripts/deploy.js
require("dotenv").config();

async function main() {
  const [deployer] = await ethers.getSigners();
  const StorageFactory = await ethers.getContractFactory("StorageFactory");
  const storageFactory = await StorageFactory.deploy();

  console.log("Deployer address:", deployer.address);
  console.log("Contract deployed to address:", storageFactory.address);
}

main();
