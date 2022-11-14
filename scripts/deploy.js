const ethers = require('ethers');
const hre = require("hardhat");
require('dotenv').config();

async function main() {
  //network = ganache
  const provider = new ethers.providers.JsonRpcProvider();
  
  // compile contracts/Faucet.sol using hardhat (not solc)
  let artifacts = await hre.artifacts.readArtifact("Faucet");
  let privateKey = process.env.PRIVATE_KEY;
  // let wallet = randomWallet.connect(provider);
  let wallet = new ethers.Wallet(privateKey, provider);
  // Create an instance of a Faucet Factory
  let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

  let faucet = await factory.deploy();
  console.log("Faucet address:", faucet.address);
  console.log("balance left: ", ethers.utils.formatEther((await wallet.getBalance()).toString()));
  console.log('address: ', await wallet.getAddress());
  await faucet.deployed();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});