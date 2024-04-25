import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const SUPPORTED_CHAIN = 11155420;

const opSepolia = {
    chainId: SUPPORTED_CHAIN,
    name: "OP Sepolia",
    currency: "ETH",
    explorerUrl: "https://sepolia-optimistic.etherscan.io/",
    rpcUrl: process.env.REACT_APP_RPC_URL,
};

const metadata = {
    name: "My Website",
    description: "My Website description",
    url: "https://mywebsite.com", // origin must match your domain & subdomain
    icons: ["https://avatars.mywebsite.com/"],
};

export const configureWeb3Modal = () =>
    createWeb3Modal({
        ethersConfig: defaultConfig({ metadata }),
        chains: [opSepolia],
        projectId: process.env.REACT_APP_Project_Id,
        enableAnalytics: false, // Optional - defaults to your Cloud configuration
    });
