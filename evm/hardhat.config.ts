import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/WcbWnYhrK-1Xmh9MI_FH9Pqzr1CyKDui",
        blockNumber: 1730373476,
      },
      accounts: [
        {
          privateKey:
            "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
          balance: "1000000000000000000000000",
        },
      ],
    },
  },
};

export default config;
