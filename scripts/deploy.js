const { ethers } = require('hardhat');

const main = async () => {
  const Vault = await ethers.getContractFactory('Vault');
  const vault = await Vault.deploy();

  const contractAddress = await vault.getAddress();
  console.log(
    `Contract deployed on the goerli network at => ${contractAddress}`
  );
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
