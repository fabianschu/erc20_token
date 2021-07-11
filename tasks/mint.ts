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
