// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  
  const contractName = "ERC721Cool";
  const [deployer] = await ethers.getSigners(); //get the account to deploy the contract

  console.log("Deploying contract [" + contractName + "] with the account:", deployer.address); 
  const Contract = await hre.ethers.getContractFactory(contractName); // Getting the Contract
  const contract = await Contract.deploy(); //deploying the contract
  await contract.deployed(); // waiting for the contract to be deployed

  console.log(contractName + " deployed to: ", contract.address); // Returning the contract address on the rinkeby
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); // Calling the function to deploy the contract 
