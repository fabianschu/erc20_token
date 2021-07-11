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
      const fuschuTokenInstance = await ethers.getContract("FuschuToken");
      console.log(amount);
      console.log(typeof amount);
      const mintAmount = utils.parseEther(amount);
      const tx = await fuschuTokenInstance.mint(address, mintAmount);
      console.log("Transaction:", tx.hash);
    }
  );
