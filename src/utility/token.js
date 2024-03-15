import { ethers } from "ethers";
import { TokenABI, TokenABIV2 } from "./contracts/tokenABI";
import { config } from "../config";

export const getTokenBalance = async (userAddress, token, signer) => {
    const Web3Provider = new ethers.providers.JsonRpcProvider(config.InfuraUrl);
    const contract = new ethers.Contract(
        config.tokens[token].address,
        TokenABI,
        Web3Provider,
    );
    const balance = await contract.balanceOf(userAddress);
    const formattedBalance = ethers.utils.formatUnits(
        balance,
        config.tokens[token].decimal,
    );
    return formattedBalance;
};

export const burnTokenFun = async (token, signer) => {
    const Web3Provider = new ethers.providers.JsonRpcProvider(config.InfuraUrl);
    const contract = new ethers.Contract(
        config.tokens[token].address,
        TokenABIV2,
        Web3Provider,
    );
    const balance = await contract.burnAmount();
    const formattedBalance = ethers.utils.formatUnits(
        balance,
        config.tokens[token].decimal,
    );
    return formattedBalance;
};

export const getTokenTotalSupply = async (token) => {
    const Web3Provider = new ethers.providers.JsonRpcProvider(config.InfuraUrl);
    const contract = new ethers.Contract(
        config.tokens[token].address,
        TokenABI,
        Web3Provider,
    );
    const balance = await contract.totalSupply();
    const formattedBalance = ethers.utils.formatUnits(
        balance,
        config.tokens[token].decimal,
    );
    return formattedBalance;
};

export const getFeeFun = async (token) => {
    const Web3Provider = new ethers.providers.JsonRpcProvider(config.InfuraUrl);
    const contract = new ethers.Contract(
        config.tokens[token].address,
        TokenABIV2,
        Web3Provider,
    );
    const balance = await contract.sellFee();

    return balance;
};

export const getMyRank = (token, signer, address) => {
    return new Promise(async (resolve, reject) => {
        const contract = new ethers.Contract(
            config.tokens[token].address,
            TokenABIV2,
            signer,
        );
        const data = await contract.getTopHolders();
        let index = data.indexOf(address);
        resolve(index + 1);
    });
};

export const getTotalHolders = async (token) => {
    const Web3Provider = new ethers.providers.JsonRpcProvider(config.InfuraUrl);
    const contract = new ethers.Contract(
        config.tokens[token].address,
        TokenABIV2,
        Web3Provider,
    );
    const balance = await contract.getTopHolders();
    return balance.length;
};

export const getTokenPrice = async (token, signer) => {
    const Web3Provider = new ethers.providers.JsonRpcProvider(config.InfuraUrl);
    const contract = new ethers.Contract(
        config.tokens[token].address,
        TokenABIV2,
        Web3Provider,
    );
    const balance = await contract.getCurrentPrice();
    const formattedBalance = ethers.utils.formatUnits(balance[1], 6);

    return formattedBalance;
};

export const getNextEpoch = async (token, signer) => {
    const Web3Provider = new ethers.providers.JsonRpcProvider(config.InfuraUrl);
    const contract = new ethers.Contract(
        config.tokens[token].address,
        TokenABIV2,
        Web3Provider,
    );
    const balance = await contract.nextEpoch();
    // const formattedBalance = ethers.utils.formatUnits(
    //     balance[1],
    //     config.tokens[token].decimal,
    // );
    console.log("%c Line:47 🥚 balance", "color:#ed9ec7", balance);
    return balance;
};

export const getTokenAllowance = async (
    userAddress,
    token,
    contractAddress,
    signer,
) => {
    const contract = new ethers.Contract(
        config.tokens[token].address,
        TokenABI,
        signer,
    );

    const balance = await contract.allowance(userAddress, contractAddress);
    const formattedBalance = ethers.utils.formatUnits(
        balance,
        config.tokens[token].decimal,
    );

    return formattedBalance;
};

export const approveToken = async (
    userAddress,
    token,
    contractAddress,
    signer,
) => {
    return new Promise(async (resolve) => {
        try {
            const contract = new ethers.Contract(
                config.tokens[token].address,
                TokenABI,
                signer,
            );
            let result;
            await contract
                .approve(contractAddress, `100000000000000000000000000000`)
                .then((r) => {
                    result = r;
                    console.log("%c Line:62 🍔 r", "color:#4fff4B", result);
                })
                .catch((err) => {
                    console.log("%c Line:67 🌶 err", "color:#e41a6a", err);
                });
            await result.wait();
            resolve(result);
        } catch (error) {
            console.log("%c Line:276 🥕 error", "color:#ed9ec7", error);
            resolve(false);
        }
    });
};
