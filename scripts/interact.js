const { ethers } = require("hardhat");

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS_ENV;
  const storageFactory = await ethers.getContractAt(
    "StorageFactory",
    contractAddress
  );

  // Creating a contract from the storage factory
  console.log(
    "///Creating a child contract from the storage factory contract///"
  );
  const createContractFromSF =
    await storageFactory.createSimpleStorageContract();
  await createContractFromSF.wait();

  console.log(
    "///Using a function inside the Factory to access to the child contract store a value and get the value///"
  );
  console.log("/////////////");
  const numberToStore = 666;
  const myIndex = 0;
  await (await storageFactory.sfStore(myIndex, numberToStore)).wait();

  const getStoredValueInStoredContract = await storageFactory.sfGet(myIndex);
  console.log(
    "Value stored in a child contract created from the Storage Factory contract: ",
    getStoredValueInStoredContract
  );

  //   console.log("///Setting the value///");
  //   const newValueBytes32 = ethers.utils.formatBytes32String("HugoCastro");
  //   const setValue = await getterSetter.setBytes32(newValueBytes32);
  //   await setValue.wait();
  //   console.log(`Value Bytes32 set to: ${newValueBytes32}`);

  //   //Getting the public getBytes32 value
  //   console.log("///Getting the value///");
  //   const valueGet = await getterSetter.getBytes32();
  //   console.log(`Bytes32 value get : ${valueGet}`);
}

main();
