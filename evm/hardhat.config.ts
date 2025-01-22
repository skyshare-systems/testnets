import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      accounts: [
        {
          privateKey:
            "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
          balance: "1000000000000000000000000", // 1 million ETH in wei
        },
        // Add more accounts as needed
      ],
    },
  },
};

export default config;
