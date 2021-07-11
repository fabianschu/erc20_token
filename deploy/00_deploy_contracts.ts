import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployFunction: DeployFunction = async ({
  getNamedAccounts,
  deployments,
}: HardhatRuntimeEnvironment) => {
  const { deploy } = deployments;
  const { f1 } = await getNamedAccounts();

  await deploy("FuschuToken", {
    from: f1,
    args: [f1],
    log: true,
  });
};

export default deployFunction;
