import { utils } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { task, types } from "hardhat/config";

task("mintTokens", "Mints tokens")
  .addParam("amount", "Amount of tokens in ETH", undefined, types.int)
  .addParam("beneficiary", "Address of recipient", undefined, types.string)
  .setAction(
    async (
      { amount, beneficiary: address }: any,
      { ethers }: HardhatRuntimeEnvironment
    ) => {
      console.log(
        `Mint ${amount} FuschuTokens to following address: ${address}`
      );
      const fuschuTokenInstance = await ethers.getContract("FuschuToken");
      const mintAmount = utils.parseEther(amount.toString());
      const tx = await fuschuTokenInstance.mint(address, mintAmount);
      console.log("Transaction:", tx.hash);
    }
  );

task("approveSpending", "Allows address to spend tokens")
  .addParam("amount", "Amount of tokens in ETH", undefined, types.int)
  .addParam("address", "Address of future spender", undefined, types.string)
  .setAction(
    async ({ amount, address }: any, { ethers }: HardhatRuntimeEnvironment) => {
      console.log(`Allow ${address} to spend token amount: ${amount}`);
      const fuschuTokenInstance = await ethers.getContract("FuschuToken");
      const parsedAmount = utils.parseEther(amount.toString());
      const tx = await fuschuTokenInstance.approve(address, parsedAmount);
      console.log("Transaction:", tx.hash);
    }
  );

task("balanceOf", "Gets balance of specific address")
  .addParam("address", "address", undefined, types.string)
  .setAction(
    async ({ address }: any, { ethers }: HardhatRuntimeEnvironment) => {
      const fuschuTokenInstance = await ethers.getContract("FuschuToken");
      const balance = await fuschuTokenInstance.balanceOf(address);
      console.log(utils.formatEther(balance));
    }
  );
